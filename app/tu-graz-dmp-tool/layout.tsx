import React from 'react';
import { Tab } from '#/ui/tab';

export const metadata = {
  title: 'TU Graz DMP Tool',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-center gap-2">
        <Tab path="/tu-graz-dmp-tool" item={{ text: 'TU GRAZ DMP TOOL' }} />
        <Tab
          path="/tu-graz-dmp-tool"
          item={{ text: 'CONTACT', slug: 'support' }}
        />
        <Tab path="/tu-graz-dmp-tool" item={{ text: 'FAQ', slug: 'faq' }} />
        <Tab
          path="/tu-graz-dmp-tool"
          item={{ text: 'MANUAL', slug: 'manuals' }}
        />
      </div>

      <div>{children}</div>
    </div>
  );
}
