import React from 'react';
import { Tab } from '#/ui/tab';

export const metadata = {
  title: 'LEGAL & ETHICAL ASPECTS OF RESEARCH DATA',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-center gap-2">
      <Tab
          path="/legal-ethical-aspects"
          item={{ text: 'LEGAL & ETHICAL ASPECTS OF RESEARCH DATA' }}
        />
        <Tab
          path="/legal-ethical-aspects"
          item={{ text: 'LEGAL ASPECTS', slug: 'legal' }}
        />
        <Tab
          path="/legal-ethical-aspects"
          item={{
            text: 'DATA HANDLING CONSIDERATIONS',
            slug: 'considerations',
          }}
        />
        <Tab
          path="/legal-ethical-aspects"
          item={{ text: 'ETHICAL ASPECTS', slug: 'ethical' }}
        />
        <Tab
          path="/legal-ethical-aspects"
          item={{ text: 'CONTACT', slug: 'support' }}
        />
      </div>
      <div>{children}</div>
    </div>
  );
}
