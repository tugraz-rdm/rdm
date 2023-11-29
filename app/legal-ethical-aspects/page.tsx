import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';
import { RenderingInfoDataset } from '#/ui/rendering-info-datasset';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <ul className="text-gray-700 font-thin p-0">
        <h1 className="text-xl font-thin text-gray-700">Legal aspects</h1>
        <div
          className="p-4 text-base text-gray-800 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300"
          role="alert">
          Typical cases with legal (and ethical) aspects:
        </div>
        <ul className="space-y-1 text-base list-disc list-inside font-thin text-gray-700 text-thin">
          <li>
            Studies using (collecting, archiving) personal or confidential data,
            including trade secrets, data protected by intellectual property
            rights security, safety; combination of datasets that lead to
            sensitive information
          </li>
          <li>
            Personal and sensitive metadata, including studies or research with
            people (surveys)
          </li>
        </ul>
      </ul>
      <div
        className="flex items-center p-4 text-sm text-gray-700 border border-custom-isabelline rounded-lg bg-custom-isabelline dark:bg-gray-800 dark:text-gray-300 dark:border-custom-isabelline"
        role="alert">
        <svg
          className="flex-shrink-0 inline w-4 h-4 me-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div className="font-regular">
          Informed consent for research conducted with people, has to be
          considered throughout the research lifecycle!
        </div>
      </div>
      <ul className="space-y-1 text-base list-disc list-inside font-thin text-gray-700 text-thin">
        <li>
          Participants have to understand what the research will involve and
          consent, what data will be collected and how it will be used,
          especially if it may reveal identities
        </li>
        <li>
          Be specific and granular so that you get separate consent for separate
          things.
        </li>
        <li>Check DSGVO</li>
        <li>Document consent (required content see beneath)</li>
      </ul>
      <div
        className="p-4 text-base font-thin text-gray-800 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300"
        role="alert">
        Therefore, informed consent forms necessary in particular for surveys
        have to detail:
      </div>
      <ul className="space-y-1 text-base list-disc list-inside font-thin text-gray-700 text-thin">
        <li>Project title</li>
        <li>
          Detailing information on all data collected, data categories,
          corresponding scope
        </li>
        <li>
          Data handling processes, storage location and indicating the persons
          having access to the data
        </li>
        <li>
          Storage period, and what happens to the data after this time period
        </li>
        <li>
          Indication of the voluntary nature of participation, withdrawal rights
        </li>
        <li>
          And the contact of the responsible person of data collection and use
          in case of inquiries or withdrawa
        </li>
      </ul>
      <div
        className="flex items-center p-4 text-sm text-gray-700 border border-custom-isabelline rounded-lg bg-custom-isabelline dark:bg-gray-800 dark:text-gray-300 dark:border-custom-isabelline"
        role="alert">
        <svg
          className="flex-shrink-0 inline w-4 h-4 me-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20">
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span className="sr-only">Info</span>
        <div className="font-regular">
        If you have any data protection concerns, please contact        <RenderingInfoDataset showEmail type={'legal-ethical-dataset'} />
        </div>
       
      </div>
      
    </div>
  );
};

export default Page;
