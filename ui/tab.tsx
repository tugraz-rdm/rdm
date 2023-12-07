'use client';

import type { Item } from '#/ui/tab-group';
import Link from 'next/link';
import clsx from 'clsx';
import { useSelectedLayoutSegment } from 'next/navigation';

export const Tab = ({ path, item }: { path: string; item: Item }) => {
  const segment = useSelectedLayoutSegment();
  const href = item.slug ? path + '/' + item.slug : path;
  const isActive =
    (!item.slug && segment === null) ||
    segment === item.segment ||
    segment === item.slug;

  const activeClasses =
    'text-custom-blue-dark border-b-2 border-custom-blue-dark dark:text-blue-500 text-custom-blue-dark';
  const inactiveClasses =
    'text-gray-700 border-b-2 border-transparent hover:text-custom-blue-dark hover:border-custom-blue-dark dark:hover:text-custom-blue-dark';

  return (
    <li className="mr-2 list-none overflow-hidden rounded-lg border shadow-md transition-transform duration-300 hover:scale-105 ">
      <Link
        href={href}
        aria-current={isActive ? 'page' : undefined}
        legacyBehavior>
        <a
          className={clsx(
            'inline-block p-4',
            isActive ? activeClasses : inactiveClasses
          )}>
          {item.text}
        </a>
      </Link>
    </li>
  );
};
