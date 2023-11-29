import React from 'react';
import { Tab } from '#/ui/tab';

export const metadata = {
  title: 'eLabFTW',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-center gap-2">
        <Tab path="/elabftw" item={{ text: 'eLabFTW' }} />
        <Tab
          path="/elabftw"
          item={{ text: 'SUPPORT CONTACT', slug: 'support' }}
        />
        <Tab path="/elabftw" item={{ text: 'FAQ', slug: 'faq' }} />
        <Tab path="/elabftw" item={{ text: 'MANUAL', slug: 'manuals' }} />
        <Tab path="/elabftw" item={{ text: 'FURTHER INFORMATION', slug: 'info'}} />
        <Tab path="/elabftw" item={{ text: 'API SUPPORT PAGE', slug: 'api' }} />
      </div>
      <div>{children}</div>
    </div>
  );
}
