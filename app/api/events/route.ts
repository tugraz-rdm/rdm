import { NextResponse } from 'next/server';
import { TUGRAZ_CONFIG } from '#/lib/config';

export const runtime = 'nodejs';

interface RDMEvent {
  date: string;
  name: string;
  url: string;
  urlImage?: string;
  moreInfo?: string;
}

export async function GET() {
  try {
    // Fetch the RDM events page
    const response = await fetch(TUGRAZ_CONFIG.RDM_EVENTS_URL, {
      headers: {
        'User-Agent': TUGRAZ_CONFIG.USER_AGENT,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      },
      signal: AbortSignal.timeout(TUGRAZ_CONFIG.REQUEST_TIMEOUT_MS),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const html = await response.text();
    const events: RDMEvent[] = parseEventsFromHTML(html).slice(0, TUGRAZ_CONFIG.MAX_EVENTS);
    return NextResponse.json(events.length > 0 ? events : getFallbackEvents());

  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json(getFallbackEvents());
  }
}

function parseEventsFromHTML(html: string): RDMEvent[] {
  const events: RDMEvent[] = [];

  try {
    // Remove scripts/styles to avoid noise
    const cleaned = html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '');

    // Convert tags to line breaks, then split into lines
    const text = cleaned.replace(/<[^>]+>/g, '\n');
    const lines = text
      .split(/\r?\n/)
      .map(s => s.replace(/\s+/g, ' ').trim())
      .filter(s => s.length > 0);

    // Date patterns observed on the TU Graz page
    const datePatterns: RegExp[] = [
      /^[A-Za-z]{3,}\.?\s+\d{1,2}(?:st|nd|rd|th)?(?:\s+\d{4})?$/, // May 23th 2024, Feb. 7th 2024, May 15th
      /^\d{1,2}\s+[A-Za-z]{3,}\s+\d{4}$/, // 17 May 2023
    ];

    const isDateLine = (line: string) => datePatterns.some(re => re.test(line));
    const isNoise = (line: string) =>
      /^(RDM\s*\/|Menü|Tools|Publish|Policies|Support|Networks and Events|Webinars and Workshops|EOSC|To top|Contact|Legal Notice|Privacy Policy)$/i.test(
        line
      );

    for (let i = 0; i < lines.length; i += 1) {
      const line = lines[i];
      if (!isDateLine(line)) continue;

      // Find the next non-noise, non-empty line as title
      let title: string | null = null;
      for (let j = i + 1; j < Math.min(i + 6, lines.length); j += 1) {
        const candidate = lines[j];
        if (isNoise(candidate)) continue;
        // Skip if it's another date line immediately
        if (isDateLine(candidate)) break;
        title = candidate;
        break;
      }

      if (title) {
        events.push({
          date: line,
          name: title,
          url: TUGRAZ_CONFIG.RDM_EVENTS_URL,
        });
      }
    }
  } catch (error) {
    console.error('Error parsing HTML:', error);
  }

  return events;
}

function getFallbackEvents(): RDMEvent[] {
  return [
    {
      date: 'Nov. 29th 2023',
      name: 'National RDM Exchange',
      url: 'https://www.tugraz.at/sites/rdm/networks-and-events/meetings-and-events/national-rdm-exchange',
    },
    {
      date: 'Jan. 9th 2024',
      name: 'Webinar Data Management with LinkAhead',
      url: 'https://forschungsdaten.at/sharedrdm/materialien/data-management-mit-linkahead/',
    },
  ];
}
