import React from 'react';
import { TabContainer } from '#/ui/tab-container';

export const metadata = {
  title: 'TU Graz Repository',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const tabs = [
    { text: 'TU GRAZ REPOSITORY' },
    { text: 'FAQ', slug: 'faq' },
    { text: 'MANUAL', slug: 'manuals' },
    { text: 'CONTACT', slug: 'support' },
  ];

  return (
    <div className="space-y-9">
      <TabContainer path="/tu-graz-repository" items={tabs} />
      <div>{children}</div>
    </div>
  );
}
