import React from 'react';
import { Tab } from '#/ui/tab';

export const metadata = {
  title: 'TU Graz Repository',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-center gap-2">
        <Tab
          path="/tu-graz-repository"
          item={{ text: 'TU GRAZ REPOSITORY (invenioRDM)' }}
        />
        <Tab
          path="/tu-graz-repository"
          item={{ text: 'CONTACT', slug: 'support' }}
        />
        <Tab path="/tu-graz-repository" item={{ text: 'FAQ', slug: 'faq' }} />
        <Tab
          path="/tu-graz-repository"
          item={{ text: 'MANUAL', slug: 'manuals' }}
        />
        <Tab
          path="/tu-graz-repository"
          item={{ text: 'GUIDE', slug: 'guide' }}
        />
        <Tab
          path="/tu-graz-repository"
          item={{ text: 'SHORTINFO', slug: 'info' }}
        />
      </div>
      <div>{children}</div>
    </div>
  );
}
