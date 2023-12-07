import { CyVerseLogo } from '#/ui/tu-logo';
import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <ul className="text-gray-700 text-base font-thin p-0">
        <CyVerseLogo />
        CyVerse Austria (CAT) is an interactive, web-based, analytical platform
        that allows simultaneous access to and analysis of research data. It is
        accessible inside the TU Graz intranet and is based on the open source
        code of CyVerse US. More information on this project can be found on the
        CAT Project Page:{' '}
        <a className="text-gray-700" href="https://cyverse.tugraz.at">
           cyverse.tugraz.at.{' '}
        </a>
        This system is a so-called Cyberinfrastructure, which is intended for
        the secure temporary storage of research data, also for collaborative
        projects, and additionally to analyze the data using connected
        high-speed computing clusters. The sharing of data and the integration
        of own resources is made possible. Users can access the system (only by
        the TU Graz intranet), store data, share it with others and evaluate it
        via any web browser or via the command line.
      </ul>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
        <li>If you are new to the system check out how to register at </li>
        <li>If you have issues or questions you can check the Manual or get in contact with the team at contact!</li>
        <li>You can access the system via <a className='text-gray-700' href='https://de.cyverse.tugraz.at'>Login Discovery Environment </a> </li>
        <li><a className='text-gray-700' href='href= https://user.cyverse.tugraz.at' >Login User Portal </a> </li>
      </ul>
      {/* <div className="flex gap-2 ">
        <ExternalLink href="https://de.cyverse.tugraz.at/">
          CyVerse Austria (CAT)
        </ExternalLink>
        <ExternalLink href="https://www.tugraz.at/sites/cyverse/home">
          CAT Project Page
        </ExternalLink>
      </div> */}
    </div>
  );
};

export default Page;
