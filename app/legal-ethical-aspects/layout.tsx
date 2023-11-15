import React from 'react';
import { Tab } from '#/ui/tab';

export const metadata = {
  title: 'RDM Legal & Ethical Aspects',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-center gap-2">
        <Tab
          path="/legal-ethical-aspects"
          item={{ text: 'RDM Legal & Ethical Aspects' }}
        />
        <Tab
          path="/legal-ethical-aspects"
          item={{ text: 'SUPPORT CONTACT', slug: 'support' }}
        />
        <Tab
          path="/legal-ethical-aspects"
          item={{ text: 'FAQ', slug: 'faq' }}
        />
        <Tab
          path="/legal-ethical-aspects"
          item={{ text: 'MANUALS', slug: 'manuals' }}
        />
      </div>
      <div>{children}</div>
    </div>
  );
}
