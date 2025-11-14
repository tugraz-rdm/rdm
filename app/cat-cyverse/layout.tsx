import React from 'react';
import { TabContainer } from '#/ui/tab-container';

export const metadata = {
  title: 'CAT - CyVerse Austria',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const tabs = [
    { text: 'CyVerse Austria' },
    { text: 'FAQ', slug: 'faq' },
    { text: 'MANUAL', slug: 'manual' },
    { text: 'CONTACT', slug: 'support' },
  ];

  return (
    <div className="space-y-9">
      <TabContainer path="/cat-cyverse" items={tabs} />
      <div>{children}</div>
    </div>
  );
}
