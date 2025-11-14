import React from 'react';
import { TabContainer } from '#/ui/tab-container';

export const metadata = {
  title: 'TU Graz DMP Tool',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const tabs = [
    { text: 'TU GRAZ DMP TOOL' },
    { text: 'FAQ', slug: 'faq' },
    { text: 'MANUAL', slug: 'manuals' },
    { text: 'CONTACT', slug: 'support' },
  ];

  return (
    <div className="space-y-9">
      <TabContainer path="/tu-graz-dmp-tool" items={tabs} />
      <div>{children}</div>
    </div>
  );
}
