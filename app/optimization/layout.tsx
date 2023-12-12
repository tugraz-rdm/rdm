import React from 'react';
import { Tab } from '#/ui/tab';

export const metadata = {
  title: 'RDM Optimization',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-center gap-2">
        <Tab path="/optimization" item={{ text: 'RDM OPTIMIZATION' }} />
        <Tab path="/optimization" item={{ text: 'OPTIMIZATION ANALYSIS', slug: 'analysis' }} />
        <Tab path="/optimization" item={{ text: 'SELF-ASSESSMENT',  slug: 'assessment'  }} />
        <Tab path="/optimization" item={{ text: 'ON-/OFFBOARDING', slug: 'boarding' }} />
        <Tab path="/optimization" item={{ text: 'DATA STRUCTURE', slug: 'datastructure' }} />
        <Tab path="/optimization" item={{ text: 'CHECKLIST', slug: 'checklist' }} />
        <Tab
          path="/optimization"
          item={{ text: 'CONTACT', slug: 'support' }}
        />
      </div>
      <div>{children}</div>
    </div>
  );
}
