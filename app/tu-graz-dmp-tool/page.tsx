'use client';

import { DAMAPLogo } from '#/ui/tu-logo';
import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

const Page: FC = () => {
  const { t } = useTranslation('dmp');
  const title = t('dmp.page.title');
  const description = t('dmp.page.description');
  const externalLinkText = t('dmp.page.externalLinkText');

  return (
    <div>
      <div className="mb-4">
        <a
          href="https://damap.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block">
          <DAMAPLogo />
        </a>
      </div>

      <div className="prose prose-sm prose-invert max-w-none">
        <h1 className="text-xl font-thin text-gray-700">{title}</h1>
        <div className="p-0 font-thin text-gray-700 text-base">
          {description}
        </div>
        <div
          className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
          role="alert">
          What does the DMP Tool offer?
        </div>
        <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
          <li>
            The DMP tool will help you create a Data Management Plan (DMP) for
            your proposal, ongoing project, thesis, or research group activity.
          </li>
          <li>
            The tool guides you through all relevant RDM sections through
            questions, while providing a selection of predefined answers. This
            will, take you quickly through the complete DMP, and will make you
            aware of the steps that need to be taken care of during planning.
          </li>
          <li>
            The tool is connected to TU Graz&apos;s project database, thus allowing
            the user to e.g. easily select projects and project members and
            define their roles.
          </li>
          <li>
            The resulting DMP can be exported in several formats matched to
            given templates by e.g. FWF or Science Europe.
          </li>
          <li>
            It is possible to save different versions of the DMP so that you can
            see how your RDM activities develop over the course of the project.
          </li>
        </ul>
        <div className="flex gap-2 ">
          <ExternalLink href="https://dmp.tugraz.at/">
            {externalLinkText}
          </ExternalLink>
        </div>
      </div>
    </div>
  );
};

export default Page;
