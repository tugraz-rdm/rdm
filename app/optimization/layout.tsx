import React from 'react';
import { Tab } from '#/ui/tab';

export const metadata = {
  title: 'RDM Optimization',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-center gap-2">
        <Tab path="/optimization" item={{ text: 'RDM Optimization' }} />
        <Tab
          path="/optimization"
          item={{ text: 'SUPPORT CONTACT', slug: 'support' }}
        />
        <Tab path="/optimization" item={{ text: 'FAQ', slug: 'faq' }} />
        <Tab path="/optimization" item={{ text: 'MANUALS', slug: 'manuals' }} />
      </div>
      <div>{children}</div>
    </div>
  );
}
