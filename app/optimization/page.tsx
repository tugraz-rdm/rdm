import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <ul className="text-gray-700 font-thin p-0">
        <h1 className="text-xl font-thin text-gray-700">
          Optimization analysis
        </h1>
        Research data management (RDM) processes and workflows can be, on the
        one hand, optimized on a project-based level for a limited time-frame
        with options to adapt for the team, group, or institute. On the other
        hand, processes can also be detailed on a person-based level from a team
        or institute level perspective. We offer structured support to analyze
        you current RDM situation from a process down to a metadata level:
        together we can assess the current situation along the research data
        cycle, discuss possible collaborative tools that could support specific
        processes, and provide workflow visualizations as well as a list of
        short-term and long-term optimization goals.
      </ul>
    </div>
  );
};

export default Page;
