'use client';

import { FC, useEffect, useState } from 'react';
import {
  faArrowRight,
  faCalendar,
  faCheckCircle,
  faClipboardList,
  faFlask,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HoverableButtons from '#/ui/hoverable-buttons';
import InteractiveServiceCard from '#/ui/interactive-service-card';
import Link from 'next/link';
import { useCombinedData } from '#/lib/services';

const Page: FC = () => {
  const { servicesData, eventsData } = useCombinedData();
  const [isClient, setIsClient] = useState(false);
  const [bookmarkedServices, setBookmarkedServices] = useState<string[]>([]);

  useEffect(() => {
    setIsClient(true);
    // Load bookmarked services from localStorage
    const saved = localStorage.getItem('bookmarkedServices');
    if (saved) {
      setBookmarkedServices(JSON.parse(saved));
    }
  }, []);

  const handleBookmark = (item: any) => {
    const newBookmarks = bookmarkedServices.includes(item.name)
      ? bookmarkedServices.filter(name => name !== item.name)
      : [...bookmarkedServices, item.name];

    setBookmarkedServices(newBookmarks);
    localStorage.setItem('bookmarkedServices', JSON.stringify(newBookmarks));
  };

  const handleShare = (item: any) => {
    console.log('Sharing:', item.name);
  };

  if (!isClient) {
    return null; // loading state in the future
  }

  return (
    <>
      <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 space-y-8 text-white">
        <div className="flex justify-end mb-2">
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-custom-blue-dark mb-1">
                {servicesData.reduce(
                  (acc, section) => acc + section.items.length,
                  0
                )}
              </div>
              <div className="text-xs text-gray-600">Services</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-custom-blue-dark mb-1">
                {eventsData.length}
              </div>
              <div className="text-xs text-gray-600">Events</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-custom-blue-dark mb-1">
                {bookmarkedServices.length}
              </div>
              <div className="text-xs text-gray-600">Bookmarks</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
              <div className="text-lg font-bold text-custom-blue-dark mb-1">
                3
              </div>
              <div className="text-xs text-gray-600">Phases</div>
            </div>
          </div>
        </div>

        <div className="text-center pb-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-custom-blue-dark mb-6">
                Research Data Management at TU Graz
              </h1>
              <div className="space-y-4 text-lg text-gray-700">
                <p className="leading-relaxed">
                  <span className="font-medium text-custom-blue-dark">
                    Research data management (RDM)
                  </span>{' '}
                  <span className="font-thin">
                    ensures integrity, increases research impact, and saves time
                    that is otherwise lost in searching for or understanding of
                    data.
                  </span>
                </p>
                <p className="leading-relaxed font-thin">
                  The RDM Team at TU Graz offers the following tools and
                  services along the three phases of research:
                </p>
              </div>

              <div className="flex justify-center items-center space-x-8 mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-thin text-gray-600">
                    Planning
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-thin text-gray-600">
                    Active Research
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <span className="text-sm font-thin text-gray-600">
                    Publication
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
          <div className="xl:col-span-4 space-y-6">
            {servicesData.map((section, index) => {
              let descriptionIntro = '';
              if (index === 0) {
                descriptionIntro =
                  'During the planning phase, researchers can use the TU Graz DMP tool to create data management plans (DMP) for future projects. Data stewards will individually help with DMPs through consultations, and moreover support also project consortia in optimizing planned RDM processes.';
              } else if (index === 1) {
                descriptionIntro =
                  'During the active state of research, you have access to and can make use of the institutional electronic laboratory notebook eLabFTW and the (meta)data management, as well as to the analysis platform CyVerse Austria. The RDM Team will support individual researchers and research groups to optimize their current RDM processes.';
              } else if (index === 2) {
                descriptionIntro =
                  'During the state of research complete, results from research can be published using the TU Graz Repository, and the RDM Team can help you with the publication of any accompanying data. You can also find guidance on legal and ethical aspects of handling and publishing research data.';
              }

              return (
                <div key={section.name}>
                  <div className="border-1 rounded-lg border border-custom-bone p-6 group-hover:opacity-10 mb-8">
                    <div className="space-y-4">
                      {/* Phase Navigation - Clear and prominent inside container */}
                      <div className="flex justify-end mb-6">
                        <button className="bg-white-smoke font-medium rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none flex items-center shadow-sm border border-gray-200">
                          <img
                            src={`/icons/${section.name}.png`}
                            alt={`${section.name} icon`}
                            className={`inline-block mr-2 h-6 ${
                              section.name === 'PLANNING' ? 'w-5' : 'w-6'
                            }`}
                          />
                          {section.name}
                        </button>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                        {section.items.map((item, itemIndex) => (
                          <InteractiveServiceCard
                            key={itemIndex}
                            item={item}
                            phase={section.name}
                            onBookmark={handleBookmark}
                            onShare={handleShare}
                            isBookmarked={bookmarkedServices.includes(
                              item.name
                            )}
                          />
                        ))}
                      </div>

                      <p className="font-thin italic text-custom-blue-dark mt-4 text-sm">
                        {descriptionIntro}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="xl:col-span-1 space-y-4">
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-base font-bold text-custom-blue-dark">
                  Latest News & Events
                </h2>
                <Link
                  href="/news-events"
                  className="inline-flex items-center text-custom-blue-dark hover:text-custom-blue-dark/80 transition-colors text-xs">
                  <span>View All</span>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-1 w-3 h-3"
                  />
                </Link>
              </div>

              <div className="space-y-3">
                {/* Events Preview */}
                <div className="bg-white rounded-lg p-3">
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="w-3 h-3 text-custom-blue-dark mr-2"
                    />
                    <h3 className="text-xs font-semibold text-gray-900">
                      Upcoming Events
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {eventsData.slice(0, 2).map((event, index) => (
                      <div
                        key={index}
                        className="border-l-2 border-custom-blue pl-2">
                        <div className="text-xs text-gray-500">
                          {event.date}
                        </div>
                        <div className="text-xs font-medium text-gray-900 line-clamp-2">
                          {event.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3">
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon
                      icon={faNewspaper}
                      className="w-3 h-3 text-custom-blue-dark mr-2"
                    />
                    <h3 className="text-xs font-semibold text-gray-900">
                      Latest News
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <div className="border-l-2 border-green-500 pl-2">
                      <div className="text-xs text-gray-500">2024-01-15</div>
                      <div className="text-xs font-medium text-gray-900">
                        New RDM Guidelines Released
                      </div>
                    </div>
                    <div className="border-l-2 border-blue-500 pl-2">
                      <div className="text-xs text-gray-500">2024-01-10</div>
                      <div className="text-xs font-medium text-gray-900">
                        eLabFTW Training Workshop
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <h3 className="text-base font-bold text-custom-blue-dark mb-3">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <a
                  href="https://www.tugraz.at/sites/rdm/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border border-gray-300 bg-white text-custom-blue-dark px-3 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center text-sm">
                  Contact RDM Team
                </a>
                <Link
                  href="/news-events"
                  className="block border border-gray-300 bg-white text-gray-700 px-3 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors text-center text-sm">
                  View All Events
                </Link>
                <a
                  href="mailto:rdmteam@tugraz.at"
                  className="block bg-custom-blue text-white px-3 py-2 rounded-lg font-medium hover:bg-custom-blue-dark transition-colors text-center text-sm">
                  Get Support
                </a>
              </div>
            </div>

            {bookmarkedServices.length > 0 && (
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-base font-bold text-custom-blue-dark mb-3">
                  Your Bookmarks
                </h3>
                <div className="space-y-2">
                  {bookmarkedServices.slice(0, 3).map((service, index) => (
                    <div
                      key={index}
                      className="bg-white/10 rounded p-2 border border-gray-300/30">
                      <div className="text-xs text-gray-800 truncate">
                        {service}
                      </div>
                    </div>
                  ))}
                  {bookmarkedServices.length > 3 && (
                    <div className="text-xs text-gray-400 text-center">
                      +{bookmarkedServices.length - 3} more
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-r from-custom-blue to-custom-blue-dark rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Need Help with RDM?
          </h3>
          <p className="text-lg mb-6 text-white/90">
            Our team is here to support you with all aspects of research data
            management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.tugraz.at/sites/rdm/home"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-custom-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Contact RDM Team
            </a>
            <Link
              href="/news-events"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-custom-blue-dark transition-colors">
              View Events
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
