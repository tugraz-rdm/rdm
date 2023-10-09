'use client';

import { events, services } from '#/lib/services';
import {
  faArrowUpRightFromSquare,
  faCalendarDays,
  faChevronDown,
  faChevronRight,
  faList,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GlobalNavItem } from './global-nav';
import Image from 'next/image';
import InformationalBanner from './informational-banner';
import Link from 'next/link';
import { useState } from 'react';

type EventsProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export const EventDrawer: React.FC<EventsProps> = ({ isOpen }) => {
  const [openSectionIndex, setOpenSectionIndex] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isEventOpen, setIsEventOpen] = useState<boolean>(true);

  const handleMenuClick = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleEventClick = () => {
    setIsEventOpen(prev => !prev);
  };

  const handleClick = (index: number) => {
    setOpenSectionIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const handleClose = () => {
    setOpenSectionIndex(null);
  };

  return (
    <div>
      <div
        className={`fixed left-0 top-0 z-40 h-screen overflow-y-auto p-4 pt-8 shadow-2xl transition-transform ${
          isOpen ? '' : '-translate-x-full'
        } bg-white-smoke dark:bg-white-smoke w-80 sm:w-80`}
        tabIndex={-1}
        aria-labelledby="drawer-left-label">
        <InformationalBanner />
        <h5
          id="drawer-body-scrolling-label"
          className="font-thin mb-10 text-base uppercase text-gray-700 dark:text-gray-400">
          Menu
        </h5>
        <DrawerSection
          title="DASHBOARD"
          icon={faList}
          onClick={handleMenuClick}
          isOpen={isMenuOpen}
        />
        <div className="overflow-y-auto py-2">
          <ul className="space-y-2">
            {isMenuOpen &&
              services.map((section, sectionIdx) => (
                <li key={sectionIdx} style={{ marginLeft: '17px' }}>
                  <button
                    type="button"
                    className="hover:bg-custom-bone  group flex w-full items-center rounded-lg p-2 text-base text-gray-700 transition duration-75 dark:text-gray-700 dark:hover:bg-gray-700"
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
                        className="border-transparent hover:border-gray-900 hover:bg-custom-bone ml-5 pl-2 p-1 font-thin group flex items-center rounded-lg text-base text-gray-700 transition duration-75 dark:text-gray-700 dark:hover:bg-gray-700">
                        <GlobalNavItem item={item} close={handleClose} />
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            <DrawerSection
              title="EVENTS"
              icon={faCalendarDays}
              onClick={handleEventClick}
              isOpen={isEventOpen}
            />
            {isEventOpen && (
              <ul>
                <div className="flex flex-col gap-3 py-2">
                  {events.map(event => (
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
                        <div className="cursor-pointer text-lg font-semibold tracking-tight text-gray-900 hover:underline dark:text-white">
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
      className={`fixed left-0 top-0 mt-8 transition-transform ${
        isOpen ? 'ml-80' : ''
      }`}>
      <div
        className="focus:ring-4-gray-700 -mt-3 mr-2 rounded-lg px-5 text-sm font-medium text-white focus:outline-none focus:ring-gray-700"
        onClick={toggleDrawer}>
        <div className="ml-5 flex gap-2 items-center">
          {isOpen ? (
            <svg
              className="h-5 w-5 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 16">
              <path
                stroke="currentColor"
                // stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 15">
              <path
                stroke="currentColor"
                // stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 7.5h11m0 0L8 3.786M12 7.5l-4 3.714M12 1h3c.53 0 1.04.196 1.414.544.375.348.586.82.586 1.313v9.286c0 .492-.21.965-.586 1.313A2.081 2.081 0 0 1 15 14h-3"
              />
            </svg>
          )}
          <Link href="/" className="flex gap-x-2" onClick={onToggle}>
            <h3 className="font-base text-2xl tracking-wide text-white">RDM</h3>
            <h3 className="text-2xl font-thin tracking-wide text-white">
              | Research Data Management
            </h3>
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
        <FontAwesomeIcon className="text-base" icon={icon} />
        <h5
          className="text-1xl font-base ml-2 cursor-pointer uppercase text-gray-700 dark:text-gray-400"
          onClick={onClick}>
          {title}
        </h5>
      </div>
      <FontAwesomeIcon
        className="h-4 w-4"
        icon={isOpen ? faChevronDown : faChevronRight}
        onClick={onClick}
      />
    </div>
    {isOpen && children}
  </div>
);
