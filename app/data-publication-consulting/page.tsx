import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <ul className="text-gray-700 font-thin p-0 text-base">
        <h1 className="text-xl font-thin text-gray-700">
          Data Publication Consulting
        </h1>
        <p>
          All non-sensitive research results which lead to a publication shall
          be made available for the scientific community in terms of
          transparency and reproducibility. Furthermore, making data available
          and repurposable by a wider research community promotes the scientific
          process of knowledge discovery and increases citability or enables new
          collaboration possibilites. Therefore, all forms of digital objects,
          such as research data, metadata, or source code, can be assigned a
          persistent identifier through entries on repositories Tu Graz offers
          the{' '}
          <a className="text-gray-900" href="repository.tugraz.at">
            instutional repository
          </a>{' '}
          for publishing research results. Additional topic- or
          discipline-specific data repositories can be found via the{' '}
          <a className="text-gray-900" href="re3data.org">
            registry of research data repositories{' '}
          </a>
          . Licenses have to be attached to all research results before
          publication, some examples are given for the various digital objects
          under the subsection Licenses.
        </p>
      </ul>
    </div>
  );
};

export default Page;
