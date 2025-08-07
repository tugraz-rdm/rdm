import React from 'react';
import { Tab } from '#/ui/tab';

export const metadata = {
  title: 'TU Graz Repository',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex space-x-1 mb-8 bg-gray-100 rounded-lg p-1">
        <Tab path="/tu-graz-repository" item={{ text: 'TU GRAZ REPOSITORY' }} />
        <Tab path="/tu-graz-repository" item={{ text: 'FAQ', slug: 'faq' }} />
        <Tab
          path="/tu-graz-repository"
          item={{ text: 'MANUAL', slug: 'manuals' }}
        />
        <Tab
          path="/tu-graz-repository"
          item={{ text: 'CONTACT', slug: 'support' }}
        />
      </div>
      <div>{children}</div>
    </div>
  );
}
