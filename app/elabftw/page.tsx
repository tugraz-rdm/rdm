import { ELabFTWLogo } from '#/ui/tu-logo';
import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';

/**
 * eLabFTW page component with static content and interactive styling
 */
const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <ul className="text-gray-900 text-base font-thin p-0">
        <ELabFTWLogo />
        <p className="text-gray-900 font-thin leading-relaxed">
          eLabFTW is an electronic solution to the classic lab notebook and
          offers many additional practical features (scheduler, collaborative
          working, lab equipment management, etc.). It is an open source
          solution that is already in use at many research institutions
          worldwide. TU Graz runs its own instance of eLabFTW and it is
          available to all members of TU Graz. Since you interact with the
          software primarily via the browser, you do not need any additional
          software.
        </p>
        <p className="text-gray-900 font-thin leading-relaxed">
          You can access the portal via this link and you will find useful
          information under the support section.
        </p>
        <p className="text-gray-900 font-thin leading-relaxed">
          There is also an online live demo offered to get an overview of the
          functions.
        </p>
      </ul>

      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300"
        role="alert">
        WHAT DOES eLabFTW OFFER?
      </div>

      <ul className="space-y-1 list-disc list-inside font-thin text-gray-900 text-thin">
        <li>
          Documentation of research data (metadata) in research and teaching
        </li>
        <li>
          Possibility to work in teams and groups, with a detailed permission
          system
        </li>
        <li>
          Management of resources: devices, tasks, exercise groups, projects,
          etc.
        </li>
        <li>Connections between experiments and resources</li>
        <li>Schedular for booking of resource objects</li>
        <li>Many more…</li>
        <div className="flex gap-2 pt-3">
          <ExternalLink href="https://elabftw.tugraz.at">
            TU Graz eLabFTW
          </ExternalLink>
        </div>
      </ul>
    </div>
  );
};

export default Page;
