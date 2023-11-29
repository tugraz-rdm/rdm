import ContentSupport from './content-support';
import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <ul className="text-gray-700 font-thin p-0">
        <h1 className="text-xl font-thin text-gray-700">
          Proposal RDM at TU Graz
        </h1>
        Research Data Management (RDM) pertains to all steps taken along the
        data lifecycle to ensure that research data can be found, are accessible
        to others (whether other researchers or other interested parties), and
        are described (e.g. through proper metadata) in such a way that they can
        be reused by others (FAIR Data - findable, accessible, interoperable,
        reusable). Thereby, the TU Graz framework policy provides guidance to
        all University academics, staff and students on good research data
        management practices. Adherence to these guidelines enables transparency
        and reproducibility of research. TU Graz also provides RDM tools and
        infrastructure detailed in the list beneath.
      </ul>
      <ContentSupport />
    </div>
  );
};

export default Page;
