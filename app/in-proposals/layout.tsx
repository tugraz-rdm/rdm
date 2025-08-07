import React from 'react';
import { Tab } from '#/ui/tab';

export const metadata = {
  title: 'RDM In-proposals',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex space-x-1 mb-8 bg-gray-100 rounded-lg p-1">
        <Tab path="/in-proposals" item={{ text: 'RDM IN-PROPOSALS' }} />
        <Tab
          path="/in-proposals"
          item={{ text: 'EXAMPLE FOR PROPOSALS', slug: 'examples' }}
        />
        <Tab path="/in-proposals" item={{ text: 'CONTACT', slug: 'support' }} />
      </div>
      <div>{children}</div>
    </div>
  );
}
