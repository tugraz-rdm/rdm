'use client';

import {
  faChevronDown,
  faChevronRight,
  faList,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GlobalNavItem } from './global-nav';
import InformationalBanner from './informational-banner';
import Link from 'next/link';
import RdmDocumentSection from './rdm-documents-section';
import { documents } from '#/lib/documents';
import { useCombinedData } from '#/lib/services';
import { useState } from 'react';

type EventsProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export const EventDrawer: React.FC<EventsProps> = ({ isOpen }) => {
  const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(true);
  const [isRDMDocOpen, setIsRDMDocOpen] = useState<boolean>(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(
    null
  );
  const { servicesData, eventsData } = useCombinedData();

  const handleMenuClick = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleRDMDocClick = () => {
    setIsRDMDocOpen(prev => !prev);
  };

  const handleItemClick = (itemIdx: number) => {
    setSelectedItemIndex(itemIdx);
  };

  const handleClick = (index: number) => {
    setOpenSectionIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const handleClose = () => {
    setOpenSectionIndex(null);
  };

  const hideScrollbarStyle: React.CSSProperties = {
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  };

  return (
    <div>
      <div
        style={hideScrollbarStyle}
        className={`fixed left-0 top-0 z-40 h-screen overflow-y-auto p-4 pt-8 shadow-2xl transition-transform ${
          isOpen ? '' : '-translate-x-full'
        } bg-custom-blue dark:bg-white-smoke w-72 sm:w-72`}
        tabIndex={-1}
        aria-labelledby="drawer-left-label">
        <InformationalBanner />
        <div
          className="flex justify-between mb-10 -mt-3"
          style={{ height: '35px' }}>
          <h5
            id="drawer-body-scrolling-label"
            className="font-thin mb-10 text-base uppercase text-white-smoke light:white-smoke">
            Menu
          </h5>
          {/* <ButtonLANGroup /> */}
        </div>

        <DrawerSection
          title="DASHBOARD"
          icon={faList}
          onClick={handleMenuClick}
          isOpen={isMenuOpen}
        />

        <div className="overflow-y-auto py-2">
          <ul>
            {isMenuOpen &&
              servicesData.map((section, sectionIdx) => (
                <li key={sectionIdx} style={{ marginLeft: '17px' }}>
                  <button
                    type="button"
                    className=" hover:bg-white-smoke  group flex w-full items-center rounded-lg p-2 text-base hover:text-gray-700 text-white-smoke transition duration-75 dark:text-white-smoke dark:hover:bg-white-smoke"
                    onClick={() => handleClick(sectionIdx)}>
                    <span className="flex-1 whitespace-nowrap text-left font-thin">
                      {section.name}
                    </span>
                  </button>

                  <ul
                    id={`dropdown-${sectionIdx}`}
                    className={`space-y-2 py-2 ${
                      openSectionIndex === sectionIdx ? 'block' : 'hidden'
                    }`}>
                    {section.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className={` ml-5 pl-2 p-1 font-thin group flex items-center rounded-lg text-base transition duration-75 ${
                          selectedItemIndex === itemIdx
                            ? 'bg-white-smoke text-gray-700'
                            : 'hover:border-white-smoke hover:text-gray-700 hover:bg-white-smoke text-white-smoke dark:text-white-smoke dark:hover:bg-gray-700'
                        }`}
                        onClick={() => handleItemClick(itemIdx)}>
                        <GlobalNavItem item={item} close={handleClose} />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}

            {/* 
             //!!! this is needed for later, please do not remove it
            <DrawerSection
              title="EVENTS"
              icon={faCalendarDays}
              onClick={handleEventClick}
              isOpen={isEventOpen}
            /> */}
            {/* {isEventOpen && (
              <ul>
                <div className="flex flex-col gap-3 py-2">
                  {eventsData.map(event => (
                    <li
                      key={event.date}
                      className="bg-white-smoke grid h-full max-w-sm rounded-lg border border-gray-400 p-6 shadow-sm group-hover:opacity-10 dark:border-gray-700 dark:bg-gray-800">
                      {event.urlImage ? (
                        <Image
                          src={event.urlImage}
                          alt="Events"
                          width={400}
                          height={200}
                          className="rounded-t-lg object-cover"
                        />
                      ) : null}
                      <h5 className="mb-2 text-sm font-thin tracking-tight text-gray-900 dark:text-white">
                        {event.date}
                      </h5>
                      <Link
                        href={event.url}
                        target="_blank"
                        rel="noopener noreferrer">
                        <div className="cursor-pointer text-lg font-base tracking-tight text-gray-900 hover:underline dark:text-white">
                          {event.name}
                        </div>
                      </Link>
                      {event.moreInfo && (
                        <a
                          href={event.url}
                          target="_blank"
                          rel="noopener noreferrer">
                          <span className="text-custom-red mt-2 inline-flex cursor-pointer items-center hover:underline">
                            {event.moreInfo}
                            <FontAwesomeIcon
                              icon={faArrowUpRightFromSquare}
                              className="ml-2.5 h-3 w-3"
                            />
                          </span>
                        </a>
                      )}
                    </li>
                  ))}
                </div>
              </ul>
            )} */}
          </ul>
        </div>
        <DrawerSection
          title="SITE POLICIES"
          icon={faList}
          onClick={handleRDMDocClick}
          isOpen={isRDMDocOpen}
        />
        <div className="overflow-y-auto py-2">
          <ul>
            {isRDMDocOpen && (
              <RdmDocumentSection isOpen={isRDMDocOpen} documents={documents} />
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export const ButtonDrawer: React.FC<{
  isOpen: boolean;
  onToggle: () => void;
}> = ({ isOpen, onToggle }) => {
  const toggleDrawer = () => {
    onToggle();
  };

  return (
    <div
      className={`fixed left-0 top-0 mt-6 transition-transform ${
        isOpen ? 'ml-72' : ''
      }`}>
      <div
        className={`focus:ring-4-gray-700 mr-2 rounded-lg  text-sm font-medium text-white focus:outline-none focus:ring-gray-700 " 
        ${isOpen ? 'px-2' : 'px-5'}`}
        onClick={toggleDrawer}>
        <div className="ml-5 flex gap-2 items-center">
          {isOpen ? (
            <svg
              className="w-5 h-5 text-white dark:text-white mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5 text-white dark:text-white mr-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
          <Link href="/" className="flex gap-x-2" onClick={onToggle}>
            <img
              src="/RDM-withTitle-rot-white.png"
              style={{ width: '20rem', height: 'auto' }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export const DrawerSection: React.FC<{
  title: string;
  icon: any;
  children?: React.ReactNode;
  onClick: () => void;
  isOpen: boolean;
}> = ({ title, icon, onClick, isOpen, children }) => (
  <div>
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <FontAwesomeIcon className="text-base" icon={icon} color="#ffffff" />
        <h5
          className="text-1xl font-thin ml-2 cursor-pointer uppercase text-white-smoke dark:text-white-smoke"
          onClick={onClick}>
          {title}
        </h5>
      </div>
      <FontAwesomeIcon
        className="h-4 w-4"
        color="#ffffff"
        icon={isOpen ? faChevronDown : faChevronRight}
        onClick={onClick}
      />
    </div>
    {isOpen && children}
  </div>
);
