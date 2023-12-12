import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <p className="text-gray-900 text-base font-thin p-0">
        Data management processes are often heterogeneously handled among
        researchers resulting in possible data handling issues during
        collaboration or after several years when it comes to reusing older
        research output. The RDM-team offers an individual optimization analysis
        of RDM processes enabling advanced data handling actions.
      </p>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
        <li>
          Read more about RDM optimization at -optimization analysis- and go to
          -contact- to reach out and arrange for an initial informative meeting.
        </li>
        <li>
          You can also self-asses your current state and find some online guides
          at -self-assessment-
        </li>
        <li>
          As well as for the specific topic of on-/ offboarding at
          -On-/Offboarding- or find out about data structure optimization at
          -data structure-.
        </li>
        <li>
          Strengthen your data-management strategy and optimize your data
          collection and storage processes while improving security and
          efficiency – optimize daily elements of data storage and collaboration
        </li>
      </ul>
    </div>
  );
};

export default Page;
