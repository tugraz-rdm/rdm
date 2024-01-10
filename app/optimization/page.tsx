import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <p className="text-gray-900 text-base font-thin p-0">
        Data management processes are handled heterogeneously by researchers,
        which can result in problems with data handling during collaboration, or
        lead to issues when reusing research output in the future (be it days or
        several years). Strategies for data management have to consider
        technical, organisational, legal, structural, and sustainability aspects
        into account.
      </p>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What do we offer?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
        <li>
          Individual optimization analysis of RDM processes to enable advanced
          data handling actions.
        </li>
        <li>
          Initial meeting to provide information about RDM optimization.
          Interested researchers are encouraged to read about this topic at{' '}
          <a className="text-gray-700" href="/optimization/analysis">
            optimization analysis
          </a>{' '}
          before reaching out to{' '}
          <a className="text-gray-700" href="/optimization/support">
            contact
          </a>{' '}
          to arrange a meeting.
        </li>
        <li>
          You can also self-asses your current state and find some online guides
          at{' '}
          <a className="text-gray-700" href="/optimization/assessment">
            self-assessment.
          </a>
        </li>
        <li>
          as well as for the specific topic of on-/ offboarding at{' '}
          <a className="text-gray-700" href="/optimization/boarding">
            on-/ offboarding
          </a>{' '}
          or find out about data structure optimization at{' '}
          <a className="text-gray-700" href="/optimization/datastructure">
            data structure
          </a>
        </li>
        <li>
          Strengthen your data-management strategy and optimize your data
          collection and storage processes while improving security and
          efficiency – optimize daily elements of data storage and
          collaboration.
        </li>
      </ul>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What are the benefits?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
        <li>
          Proper RDM enables you and your team to find research objects, even
          after years.
        </li>
        <li>
          Proper descriptions and sufficient metadata ensure you and others can
          understand and reuse older data and datasets.
        </li>
        <li>
          Avoid waste of resources and unnecessary redundancies through
          optimized workflows.
        </li>
        <li>
          Save time and effort otherwise lost searching for or deciphering
          information.
        </li>
        <li>Simplify your collaboration with cooperation partners.</li>
        <li>Minimize data loss, and facilitate data security.</li>
      </ul>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What does the process look like?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
        <li>Contact the RDM Team or individual Data Stewards!</li>
        <li>
          Pose your question via mail or ask for an appointment to discuss
          possible consultation services.
        </li>
        <li>
          An optimization analysis will start with a preliminary meeting to
          overview current RDM procedures for a given project, team or
          individual.
        </li>
        <li>
          Follow-up meetings will provide consultation on optimization options
          towards a final RDM strategy outlining short-, medium-, and long-term
          actions.
        </li>
      </ul>
    </div>
  );
};

export default Page;
