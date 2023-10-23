'use client';

import { useState } from 'react';

type QuestionAnswer = {
  question: string;
  answer: string;
};

interface AccordionCollapseProps {
  data: QuestionAnswer[];
}

const AccordionCollapse = ({ data }: AccordionCollapseProps) => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (itemId: string) => {
    setOpenItem(prev => (prev === itemId ? null : itemId));
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse">
      {data.map((item, index) => (
        <div key={index}>
          <h2 id={`accordion-collapse-heading-${index}`}>
            <button
              type="button"
              className={`font-base flex w-full items-center justify-between ${
                index === 0 ? 'rounded-t-lg' : ''
              } ${
                index === data.length - 1 ? 'border-b' : 'border-b-0'
              } border p-5 text-left text-gray-700 hover:bg-custom-isabelline focus:ring-1 focus:ring-custom-isabelline dark:border-gray-700 dark:text-gray-400  dark:focus:ring-gray-800`}
              onClick={() => toggleItem(`item${index}`)}
              aria-expanded={openItem === `item${index}`}
              aria-controls={`accordion-collapse-body-${index}`}>
              <span>{item.question}</span>
              <svg
                data-accordion-icon
                className="h-3 w-3 shrink-0 rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6">
                <path
                  stroke="currentColor"
                  // strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${index}`}
            className={openItem === `item${index}` ? '' : 'hidden'}
            aria-labelledby={`accordion-collapse-heading-${index}`}>
            <div className="border p-5 dark:border-gray-700 dark:bg-gray-900">
              <div className="mb-2 font-thin text-gray-500 dark:text-gray-400">
                {item.answer}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccordionCollapse;
