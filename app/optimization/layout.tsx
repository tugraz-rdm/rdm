import React from 'react';
import { Tab } from '#/ui/tab';

export const metadata = {
  title: 'RDM Optimization',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex space-x-1 mb-8 bg-gray-100 rounded-lg p-1">
        <Tab path="/optimization" item={{ text: 'RDM OPTIMIZATION' }} />
        <Tab
          path="/optimization"
          item={{ text: 'OPTIMIZATION ANALYSIS', slug: 'analysis' }}
        />
        <Tab
          path="/optimization"
          item={{ text: 'SELF-ASSESSMENT', slug: 'assessment' }}
        />
        <Tab
          path="/optimization"
          item={{ text: 'ON-/OFF BOARDING', slug: 'boarding' }}
        />
        <Tab
          path="/optimization"
          item={{ text: 'DATA STRUCTURE', slug: 'datastructure' }}
        />
        <Tab path="/optimization" item={{ text: 'CONTACT', slug: 'support' }} />
      </div>
      <div>{children}</div>
    </div>
  );
}
