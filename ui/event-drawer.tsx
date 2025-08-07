'use client';

import {
  faCalendar,
  faChevronDown,
  faChevronRight,
  faCogs,
  faExternalLinkAlt,
  faFileAlt,
  faList,
  faNewspaper,
  faQuestionCircle,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GlobalNavItem } from './global-nav';
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
  const [isEventsOpen, setIsEventsOpen] = useState<boolean>(false);
  const [isNewsOpen, setIsNewsOpen] = useState<boolean>(false);
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

  const handleEventsClick = () => {
    setIsEventsOpen(prev => !prev);
  };

  const handleNewsClick = () => {
    setIsNewsOpen(prev => !prev);
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
        <div
          className="flex justify-between mb-10 -mt-3"
          style={{ height: '35px' }}>
          <h5
            id="drawer-body-scrolling-label"
            className="text-base font-bold mb-10 text-white-smoke light:white-smoke">
            Menu
          </h5>
        </div>

        <div className="mb-6">
          <DrawerSection
            title="Services"
            icon={faCogs}
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
                      <div className="flex items-center space-x-2">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            section.name === 'PLANNING'
                              ? 'bg-green-500'
                              : section.name === 'ACTIVE STATE OF RESEARCH'
                              ? 'bg-blue-500'
                              : 'bg-red-500'
                          }`}></div>
                        <span className="flex-1 whitespace-nowrap text-left text-xs font-medium">
                          {section.name}
                        </span>
                      </div>
                    </button>
                    <ul
                      id={`dropdown-${sectionIdx}`}
                      className={`space-y-2 py-2 ${
                        openSectionIndex === sectionIdx ? 'block' : 'hidden'
                      }`}>
                      {section.items.map((item, itemIdx) => (
                        <li
                          key={itemIdx}
                          className={` ml-5 pl-2 p-1 text-xs font-medium group flex items-center rounded-lg transition duration-75 ${
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
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <DrawerSection
            title="Events & News"
            icon={faCalendar}
            onClick={handleEventsClick}
            isOpen={isEventsOpen}
          />

          {isEventsOpen && (
            <div className="overflow-y-auto py-2">
              <ul>
                <li className="ml-5 pl-2 p-1">
                  <Link
                    href="/news-events"
                    className="flex items-center space-x-2 text-white-smoke hover:text-gray-300 transition-colors">
                    <FontAwesomeIcon icon={faCalendar} className="w-4 h-4" />
                    <span className="text-sm font-medium">View All Events</span>
                  </Link>
                </li>
                {eventsData.slice(0, 3).map((event, index) => (
                  <li key={index} className="ml-5 pl-2 p-1">
                    <div className="bg-white-smoke rounded-lg p-3 mb-2">
                      <div className="text-xs text-gray-500 mb-1">
                        {event.date}
                      </div>
                      <div className="text-sm font-medium text-gray-900 line-clamp-2">
                        {event.name}
                      </div>
                      {event.moreInfo && (
                        <a
                          href={event.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs text-custom-red hover:underline mt-1">
                          {event.moreInfo}
                          <FontAwesomeIcon
                            icon={faExternalLinkAlt}
                            className="ml-1 w-2 h-2"
                          />
                        </a>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mb-6">
          <DrawerSection
            title="Quick Links"
            icon={faList}
            onClick={handleNewsClick}
            isOpen={isNewsOpen}
          />

          {isNewsOpen && (
            <div className="overflow-y-auto py-2">
              <ul>
                <li className="ml-5 pl-2 p-1">
                  <a
                    href="https://www.tugraz.at/sites/rdm/support/rdm-team"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white-smoke hover:text-gray-300 transition-colors">
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-medium">RDM Support</span>
                  </a>
                </li>
                <li className="ml-5 pl-2 p-1">
                  <Link
                    href="/news-events"
                    className="flex items-center space-x-2 text-white-smoke hover:text-gray-300 transition-colors">
                    <FontAwesomeIcon icon={faNewspaper} className="w-4 h-4" />
                    <span className="text-sm font-medium">Latest News</span>
                  </Link>
                </li>
                <li className="ml-5 pl-2 p-1">
                  <a
                    href="mailto:rdmteam@tugraz.at"
                    className="flex items-center space-x-2 text-white-smoke hover:text-gray-300 transition-colors">
                    <FontAwesomeIcon
                      icon={faQuestionCircle}
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-medium">Contact Support</span>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="mb-6">
          <DrawerSection
            title="Site Policies"
            icon={faFileAlt}
            onClick={handleRDMDocClick}
            isOpen={isRDMDocOpen}
          />
          <div className="overflow-y-auto py-2">
            <ul>
              {isRDMDocOpen && (
                <RdmDocumentSection
                  isOpen={isRDMDocOpen}
                  documents={documents}
                />
              )}
            </ul>
          </div>
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
      className={`fixed left-0 top-0 mt-4 transition-transform ${
        isOpen ? 'ml-72' : ''
      }`}>
      <div className="ring-4-gray-700 mr-2 rounded-lg ml-5 flex items-center gap-4">
        <button
          className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg text-white"
          onClick={toggleDrawer}
          aria-label="Open navigation menu">
          {isOpen ? (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 12 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>

        <Link href="/" className="flex items-center">
          <img
            src="/RDM-withTitle-rot-white.png"
            alt="RDM Research Data Management"
            className="hidden sm:block"
            style={{ width: '20rem', height: 'auto' }}
          />
          <img
            src="/RDM-Icon-rot.png"
            alt="RDM"
            className="block sm:hidden"
            style={{ width: '4rem', height: 'auto' }}
          />
        </Link>
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
          className="text-base font-bold ml-2 cursor-pointer text-white-smoke dark:text-white-smoke"
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
