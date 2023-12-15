import React from 'react';
import { Tab } from '#/ui/tab';

export const metadata = {
  title: 'LEGAL & ETHICAL ASPECTS',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-center gap-2">
      <Tab
          path="/legal-ethical-aspects"
          item={{ text: 'LEGAL & ETHICAL ASPECTS' }}
        />
        <Tab
          path="/legal-ethical-aspects"
          item={{ text: 'EXAMPLES OF LEGAL ISSUES', slug: 'legalissues' }}
        />
        <Tab
          path="/legal-ethical-aspects"
          item={{ text: 'EXEMPLARY ETHICAL CASES', slug: 'ethical' }}
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
