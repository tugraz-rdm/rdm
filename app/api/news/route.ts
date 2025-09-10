import { NextResponse } from 'next/server';
import { TUGRAZ_CONFIG } from '#/lib/config';

export const runtime = 'nodejs';

interface NewsItem {
  title: string;
  url?: string;
  date?: string;
}

export async function GET() {
  try {
    const response = await fetch(TUGRAZ_CONFIG.RDM_HOME_URL, {
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
    const news = parseNewsFromHTML(html).slice(0, 6);
    return NextResponse.json(news.length > 0 ? news : getFallbackNews());
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(getFallbackNews());
  }
}

function parseNewsFromHTML(html: string): NewsItem[] {
  const items: NewsItem[] = [];

  try {
    // Strip scripts/styles
    const cleaned = html
      .replace(/<script[\s\S]*?<\/script>/gi, '')
      .replace(/<style[\s\S]*?<\/style>/gi, '');

    // Roughly locate the "News" section by heading
    const newsStartIdx = cleaned.search(/>\s*News\s*</i);
    const slice = newsStartIdx >= 0 ? cleaned.slice(newsStartIdx, newsStartIdx + 8000) : cleaned;

    // Convert tags to newlines, split lines
    const text = slice.replace(/<[^>]+>/g, '\n');
    const lines = text
      .split(/\r?\n/)
      .map(s => s.replace(/\s+/g, ' ').trim())
      .filter(Boolean);

    // Known examples include:
    // "eLabFTW Update Info Version 5.2. (only for registered Users)"
    // "RDM Flyer and Quick Start Guide"
    // Followed by "Check out our Flyer" / "Get started with our Guide"

    const isNoise = (line: string) =>
      /^(Research Data Management|RDM|Menü|Contact|Legal Notice|Privacy Policy|Cookie|SCIENCEPASSIONTECHNOLOGYTUGraz)$/i.test(
        line
      );

    for (let i = 0; i < lines.length; i += 1) {
      const line = lines[i];
      if (isNoise(line)) continue;
      // Heuristic: consider lines with 6+ chars and not a menu/footer as news title
      if (line.length >= 6 && /[A-Za-z]/.test(line)) {
        // Avoid adding obvious CTA-only lines
        if (/^Check out|^Get started/i.test(line)) continue;
        items.push({ title: line, url: TUGRAZ_CONFIG.RDM_HOME_URL });
        if (items.length >= 10) break;
      }
    }
  } catch (e) {
    console.error('Error parsing news HTML:', e);
  }

  return dedupe(items);
}

function dedupe(items: NewsItem[]): NewsItem[] {
  const seen = new Set<string>();
  const out: NewsItem[] = [];
  for (const it of items) {
    const key = (it.title || '').toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      out.push(it);
    }
  }
  return out;
}

function getFallbackNews(): NewsItem[] {
  return [
    { title: 'eLabFTW Update Info Version 5.2. (only for registered Users)', url: TUGRAZ_CONFIG.RDM_HOME_URL },
    { title: 'RDM Flyer and Quick Start Guide', url: TUGRAZ_CONFIG.RDM_HOME_URL },
  ];
}


