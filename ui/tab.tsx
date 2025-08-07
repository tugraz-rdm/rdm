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

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'flex items-center space-x-2 px-4 py-2 rounded-md transition-colors',
        isActive
          ? 'bg-white text-custom-blue-dark shadow-sm'
          : 'text-gray-600 hover:text-gray-900'
      )}>
      <span>{item.text}</span>
    </Link>
  );
};
