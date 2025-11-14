import React, { FC } from 'react';

import { TabContainer } from '#/ui/tab-container';

export const metadata = {
  title: 'DMP Consulting',
};
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const tabs = [
    { text: 'DMP' },
    { text: 'LICENSES', slug: 'licenses' },
    { text: 'CONTACT', slug: 'support' },
  ];

  return (
    <div className="space-y-9">
      <TabContainer path="/consulting" items={tabs} />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
