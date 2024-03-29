import { Category } from './category';

export const runtime = 'edge';

export async function GET(request: Request) {
  const data: Category[] = [
    { name: 'CONTACT', slug: 'support-contact', count: 11, parent: null },
    { name: 'FAQ', slug: 'faq', count: 12, parent: null },
    { name: 'MANUAL', slug: 'manuals', count: 10, parent: null },
    { name: 'API SUPPORT PAGE', slug: 'api-support', count: 4, parent: null },
  ];

  const { searchParams } = new URL(request.url);

  // We sometimes artificially delay a reponse for demo purposes.
  // Don't do this in real life :)
  const delay = searchParams.get('delay');
  if (delay) {
    await new Promise(resolve => setTimeout(resolve, Number(delay)));
  }

  const slug = searchParams.get('slug');
  if (slug) {
    const category = data.find(category => category.slug === slug);

    return new Response(JSON.stringify(category ?? null), {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    });
  }

  const parent = searchParams.get('parent');
  const categories = data.filter(category =>
    parent ? category.parent === parent : category.parent === null
  );

  return new Response(JSON.stringify(categories), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    },
  });
}
 