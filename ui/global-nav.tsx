'use client';

import { ButtonDrawer, EventDrawer } from './event-drawer';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/outline';
import { ServiceItem, useCombinedData } from '#/lib/services';

import { Disclosure } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { TULogo } from './tu-logo';
import clsx from 'clsx';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { useSelectedLayoutSegment } from 'next/navigation';
import { useState } from 'react';

export const SimpleGlobalNav: React.FC<{
  isOpen: boolean;
  onToggle: () => void;
}> = ({ isOpen, onToggle }) => {
  const toggleDrawer = () => {
    onToggle();
  };

  return (
    <>
    
      <div className="fixed top-0 z-50 flex w-full flex-col bg-gray-700 bg-gradient-to-r bg-no-repeat shadow-lg transition-opacity lg:flex-row lg:items-center lg:justify-between">
        <div className="mt-5 lg:mt-0">
          <ButtonDrawer isOpen={isOpen} onToggle={toggleDrawer} />
          <EventDrawer isOpen={isOpen} onToggle={toggleDrawer} />
        </div>
        <Link href="/" legacyBehavior>
          <a
            className={`items-left group flex w-full transform gap-x-3 transition-transform lg:w-auto ${
              isOpen ? 'translate-x-[10vw]' : ''
            }`}
            onClick={toggleDrawer}>
            {/* Any content or components you want inside the Link */}
          </a>
        </Link>
        <div className="mr-5 flex items-center gap-10">
          <div className="logo-wrapper m-5 mb-6 h-6 w-20">
            <TULogo />
          </div>
        </div>
      </div>
    </>
  );
};

export function GlobalNav() {
  const [content, setContent] = useState<'nav' | 'events'>('nav');
  const [isOpen, setIsOpen] = useState(true);
  const close = () => setIsOpen(false);
  const { servicesData, eventsData } = useCombinedData();
  
  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-700 bg-gray-700 lg:bottom-0 lg:z-auto lg:w-96 lg:border-b-0 lg:border-r lg:border-gray-700">
      <div>
        <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
          <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
            <Link
              href="/"
              className="group inline w-full items-center gap-x-2.5"
              onClick={close}>
              <div className="logo-wrapper m-5 ml-8 h-12 w-32">
                <TULogo />
              </div>
              <div className="flex items-center">
                <h3 className=" text-3xl font-thin tracking-wide text-white">
                  Research Data Management at TU Graz
                </h3>
              </div>
            </Link>
          </div>
        </div>
        <button
          type="button"
          className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}>
          <div className="font-medium text-gray-100 group-hover:text-gray-400">
            Menu
          </div>
          {isOpen ? (
            <XIcon className="block w-6 text-white" />
          ) : (
            <MenuAlt2Icon className="block w-6 text-white" />
          )}
        </button>
        <div className="ml-8 flex">
          <button
            className="bg-white-smoke mb-2 mr-2  rounded-lg px-5 py-2.5 text-sm font-semibold text-black focus:outline-none "
            onClick={() => setContent('nav')}>
            Navigation
          </button>
          <button
            className="bg-white-smoke mb-2 mr-2  rounded-lg px-5 py-2.5 text-sm font-semibold text-black focus:outline-none"
            onClick={() => setContent('events')}>
            Events
          </button>
        </div>
        {content === 'nav' ? (
          <div
            className={clsx('overflow-y-auto lg:static lg:block', {
              'fixed inset-x-0 bottom-0 top-14 mt-px bg-black': isOpen,
              hidden: !isOpen,
            })}>
            <nav className="space-y-6 px-2 py-3 lg:space-x-0 lg:space-y-4">
              {servicesData.map((section, sectionIdx) => (
                <Disclosure
                  as="div"
                  key={sectionIdx}
                  className="ml-2 flex flex-col space-y-1 lg:ml-0 lg:space-y-2">
                  {() => (
                    <>
                      <Disclosure.Button className="mb-2 ml-4 px-3 text-left font-thin uppercase tracking-wider text-white">
                        <div className="flex items-center justify-between space-y-2 text-lg">
                          <span>{section.name}</span>
                        </div>
                      </Disclosure.Button>

                      <Disclosure.Panel className="ml-2 flex flex-col items-start space-y-1 font-thin uppercase lg:ml-0 lg:space-y-2">
                        {section.items.map((item, itemIdx) => (
                          <GlobalNavItem
                            key={itemIdx}
                            item={item}
                            close={close}
                          />
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </nav>
          </div>
        ) : (
          <div className=" h-[80vh] w-full overflow-y-auto lg:w-72">
            <div className="mt-20 space-y-8">
              {eventsData.map(event => (
                <div
                  key={event.date}
                  className="bg-white-smoke ml-8 h-full max-w-sm rounded-lg border border-gray-200 p-6 shadow-lg group-hover:opacity-10 dark:border-gray-700 dark:bg-gray-800">
                  {event.urlImage ? (
                    <Image
                      src={event.urlImage}
                      alt="Events"
                      width={400}
                      height={200}
                      className="rounded-t-lg object-cover"
                    />
                  ) : null}
                  <h5 className="mb-2 text-xl font-thin tracking-tight text-gray-900 dark:text-white">
                    {event.date}
                  </h5>
                  <Link href={`/${event.url}`}>
                    <span className="cursor-pointer text-2xl font-semibold tracking-tight text-gray-900 hover:underline dark:text-white">
                      {event.name}
                    </span>
                  </Link>
                  {event.moreInfo && (
                    <Link href={`/${event.url}`} legacyBehavior>
                      <span className="text-custom-red mt-2 inline-flex cursor-pointer items-center hover:underline">
                        {event.moreInfo}
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="ml-2.5 h-3 w-3"
                        />
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function GlobalNavItem({
  item,
  close,
}: {
  item: ServiceItem;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      href={`/${item.slug}`}
      legacyBehavior
      onClick={close}
      className={clsx('ml-6 block rounded-md  py-2 text-sm font-thin ', {
        'text-gray-700 hover:border-2 hover:text-gray-700': !isActive,
        'text-gray-700 hover:border-2 ': isActive,
      })}>
      {item.name}
    </Link>
  );
}

export default GlobalNav;
