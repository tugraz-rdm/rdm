import React from 'react';
import { Tab } from '#/ui/tab';

export const metadata = {
  title: 'CAT - CyVerse Austria',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-center gap-2">
        <Tab path="/cat-cyverse" item={{ text: 'CAT - CyVerse Austria' }} />
        <Tab
          path="/cat-cyverse"
          item={{ text: 'SUPPORT CONTACT', slug: 'support' }}
        />
        <Tab path="/cat-cyverse" item={{ text: 'FAQ', slug: 'faq' }} />
        <Tab
          path="/cat-cyverse"
          item={{ text: 'USER PORTALS', slug: 'portals' }}
        />
        <Tab
          path="/cat-cyverse"
          item={{ text: 'CyVerse TRAINING MATERIALS', slug: 'materials' }}
        />
      </div>
      <div>{children}</div>
    </div>
  );
}
