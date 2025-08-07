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
      <div className="flex space-x-1 mb-8 bg-gray-100 rounded-lg p-1">
        <Tab path="/consulting" item={{ text: 'DMP' }} />
        <Tab path="/consulting" item={{ text: 'LICENSES', slug: 'licenses' }} />
        <Tab path="/consulting" item={{ text: 'CONTACT', slug: 'support' }} />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
