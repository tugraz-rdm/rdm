'use client';

import React, { useState } from 'react';

import { ExportEntries } from './e-labftw-material/export-entries';
import { OverviewPermissionsManagement } from './e-labftw-material/overview-permissions-management';
import SectionText from './section-text';
import { UserExit } from './e-labftw-material/user-exit';

export type AccordionItem = {
  title: string;
  description?: string;
  content?: string | JSX.Element;
  ifPermissionManagement?: boolean;
  ifExportEntries?: boolean;
  ifTip?: boolean;
  ifBackup?: boolean;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="accordion-flush" data-accordion="collapse">
      {items.map((item, index) => (
        <div key={index}>
          <h2 id={`accordion-flush-heading-${index}`}>
            <button
              type="button"
              className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
              onClick={() => toggleItem(index)}
              aria-expanded={openIndex === index}
              aria-controls={`accordion-flush-body-${index}`}>
              <div className="flex flex-col">
                <span className="text-left truncate text-1xl font-medium capitalize text-gray-700">
                  {item.title}
                </span>
                <span className="text-sm text-left font-thin text-gray-500 mt-1">
                  {item.description}
                </span>
              </div>
              <svg
                data-accordion-icon
                className={`w-4 h-4 shrink-0 ${
                  openIndex === index ? 'rotate-0' : 'rotate-180'
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-flush-body-${index}`}
            className={openIndex === index ? '' : 'hidden'}
            aria-labelledby={`accordion-flush-heading-${index}`}>
            <div
              className={`py-5 ${
                item.ifBackup
                  ? ''
                  : 'border-b border-gray-200 dark:border-gray-700'
              }`}>
              {typeof item.content === 'string' ? (
                <p className="text-sm text-gray-500 dark:text-gray-400 font-thin mb-3">
                  {item.content}
                </p>
              ) : (
                item.content
              )}
            </div>
            {item.ifPermissionManagement && <OverviewPermissionsManagement />}
            {item.ifExportEntries && <ExportEntries />}
            {item.ifTip && <UserExit />}
            {item.ifBackup && (
              <>
                <SectionText
                  title="Experiments"
                  content="You can select one or more entries via the web interface and
                  export them directly. Several formats are available, which can be
                  selected depending on the application. The entry itself remains
                  after the export. You can also export an entry via the view of an
                  individual entry. Depending on the view, you have different
                  formats available for export. First check which one you need
                  before exporting the entry(s). You can export all your experiments
                  in one go via your 'Profile'. 
                  This is possible in different formats. However, 
                  only experiments for which you are the owner can
                  be exported. Option for admins: As an admin, you can export all
                  experiments of a user in different formats via the Admin Panel.
                  You can also export database objects and bookings in the calendar.
                  Option via API: Coming soon (only timestamped entries)"
                />
                <SectionText
                  title="Resources"
                  content="You can select one or more entries via the web interface and
                  export them directly. Again, several formats are available, which
                  can be selected depending on the application. The entry itself
                  remains after the export. You can also export an entry via the
                  view of an individual entry. Depending on the view, you have
                  different formats available for export. First check which one you
                  need before exporting the entry(s)"
                />
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
