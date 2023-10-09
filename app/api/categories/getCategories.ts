// `server-only` guarantees any modules that import code in file
// will never run on the client. Even though this particular api
// doesn't currently use sensitive environment variables, it's
// good practise to add `server-only` preemptively.
import 'server-only';

import { data } from './route';
import { notFound } from 'next/navigation';

export async function getCategories({ parent }: { parent?: string } = {}) {
  
  const categories = data.filter((category) =>
    parent ? category.parent === parent : category.parent === null,
  );

  if (categories.length === 0) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return categories;
}

export async function getCategory({ slug }: { slug: string }) {

  const category = data.find((category) => category.slug === slug);

  if (!category) {
    // Render the closest `not-found.js` Error Boundary
    notFound();
  }

  return category;
}