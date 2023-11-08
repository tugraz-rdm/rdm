import { CyVerseLogo } from '#/ui/tu-logo';
import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <ul className="text-gray-700 text-base font-thin p-0">
        <CyVerseLogo />
        <p>
          An interactive, web-based, analytical platform that allows
          simultaneous access to and analysis of research data is CyVerse
          Austria (CAT), accessible inside the TU Graz intranet. CAT is a
          cooperative project of TU Graz, UNI Graz and MedUni Graz and is based
          on the open source code of CyVerse US. It is a so-called
          Cyperinfrastructure, which is intended for the secure temporary
          storage of research data and additionally to analyze the data using
          connected high-speed computing clusters. The sharing of data and the
          integration of own resources is made possible.
        </p>
        <p>
          Users can access the system (access only by the TU Graz intranet),
          store data, share it with others and evaluate it via any web browser
          or via the command line. If you would like to get to know CAT and also
          see how it works or have a demonstration, our Data Stewards will be
          pleased to help you.
        </p>
        <p>
          For frequently asked questions (FAQ) follow to the support subsection!
          It is also planned to establish a connection between the TU Graz
          Repository and CAT, which will allow an even more comfortable
          transport of data for storage and evaluation.
        </p>
      </ul>
      <div className="flex gap-2 ">
        <ExternalLink href="https://de.cyverse.tugraz.at/">
          CyVerse Austria (CAT)
        </ExternalLink>
        <ExternalLink href="https://www.tugraz.at/sites/cyverse/home">
          CAT Project Page
        </ExternalLink>
      </div>
    </div>
  );
};

export default Page;
