import React from 'react';
import { TabContainer } from '#/ui/tab-container';

export const metadata = {
  title: 'eLabFTW',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const tabs = [
    { text: 'eLabFTW' },
    { text: 'FAQ', slug: 'faq' },
    { text: 'MANUAL', slug: 'manuals' },
    { text: 'TOPICS OF INTEREST', slug: 'info' },
    { text: 'CONTACT', slug: 'support' },
    // { text: 'API SUPPORT PAGE', slug: 'api' },
  ];

  return (
    <div className="space-y-9">
      <TabContainer path="/elabftw" items={tabs} />
      <div>{children}</div>
    </div>
  );
}
