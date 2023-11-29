'use client';

import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Page: FC = () => {
  const { t } = useTranslation('dmp');
  const title = t('dmp.page.title');
  const description = t('dmp.page.description');
  const externalLinkText = t('dmp.page.externalLinkText');

  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <ul className="p-0 font-thin text-gray-700 text-base">
        <h1 className="text-xl font-thin text-gray-700">{title}</h1>
        {description}
      </ul>
      <div className="flex gap-2 ">
        <ExternalLink href="https://dmp.tugraz.at//">
          {externalLinkText}
        </ExternalLink>
      </div>
    </div>
  );
};

export default Page;
