import React, { FC } from 'react';

import { Tab } from '#/ui/tab';

export const metadata = {
  title: 'DMP Publication Consulting',
};
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-center gap-2">
        <Tab path="/publication-consulting" item={{ text: 'DMP Publication Consulting' }} />
        <Tab
          path="/publication-consulting"
          item={{ text: 'SUPPORT CONTACT', slug: 'support' }}
        />
        <Tab path="/publication-consulting" item={{ text: 'FAQ', slug: 'faq' }} />
        <Tab path="/publication-consulting" item={{ text: 'MANUAL', slug: 'manuals' }} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
