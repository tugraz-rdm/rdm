import { ELabFTWLogo } from '#/ui/tu-logo';
import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <ul className="text-gray-900 text-base font-thin p-0">
        <ELabFTWLogo />
        eLabFTW is a free and open-source electronic laboratory notebook (ELN)
        for research institutions. TU Graz hosts its own instance of eLabFTW and
        makes the functions of the electronic laboratory notebook available to
        all members of TU Graz. eLabFTW is supported by an active community of
        users and developers and is good choice if you are looking for a
        flexible and reliable ELN.
      </ul>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
             What do we offer?
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
          Access portal
        </ExternalLink>
      </div>
      </ul>

    </div>
  );
};

export default Page;
