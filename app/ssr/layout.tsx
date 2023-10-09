import React from "react";
import { TabGroup } from '#/ui/tab-group';

export const metadata = {
  title: 'Dynamic Data',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const ids = [{ id: '1' }, { id: '2' }, { id: '3' }];

  return (
    <div className="space-y-9">
      <TabGroup
        path="/ssr"
        items={[
          {
            text: 'Home',
          },
          ...ids.map((x) => ({
            text: `Post ${x.id}`,
            slug: x.id,
          })),
        ]}
      />

      <div>{children}</div>
    </div>
  );
}
