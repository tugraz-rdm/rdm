'use client';

import React, { useState } from 'react';
import { useRouter, useSelectedLayoutSegment } from 'next/navigation';

import type { Item } from '#/ui/tab-group';
import { Tab } from '#/ui/tab';
import clsx from 'clsx';

interface TabContainerProps {
  path: string;
  items: Item[];
}

export const TabContainer: React.FC<TabContainerProps> = ({ path, items }) => {
  const router = useRouter();
  const segment = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = useState(false);

  const activeItem =
    items.find(
      item =>
        (!item.slug && segment === null) ||
        segment === item.segment ||
        segment === item.slug
    ) || items[0];

  const handleSelect = (item: Item) => {
    const href = item.slug ? path + '/' + item.slug : path;
    router.push(href);
    setIsOpen(false);
  };

  return (
    <>
      <div className="md:hidden mb-8">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between bg-gray-100 rounded-lg px-4 py-3 text-left text-gray-700 hover:bg-gray-200 transition-colors"
            aria-label="Select tab"
            aria-expanded={isOpen}>
            <span className="font-medium">{activeItem.text}</span>
            <svg
              className={clsx(
                'w-5 h-5 transition-transform duration-200',
                isOpen ? 'rotate-180' : ''
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {isOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsOpen(false)}
              />
              <div className="absolute z-20 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                {items.map((item, index) => {
                  const isActive =
                    (!item.slug && segment === null) ||
                    segment === item.segment ||
                    segment === item.slug;
                  return (
                    <button
                      key={index}
                      onClick={() => handleSelect(item)}
                      className={clsx(
                        'w-full text-left px-4 py-3 transition-colors',
                        isActive
                          ? 'bg-custom-blue-dark text-white font-semibold'
                          : 'text-gray-700 hover:bg-gray-50'
                      )}>
                      {item.text}
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="hidden md:flex space-x-1 mb-8 bg-gray-100 rounded-lg p-1">
        {items.map((item, index) => (
          <Tab key={index} path={path} item={item} />
        ))}
      </div>
    </>
  );
};
