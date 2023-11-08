import AccordionCollapse from '#/ui/accordion-collapse';
import { ExportEntries } from '#/ui/e-labftw-material/export-entries';
import { OverviewPermissionsManagement } from '#/ui/e-labftw-material/overview-permissions-management';
import { RenderingInfoELab } from '#/ui/rendering-info-elab';
import { UserExit } from '#/ui/e-labftw-material/user-exit';
import { getContentProposalAndTitleById } from '../random-post-tab';

export default async function Page({ params }: { params: { id: string } }) {
  const { content, title } = getContentProposalAndTitleById(params.id);
  const questionsAndAnswers = [
    {
      question: 'Who is allowed to use eLabFTW',
      answer:
        'Anyone with a TU Graz account (students, employees, external project staff).',
    },
    {
      question: 'How can I join a specific team',
      answer:
        'The admin of the team has to contact the RDM team (Alexander Bardel) and then the change to the team takes place.',
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

  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="col-span-full space-y-3 lg:col-span-6">
        <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
          {title}
        </h1>
        <p className="font-thin text-gray-500">{content}</p>
        {params.id === 'faq' && (
          <AccordionCollapse data={questionsAndAnswers} />
        )}
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
              API Support Page
            </a>
          </>
        )}
        {params.id === 'manuals' && (
          <>
            <div className="mb-5 mt-5 flex gap-5">
              <a
                href="https://www.tugraz.at/fileadmin/user_upload/tugrazExternal/0c4b9c02-50a6-4a31-b5fd-24a0f93b69c5/eLabFTW_Guide_User_en_v1.3.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-shrink-0 gap-x-2 whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-sm font-thin text-gray-100 no-underline hover:bg-gray-500 hover:text-white">
                User Guide
              </a>

              <a
                href="https://www.tugraz.at/fileadmin/user_upload/tugrazExternal/0c4b9c02-50a6-4a31-b5fd-24a0f93b69c5/eLabFTW_Guide_TeamAdmin_en_v1.3.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-shrink-0 gap-x-2 whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-sm font-thin text-gray-100 no-underline hover:bg-gray-500 hover:text-white">
                Team-Admin Guide
              </a>
            </div>
          </>
        )}
        {params.id === 'overview' && (
          <>
            <div className="">
              <p className="font-thin mb-3">
                Configuration options are identical for viewing and writing
                permissions. Entries always have permission settings that are
                anchored in the base settings. these are taken from the personal
                default settings or from template settings, but can be changed.
                Adding one or more teams, team groups or individual users is
                optional and can, but does not have to be done. Exception: Admin
                has forced the use of certain permission settings in the team
                settings.
              </p>
              <OverviewPermissionsManagement />
            </div>
          </>
        )}
        {params.id === 'entries' && (
          <>
            <p className="font-thin mb-3">
              Depending on the section in eLabFTW, different export formats are
              available for one or more entries. This allows you to use your
              documentation externally or, for example, as additional
              information for publications or audits. Below you will find an
              overview of the available export formats and a short description.
            </p>
            <ExportEntries />
          </>
        )}
        {params.id === 'tip' && (
          <>
            <p className="font-thin mb-3">
              When a user leaves a team, a group or the entire tool, it makes
              sense to have an offboarding strategy in place beforehand. In the
              three cases mentioned above, there are a few important points to
              consider when dealing with eLabFTW. As a user, it is important to
              remember which entries do not belong to you but you want to keep
              the information. As an admin or other user of the team, it is also
              important to think about this point in relation to the entries of
              the departing user. Entries can be duplicated for further use or
              exported for external archiving. If you leave the tool as a user,
              you should always export relevant entries, as you will lose access
              to them. If you are also the owner of database entries, transfer
              ownership to the admin of your team. Please remember, if you copy
              other people's entries, to ask the owner for permission first, as
              it is the intellectual property of the person concerned.
            </p>
            <UserExit />
          </>
        )}
        {params.id === 'backup' && (
          <>
            <p className="font-thin">
              If you want to save your entries from eLabFTW externally, i.e. on
              your computer or on another storage medium, this is possible in
              different ways. We distinguish here between entries in experiments
              and in the database.
            </p>
            <p className="font-thin">
              <h2 className="font-medium">Experiments</h2>
              You can select one or more entries via the web interface and
              export them directly. Several formats are available, which can be
              selected depending on the application. The entry itself remains
              after the export. You can also export an entry via the view of an
              individual entry. Depending on the view, you have different
              formats available for export. First check which one you need
              before exporting the entry(s). You can export all your experiments
              in one go via your "Profile". This is possible in different
              formats. However, only experiments for which you are the owner can
              be exported. Option for admins: As an admin, you can export all
              experiments of a user in different formats via the Admin Panel.
              You can also export database objects and bookings in the calendar.
              Option via API: Coming soon (only timestamped entries)
            </p>
            <p className="font-thin">
              <h2 className="font-medium">Resources</h2>
              You can select one or more entries via the web interface and
              export them directly. Again, several formats are available, which
              can be selected depending on the application. The entry itself
              remains after the export. You can also export an entry via the
              view of an individual entry. Depending on the view, you have
              different formats available for export. First check which one you
              need before exporting the entry(s).
            </p>
          </>
        )}
      </div>
    </div>
  );
}
