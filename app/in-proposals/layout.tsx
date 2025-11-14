import React from 'react';
import { TabContainer } from '#/ui/tab-container';

export const metadata = {
  title: 'RDM In-proposals',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const tabs = [
    { text: 'RDM IN-PROPOSALS' },
    { text: 'EXAMPLE FOR PROPOSALS', slug: 'examples' },
    { text: 'CONTACT', slug: 'support' },
  ];

  return (
    <div className="space-y-9">
      <TabContainer path="/in-proposals" items={tabs} />
      <div>{children}</div>
    </div>
  );
}
