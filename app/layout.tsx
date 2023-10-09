'use client';

import '#/styles/globals.css';

import { SimpleGlobalNav } from '#/ui/global-nav';
import { useState } from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const toggleDrawer = () => {
    setIsDrawerOpen(prev => !prev);
  };

  return (
    <html lang="en" className="[color-scheme:light]">
      <body className="overflow-y-scroll bg-white bg-[url('/grid.svg')] pt-[2vh]">
        <div className="flex-grow">
          <SimpleGlobalNav isOpen={isDrawerOpen} onToggle={toggleDrawer} />
          <div>
            <div
              className={`max-w-8xl mx-auto px-2 pb-20 transition-all duration-300 sm:px-4 md:px-6 lg:px-8  ${
                isDrawerOpen ? 'lg:ml-80' : ''
              }`}
              style={{
                marginTop: '6rem',
                width: isDrawerOpen ? 'calc(100% - 20rem)' : '100%',
              }}>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
