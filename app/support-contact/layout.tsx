import { ClickCounter } from '#/ui/click-counter';
import React from 'react';
import { TabGroup } from '#/ui/tab-group';
import { getCategories } from '#/app/api/categories/getCategories';

export const metadata = {
  title: 'Loading',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/support-contact"
          items={[
            {
              text: 'CONTACT',
            },
            ...categories.map(x => ({
              text: x.name,
              slug: x.slug,
            })),
          ]}
        />

        <div className="self-start">
          <ClickCounter />
        </div>
      </div>

      <div>{children}</div>
    </div>
  );
}
