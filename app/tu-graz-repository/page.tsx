import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';
import { InvenioLogo } from '#/ui/tu-logo';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <InvenioLogo />
      <p className="text-gray-700 text-base font-thin p-0">
        The TU Graz repository is based on the open-source solution InvenioRDM
        and has been co-developed by TU Graz together with CERN and TU Vienna.
        This institutional repository is available to all members of TU Gra.
        Digital objects that have been released in the repository can be found
        and accessed worldwide.
      </p>
      <div
        className="p-4 text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What does TU Graz Repository offer?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-900 text-thin">
        <li>
          Publication of your research data linked to a paper, article, thesis
          or other research activity.
        </li>
        <li>
          Reliable and permanent findability through the assignment of DOIs
          (digital object identifiers) for each entry in the repository.
        </li>
        <li>Easy citation of entries using templates.</li>
        <li>
          Search option for all publications, journals, works, etc. in the
          digital collection of the TU Graz library.
        </li>
        <li>
          Access to the national OER Hub (Open educational resources Hub) and
          the opportunity to use free educational resources for your own
          teaching.
        </li>
      </ul>
      <div className="flex gap-2 ">
        <ExternalLink href="https://repository.tugraz.at/">
          TU Graz Repository
        </ExternalLink>
      </div>
    </div>
  );
};

export default Page;
