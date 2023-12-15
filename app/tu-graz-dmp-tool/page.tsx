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
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What does the DMP Tool offer?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
        <li>
          The DMP tool will help you in creating a data management plan (DMP)
          for your proposal, an ongoing project, a thesis or research group
          activities.
        </li>
        <li>
          The tool guides you through all relevant RDM sections through
          questions while it provides a selection of possible predefined
          answers. Thereby, you are quickly navigated through the complete DMP
          and you are made aware of the necessary planning steps.
        </li>
        <li>
          The tool is connected to the project database of TU Graz which allows
          the user e.g. to easily select projects, project members and define
          roles.
        </li>
        <li>
          The created DMP can be exported in several formats matched to given
          templates by e.g. FWF or Science Europe.
        </li>
        <li>
          It is possible to save different versions of the DMP so that you can
          see how your RDM activities develop over the course of the project.
        </li>
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
