'use client';

import AccordionFaq from '#/ui/accordion-faq';
import { FC } from 'react';
import GuideTemplate from '#/ui/guide-template';
import { RenderingInfoTool } from '#/ui/rendering-info-tool';
import { getContentAndTitleById } from '../paragraph-by-id';

interface PageProps {
  params: {
    id: string;
  };
}

const Page: FC<PageProps> = ({ params }) => {
  const { content, title } = getContentAndTitleById(params.id);
  const questionsAndAnswers = [
    {
      question: 'What is allowed to create new DMPs in the TU Graz DMP Tool?',
      answer:
        'Anyone with a TU Graz account (students, employees, external project stuff)',
    },
    {
      question:
        'Are my DMPs visible to everyone inside and outside of TU Graz?',
      answer:
        'No, by default the viewing and editing rights are yours. However, you can give members of the TU Graz editing options for your DMP.',
    },
    {
      question: 'How long will my DMPs be stored?',
      answer:
        'At least for 10 years, but even after that, your DMPs are not automatically deleted.',
    },
    {
      question: 'Will I have to pay if I use the DMP Tool?',
      answer: "No, you don't have to pay anything to use it.",
    },
    {
      question: 'Can I delete my DMPs?',
      answer:
        'Yes, if you know that you no longer want to keep the DMP in the DMP Tool, you can delete it yourself at any time.',
    },
    {
      question: 'Where is the DMP stored and is it safe there?',
      answer:
        'The DMPs are stored on the servers of the ZID of TU Graz and are protected by their security measures.',
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
        <div className="-order-1 col-span-full lg:order-none lg:col-span-2">
          <RenderingInfoTool
            type="tu-graz-dmp-tool"
            showEmail={params.id === 'support'}
          />
        </div>
      )}
      {params.id === 'manuals' && (
        <div className="md:flex">
          <GuideTemplate
            pdfSources={{ english: '/pdf/Handbuch_Datenschutz_TU_Graz.pdf' }}
          />
        </div>
      )}
    </div>
  );
};

export default Page;
