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
        <a
          className="text-gray-700"
          href="https://cyverse.tugraz.at"
          target="_blank">
          {' '}
          CAT Project Page.{' '}
        </a>
      </ul>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What does the CyVerse Austria offer?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
        <li>
          CyVerse Austria is a “cyberinfrastructure” (also e-infrastructure),
          intended for the secure temporary storage of your research data and
          the collaborative use for your projects, partners and colleagues. 
        </li>
        <li>
          Analyze your data using high-speed computing clusters connected to it
          and build you own pipelines.
        </li>
        <li>
          Use already provided applications (e.g. Jupyter Notebooks) or create
          your own applications based on Docker to analyze and process your
          data.
        </li>
        <li>
          Pack your self-written scripts into Docker containers and use them on
          CyVerse Austria independently of your operating system. Share them
          with other researchers at TU Graz if you like.
        </li>
        <li>
          Work independently of your local computer and its capacities (any web
          browser or the command line is sufficient).
        </li>
        <li>
          CyVerse Austria can also be used very well as a teaching platform. All
          participants work with the same software, without setup problems, as
          they are on the same platform. Sharing teaching content is very
          simple.
        </li>
        <li>
          Furthermore, CyVerse Austria allows the sharing of data and the
          integration of own resources. Users can access the system (only by the
          TU Graz intranet), store data, share it with others, and evaluate it.
        </li>
        <li>
          If you are new to the system check out how to register at{' '}
          <a className="text-gray-700" href="/cat-cyverse/account">
            new account
          </a>
        </li>
      </ul>
      <div className="flex gap-2 ">
        <ExternalLink href="https://de.cyverse.tugraz.at">
          CyVerse Austria Discovery Environment
        </ExternalLink>
        <ExternalLink href="https://user.cyverse.tugraz.at">
          CyVerse Austria User Portal
        </ExternalLink>
      </div>
    </div>
  );
};

export default Page;
