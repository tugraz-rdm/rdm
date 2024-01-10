import React, { FC } from 'react';

import { Tab } from '#/ui/tab';

export const metadata = {
  title: 'DMP Consulting',
};
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-center gap-2">
        <Tab
          path="/data-publication-consulting"
          item={{ text: 'DATA PUBLICATION CONSULTING' }}
        />

        <Tab
          path="/data-publication-consulting"
          item={{ text: 'LICENSES', slug: 'licenses' }}
        />
        <Tab
          path="/data-publication-consulting"
          item={{ text: 'HOW TO MANAGE CITATIONS', slug: 'goal' }}
        />
        <Tab
          path="/data-publication-consulting"
          item={{ text: 'CONTACT', slug: 'support' }}
        />
        {/* <Tab
          path="/data-publication-consulting"
          item={{ text: 'LINKS', slug: 'links' }}
        /> */}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
