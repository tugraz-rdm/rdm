import React from "react";
import { Tab } from '#/ui/tab';

export const metadata = {
  title: 'DMP Tools',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex flex-wrap items-center gap-2">
        <Tab path="/tools" item={{ text: 'DMP TOOL' }} />
        <Tab path="/tools" item={{ text: 'SUPPORT CONTACT', slug: 'support' }} />
        <Tab path="/tools" item={{ text: 'FAQ', slug: 'faq' }} />
        <Tab path="/tools" item={{ text: 'MANUALS', slug: 'manuals' }} />
        <Tab path="/tools" item={{ text: 'API SUPPORT PAGE', slug: 'api-support' }} />
      </div>

      <div>{children}</div>
    </div>
  );
}
