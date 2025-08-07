// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import 'server-only';

import { Category } from './category';
import { notFound } from 'next/navigation';

export async function getCategories({ parent }: { parent?: string } = {}) {
  const data: Category[] = [
    { name: 'CONTACT', slug: 'support-contact', count: 11, parent: null },
    { name: 'FAQ', slug: 'faq', count: 12, parent: null },
    { name: 'MANUAL', slug: 'manuals', count: 10, parent: null },
    { name: 'API SUPPORT PAGE', slug: 'api-support', count: 4, parent: null },
  ];

  const categories = data.filter(category =>
    parent ? category.parent === parent : category.parent === null
  );

  if (categories.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return categories;
}

export async function getCategory({ slug }: { slug: string }) {
  const data: Category[] = [
    { name: 'CONTACT', slug: 'support-contact', count: 11, parent: null },
    { name: 'FAQ', slug: 'faq', count: 12, parent: null },
    { name: 'MANUAL', slug: 'manuals', count: 10, parent: null },
    { name: 'API SUPPORT PAGE', slug: 'api-support', count: 4, parent: null },
  ];

  const category = data.find(category => category.slug === slug);

  if (!category) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return category;
}
