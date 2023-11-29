import React from 'react';
import { Tab } from '#/ui/tab';

export const metadata = {
  title: 'RDM In-proposals',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-center gap-2">
        <Tab path="/in-proposals" item={{ text: 'RDM IN-PROPOSALS' }} />
        <Tab
          path="/in-proposals"
          item={{ text: 'SUPPORT CONTACT', slug: 'support' }}
        />
      </div>
      <div>{children}</div>
    </div>
  );
}
