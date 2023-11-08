import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';
import { InvenioLogo } from '#/ui/tu-logo';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <ul className="text-gray-700 text-base font-thin p-0">
        <InvenioLogo />
        <p>
          The TU Graz Repository is accessible for all researchers of TU Graz
          via Single Sign-on.
        </p>
        <p>
          The TU Graz Repository is based on invenioRDM and serves to make
          different publications but also research data accessible according to
          the{' '}
          <a
            className="text-gray-900"
            href="https://www.tugraz.at/sites/rdm/publish/the-fair-data-principles">
            FAIR principles
          </a>
          . By storing these documents in the repository, they receive a
          permanent address (D.O.I., digital object identifier), which increases
          their citability. It is essential that all stored data are provided
          with so-called{' '}
          <a
            className="text-gray-900"
            href="https://www.tugraz.at/sites/rdm/publish/metadata">
            metadata
          </a>
          , which represent a description of the data and in this way
          significantly facilitate the retrieval and reuse of data. In addition,{' '}
          <a
            className="text-gray-900"
            href="https://www.tugraz.at/sites/rdm/publish/licenses">
            licenses
          </a>{' '}
          can also be assigned to regulate the further use of the data.
        </p>
      </ul>
      <div className="flex gap-2 ">
        <ExternalLink href="https://repository.tugraz.at/">
          TU Graz Repository
        </ExternalLink>
        <ExternalLink href="https://inveniosoftware.org/products/rdm/">
          invenioRDM
        </ExternalLink>
      </div>
    </div>
  );
};

export default Page;
