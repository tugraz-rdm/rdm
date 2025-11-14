import React from 'react';
import { TabContainer } from '#/ui/tab-container';

export const metadata = {
  title: 'RDM Optimization',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const tabs = [
    { text: 'RDM OPTIMIZATION' },
    { text: 'OPTIMIZATION ANALYSIS', slug: 'analysis' },
    { text: 'SELF-ASSESSMENT', slug: 'assessment' },
    { text: 'ON-/OFF BOARDING', slug: 'boarding' },
    { text: 'DATA STRUCTURE', slug: 'datastructure' },
    { text: 'CONTACT', slug: 'support' },
  ];

  return (
    <div className="space-y-9">
      <TabContainer path="/optimization" items={tabs} />
      <div>{children}</div>
    </div>
  );
}
