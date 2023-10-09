import React from 'react';
import { Tab } from '#/ui/tab';

export const metadata = {
  title: 'RDM In-proposals',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-center gap-2">
        <Tab path="/proposals" item={{ text: 'RDM In-proposals' }} />
        <Tab
          path="/proposals"
          item={{ text: 'SUPPORT CONTACT', slug: 'support' }}
        />
        <Tab path="/proposals" item={{ text: 'FAQ', slug: 'faq' }} />
        <Tab path="/proposals" item={{ text: 'MANUALS', slug: 'manuals' }} />
      </div>
      <div>{children}</div>
    </div>
  );
}
