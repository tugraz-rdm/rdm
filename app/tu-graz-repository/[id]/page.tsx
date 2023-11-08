import AccordionCollapse from '#/ui/accordion-collapse';
import { ExternalLink } from '#/ui/external-link';
import { RenderingInfoRepository } from '#/ui/rendering-info-repository';
import { getContentAndTitleById } from '../parapraph-by-id';

export default async function Page({ params }: { params: { id: string } }) {
  const { content, title } = getContentAndTitleById(params.id);
  const questionsAndAnswers = [
    {
      question:
        'Who is allowed to create new entries in the TU Graz Repository?',
      answer:
        'Anyone with a TU Graz account (students, employees, external project staff).',
    },
    {
      question: 'Are my entries visible to everyone worldwide?',
      answer:
        'Not really, but you need a browser like Chrome or Firefox or similar and an active internet connection. There are additional tools available such as an upload-/download-manager which are only optional.',
    },
    {
      question: 'Do I need additional software on my device?',
      answer:
        'Not really, but you need a browser like Chrome or Firefox or similar and an active internet connection.',
    },
    {
      question: 'Is there a size limit per entry?',
      answer:
        'Per entry, the limit is 10 GB and 100 individual files. If you need more, please contact the RDM team. If you need to store very large amounts of data, there may be additional costs.',
    },
    {
      question: 'Can I delete my data set?',
      answer:
        'Once it is published, no. Your entry is to be handled like a regular publication and should therefore be created with a certain care.',
    },
    {
      question: 'How long will my data be stored?',
      answer:
        'At least for 10 years, but even after that, the data is not automatically deleted.',
    },
    {
      question: 'Will I have to pay if I use the repository?',
      answer:
        'Not as a rule, but if you need to store very large amounts of data, there may be additional costs.',
    },
    {
      question: 'Where is the data located and is it secure?',
      answer:
        'The data is stored on the servers of the ZID of TU Graz and is protected by their security measures.',
    },
    {
      question: 'What is a DOI and can it be reserved?',
      answer:
        'A DOI (Digital Object Identifier) is a unique and permanent identifier for your data set. You can reserve it in advance and include it, for example, in publications before the dataset is published.',
    },
    {
      question: 'Do I have to use a license for my dataset and entry?',
      answer:
        'It is not mandatory but strongly recommended. Otherwise, the Austrian copyright law applies, which is very restrictive and makes re-use virtually impossible.',
    },
    {
      question:
        'Does the TU Graz Repository meet the requirements of funding bodies?',
      answer:
        'Of course, certain funders may have very specific requirements, but in the vast majority of cases it meets the conditions.',
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
      </div>
      {params.id === 'support' && (
        <div className="-order-1 col-span-full lg:order-none lg:col-span-2">
          <RenderingInfoRepository
            type="tu-graz-repository"
            showEmail={params.id === 'support'}
          />
        </div>
      )}
      {params.id === 'manuals' && (
        <div>
          <div className=" flex gap-5 whitespace-nowrap">
            <ExternalLink href="https://www.tugraz.at/fileadmin/user_upload/tugrazExternal/0c4b9c02-50a6-4a31-b5fd-24a0f93b69c5/TUGraz_Repository_Guide_en_v2.2.pdf">
              Repository Guide EN
            </ExternalLink>
            <ExternalLink href="https://www.tugraz.at/fileadmin/user_upload/tugrazExternal/0c4b9c02-50a6-4a31-b5fd-24a0f93b69c5/TUGraz_Repository_Guide_de_v2.2.pdf">
              Repository Guide DE
            </ExternalLink>
          </div>
        </div>
      )}
      {params.id === 'guide' && (
        <div>
          <div className=" flex gap-5 whitespace-nowrap">
            <ExternalLink href="https://www.tugraz.at/fileadmin/user_upload/tugrazExternal/0c4b9c02-50a6-4a31-b5fd-24a0f93b69c5/TUGraz_Repository_Guide_en_v2.2.pdf">
              Check out our Guide
            </ExternalLink>
          </div>
        </div>
      )}
      {params.id === 'info' && (
        <div>
          <div className=" flex gap-5 whitespace-nowrap">
            <ExternalLink href="https://www.tugraz.at/fileadmin/user_upload/tugrazExternal/0c4b9c02-50a6-4a31-b5fd-24a0f93b69c5/TUG_Repository_ShortInfo.pdf">
              Slides
            </ExternalLink>
          </div>
        </div>
      )}
    </div>
  );
}
