import { ELabFTWLogo } from '#/ui/tu-logo';
import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <ul className="text-gray-700 text-base font-thin p-0">
        <ELabFTWLogo />
        eLabFTW is an electronic solution to the classic lab notebook and offers
        many additional practical features (schedular, collaborative working,
        lab equipment management, etc.). It is an open source solution that is
        already in use at many research institutions worldwide. TU Graz runs its
        own instance of eLabFTW and it is available to all members of TU Graz.
        Since you interact with the software primarily via the browser, you do
        not need any additional software.
      </ul>

      <div className="flex gap-2 ">
        <ExternalLink href="https://elabftw.tugraz.at">
          Access portal
        </ExternalLink>
      </div>
    </div>
  );
};

export default Page;
