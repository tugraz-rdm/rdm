import AccordionContent, { AccordionItem } from '#/ui/accordion-content';

import AccordionFaq from '#/ui/accordion-faq';
import ExternalLinkGuideTemplate from '#/ui/external-link-guide-template';
import { FC } from 'react';
import { RenderingInfoELab } from '#/ui/rendering-info-elab';
import { getContentProposalAndTitleById } from '../random-post-tab';

interface PageProps {
  params: {
    id: string;
  };
}

const Page: FC<PageProps> = ({ params }) => {
  const { content, title } = getContentProposalAndTitleById(params.id);
  const guideSourceUser = {
    label: 'English User Guide',
    url: 'https://repository.tugraz.at/doi/10.3217/28w3b-41q43',
  };
  const guideSourceAdmin = {
    label: 'English Admin Guide',
    url: 'https://repository.tugraz.at/doi/10.3217/vwrwm-y8972',
  };
  const questionsAndAnswers = [
    {
      question: 'Who is allowed to use eLabFTW',
      answer:
        'Anyone with a TU Graz account (students, employees, external project staff).',
    },
    {
      question: 'How can I join a specific team',
      answer:
        'The admin of the team has to contact the RDM Team(Alexander Bardel) and then the change to the team takes place.',
    },
    {
      question: "Why can't join or apply for the desired team myself? ",
      answer:
        'We need to be sure that only authorised people are allowed to see the content of a team. Only the admin of the team can confirm this.',
    },
    {
      question: 'Can I have different roles (User, Admin) in different teams?',
      answer:
        'Yes, depending on the team, you can be either a regular user or a team admin..',
    },
    {
      question:
        'Is it possible to use edits on a shared experiment by highlighting the different users in color?',
      answer:
        'For the text editor, you can agree in advance on a font color per user and thus keep track. A change tracking like Word is not possible at the moment. All other changes can be tracked via the changelog (depending on the minimum number of characters).',
    },
    {
      question: 'Do I need additional software on my device?',
      answer:
        'Not really, but you need a browser like Chrome or Firefox or similar and an active internet connection.',
    },
    {
      question: 'Do I need a VPN connection?',
      answer:
        'No, you do not have to be directly in the TU Graz network to use the e-lab notebook.',
    },
    {
      question: 'Why is the upload limit for attachments 100 MB',
      answer:
        'At TU Graz, eLabFTW is not a data repository for large amounts of data. The e-lab notebook is used to document all imaginable metadata that are part of the research. These are usually smaller than 100 MB.',
    },
    {
      question: 'Where is the data located and is it secure?',
      answer:
        'The data is stored on the servers of the ZID of TU Graz and is protected by their security measures.',
    },
    {
      question: 'Can I link files from my local hard drives?',
      answer:
        'In principle you can get the local file path from any folder and then save it e.g. in eLabFTW in the editor section. This would again work like a link, but eLabFTW is not a local application and therefore the file explorer is not opened directly (because currently addresses that are not web addresses are filtered out). Whenever needed, you can copy the saved address and paste it in the file explorer again and so indirectly create a connection. So it is enough to save the file path as text element in eLabFTW.',
    },
    {
      question: 'Can I change "Experiments" entries to "Resources" entries?',
      answer:
        'Not directly, neither in the one nor in the other direction. But you can export the corresponding entry as .eln format and then import it via the "Import via file" function at the other section. This way you can transfer an experiment object to a resource object and vice versa.',
    },
    {
      question:
        'As the admin of a team, can i backup/export the whole team at once?',
      answer:
        'No. There is no separate function which would take over this task explicitly, but you can sort in the experiment or resource section and select all entries with "Select All" and then export them at the same time.',
    },
  ];

  const managementInElabFtw: AccordionItem[] = [
    {
      ifPermissionManagement: true,
      title: 'OVERVIEW OF PERMISSIONS MANAGEMENT IN ELABFTW',
      description:
        'Configuration options are identical for viewing and writing permissions. Entries always have permission settings that are anchored in the base settings these are taken from the personal default settings or from template settings, but can be changed.',
      content:
        ' Adding one or more teams, team groups or individual users is optional and can, but does not have to be done. Exception: Admin has forced the use of certain permission settings in the team settings.',
    },
  ];

  const exportOfEntries: AccordionItem[] = [
    {
      ifExportEntries: true,
      title: 'EXPORT OF ENTRIES',
      description:
        'Depending on the section in eLabFTW, different export formats are available for one or more entries. ',
      content:
        'This allows you to use your documentation externally or, for example, as additional information for publications or audits. Below you will find an overview of the available export formats and a short description.',
    },
  ];

  const leavingTeamGroupOrTool: AccordionItem[] = [
    {
      ifTip: true,
      title: 'TIP: LEAVING A TEAM/GROUP OR THE TOOL',
      description:
        'When a user leaves a team, a group or the entire tool, it makes sense to have an offboarding strategy in place beforehand.',
      content:
        ' In the three cases mentioned above, there are a few important points to consider when dealing with eLabFTW. As a user, it is important to remember which entries do not belong to you but you want to keep the information. As an admin or other user of the team, it is also important to think about this point in relation to the entries of the departing user. Entries can be duplicated for further use or exported for external archiving. If you leave the tool as a user, you should always export relevant entries, as you will lose access to them. If you are also the owner of database entries, transfer ownership to the admin of your team. Please remember, if you copy other peoples entries, to ask the owner for permission first, as it is the intellectual property of the person concerned.',
    },
  ];

  const ifBackup: AccordionItem[] = [
    {
      ifBackup: true,
      title: 'BACKUP OPTIONS FOR USERS',
      description:
        'If you want to save your entries from eLabFTW externally, i.e. on your computer or on another storage medium, this is possible in different ways. We distinguish here between entries in experiments and in the database.',
    },
  ];

  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="col-span-full space-y-3 lg:col-span-6">
        <h1 className="truncate text-2xl font-medium  text-gray-200">
          {title}
        </h1>
        <p className="font-thin text-gray-500">{content}</p>
        {params.id === 'faq' && <AccordionFaq data={questionsAndAnswers} />}
        {params.id === 'support' && (
          <div className="-order-1 col-span-full lg:order-none lg:col-span-2">
            <RenderingInfoELab
              type="tu-graz-dmp-tool"
              showEmail={params.id === 'support'}
            />
          </div>
        )}
        {params.id === 'api' && (
          <>
            <a
              href="https://alexgu2008.github.io/elabftw_api_support/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-shrink-0 gap-x-2 whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-sm font-thin text-gray-100 no-underline hover:bg-gray-500 hover:text-white">
              Direct forwarding
            </a>
          </>
        )}
        {params.id === 'manuals' && (
          <>
            <div className="md:flex gap-3">
              <ExternalLinkGuideTemplate source={guideSourceUser} />
              <ExternalLinkGuideTemplate source={guideSourceAdmin} />
            </div>
          </>
        )}
        {params.id === 'info' && (
          <AccordionContent items={managementInElabFtw} />
        )}

        {params.id === 'info' && (
          <div>
            <AccordionContent items={exportOfEntries} />
          </div>
        )}
        {params.id === 'info' && (
          <AccordionContent items={leavingTeamGroupOrTool} />
        )}
        {params.id === 'info' && <AccordionContent items={ifBackup} />}
      </div>
    </div>
  );
};

export default Page;

export function generateStaticParams() {
  return [
    { id: 'support' },
    { id: 'faq' },
    { id: 'manuals' },
    { id: 'info' },
    { id: 'api' },
  ];
}
