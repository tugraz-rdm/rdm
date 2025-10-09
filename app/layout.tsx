'use client';

import '#/styles/globals.css';

import { MenuProvider, useMenu } from '#/lib/menu-context';

import { ScrollToTop } from '#/ui/scroll-to-top';
import { SimpleGlobalNav } from '#/ui/global-nav';

function LayoutContent({ children }: { children: React.ReactNode }) {
  const { isDrawerOpen, toggleDrawer } = useMenu();

  return (
    <html lang="en" className="[color-scheme:light]">
      <head>
        <title>Research Data Management</title>
        <link rel="icon" type="image/x-icon" href="/tug.ico" />
      </head>
      <body className="overflow-y-scroll bg-white bg-[url('/front-light-minimal.svg')] pt-[2vh]">
        <ScrollToTop />
        <div className="flex-grow">
          <SimpleGlobalNav isOpen={isDrawerOpen} onToggle={toggleDrawer} />
          <div
            className=" mx-auto space-y-10 bg-cover bg-no-repeat text-white"
            style={{ backgroundImage: `url('/front-light-minimal.svg')` }}>
            <div
              className={`max-w-8xl mx-auto px-2 pb-20  transition-all duration-300 sm:px-4 md:px-6 lg:px-8  ${
                isDrawerOpen ? 'lg:ml-72' : ''
              }`}
              style={{
                marginTop: '6rem',
                width: isDrawerOpen ? 'calc(100% - 20rem)' : '100%',
                minHeight: '100vh',
              }}>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MenuProvider>
      <LayoutContent>{children}</LayoutContent>
    </MenuProvider>
  );
}
