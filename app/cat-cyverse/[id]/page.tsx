

import StepsComponent, { steps } from '#/ui/steps-component';

import AccordionFaq from '#/ui/accordion-faq';
import { FC } from 'react';
import { RenderingInfoCyVerse } from '#/ui/rendering-info-cyverse';
import { getContentAndTitleById } from '../parapraph-by-id';

interface PageProps {
  params: {
    id: string;
  };
}

const Page: FC<PageProps> = ({ params }) => {
  const { content, title } = getContentAndTitleById(params.id);

  const questionsAndAnswers = [
    {
      question: 'How can I use the system',
      answer:
        'If you want to use CyVerse Austria for the first time, you have to register an account, please contact rdmteam@tugraz.at for the specific instructions. After you have registered once, you can login to de.cyverse.tugraz.at using single-sign-on with your TU Graz credentials as long as you are in TU Gaz intranet. In order to be able to access the system from the Internet (Home Office), first a VPN connection must be established, described at https://www.vpn.tugraz.at',
    },
    {
      question: 'Do I need additional software on my device?',
      answer:
        'Not really, but you need a browser like Chrome or Firefox or similar and an active internet connection. There are additional tools available such as an upload-/download-manager which are only optional.',
    },
    {
      question: 'How can I add and share my data with collaborators?',
      answer:
        'A complete guide on how to manage data in CyVerse is available online for moving data https://learning.cyverse.org/ds/move_data and sharing data https://learning.cyverse.org/ds/share.',
    },
    {
      question: 'How can I manage metadata?',
      answer:
        'There are several options described to add and edit metadata to your data in Discovery Environment to be found at https://learning.cyverse.org/ds/metadata.',
    },
    {
      question: 'How do you create an CyVerse Austria account?',
      answer: (
        <span>
          For detailed instructions, please visit the{' '}
          <a
            href="/cat-cyverse/account" 
            className="text-gray-700">
            New Account
          </a>{' '}
          section.
        </span>
      ),
    },
    {
      question:
        'What is the discovery environment and how can I use applications?',
      answer:
        'The discovery environment (DE) represents the user interface. You can start analyses from the apps layer as well as restart past ones from the Analyses layer. Follow to learning.cyverse.org/de/ for a comprehensive description!',
    },
    {
      question:
        'My interactive analysis is still running although I have already quit the instance?',
      answer:
        'Please make sure to terminate every analysis from the Analyses layer in the discovery environment, described in https://learning.cyverse.org/vice/quick-cloudshell/#6-terminate-your-app,  otherwise compute resources are reserved to the given analysis for 24 hours.',
    },
    {
      question:
        'Some options described in the Cyverse-Learning Resources do not work?',
      answer:
        'Please note, that some of the resources described at https://cyverse.org/learning-center are not available or valid for the CyVerse Austria instance!',
    },
    {
      question: 'Is there a size limit?',
      answer:
        'Data storage is limited to 50 GB. If you need more, please contact the RDM team. Resource usage can be monitored via the dashboard, at the home layer of the discovery environment.',
    },
    {
      question: 'Where is the data located and is it secure?',
      answer:
        'The data is stored on the servers of the ZID of TU Graz and is protected by their security measures.',
    },
  ];

  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="col-span-full space-y-3 lg:col-span-6">
        <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
          {title}
        </h1>
        <p className="font-thin text-gray-500">{content}</p>
        {params.id === 'faq' && <AccordionFaq data={questionsAndAnswers} />}
      </div>
      {params.id === 'support' && (
        <>
          <div className="-order-1 col-span-full lg:order-none lg:col-span-6">
            <RenderingInfoCyVerse
              type="tu-graz-dmp-tool"
              showEmail={params.id === 'support'}
            />
          </div>
        </>
      )}
      {params.id === 'account' && (
        <>
          <StepsComponent steps={steps} />
          {/* <ExternalLink href="https://cloud.tugraz.at/index.php/f/733433518">
            Insert Tutorial (doc-file)
          </ExternalLink> */}
        </>
      )}
      {params.id === 'manual' && (
        <>
          <div className="col-span-full space-y-3 lg:col-span-6">
            <p className="font-thin text-gray-700">
              You can find a list of online support resources at the{' '}
              <a
                className="text-gray-700 font-medium underline"
                href="https://cyverse.org/learning-center">
                CyVerse Learning Center
              </a>
              . The Learning Center provides information about the CyVerse
              platform and related tools for managing data, running analyses,
              quickstarts for launching RStudio or JupyterHub, and other science
              tutorials.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default Page;

export function generateStaticParams() {
  return [
    { id: 'support' },
    { id: 'manual' },
    { id: 'faq' },
    { id: 'account' },
  ];
}
