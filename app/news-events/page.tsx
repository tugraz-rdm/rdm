'use client';

import React, { FC, useState } from 'react';
import {
  faCalendar,
  faExternalLinkAlt,
  faNewspaper,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useCombinedData } from '#/lib/services';
import { useSearchParams } from 'next/navigation';

const NewsEventsPage: FC = () => {
  const { eventsData } = useCombinedData();
  const searchParams = useSearchParams();

  // Get tab from URL parameters, default to 'events'
  const tabParam = searchParams?.get('tab');
  const [activeTab, setActiveTab] = useState<'events' | 'news'>(
    tabParam === 'news' ? 'news' : 'events'
  );

  // Update active tab when URL parameters change
  React.useEffect(() => {
    const newTab = tabParam === 'news' ? 'news' : 'events';
    setActiveTab(newTab);
  }, [tabParam]);

  // Mock news data - in real implementation, this would come from an API
  const newsData = [
    {
      id: 1,
      date: '2024-01-15',
      title: 'New RDM Guidelines Released',
      excerpt:
        'TU Graz has released updated guidelines for research data management practices...',
      category: 'Policy',
      readMore: '#',
    },
    {
      id: 2,
      date: '2024-01-10',
      title: 'eLabFTW Training Workshop',
      excerpt:
        'Join our upcoming workshop to learn how to effectively use eLabFTW for your research...',
      category: 'Training',
      readMore: '#',
    },
    {
      id: 3,
      date: '2024-01-05',
      title: 'Repository Integration Success',
      excerpt:
        'Successfully integrated new features into TU Graz Repository for better data management...',
      category: 'Technology',
      readMore: '#',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-custom-blue-dark mb-4">
          News & Events
        </h1>
        <p className="text-lg text-gray-600">
          Stay updated with the latest RDM news, events, and announcements from
          TU Graz
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-8 bg-gray-100 rounded-lg p-1">
        <Link
          href="/news-events?tab=events"
          className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
            activeTab === 'events'
              ? 'bg-white text-custom-blue-dark shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}>
          <FontAwesomeIcon icon={faCalendar} className="w-4 h-4" />
          <span>Events</span>
        </Link>
        <Link
          href="/news-events?tab=news"
          className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
            activeTab === 'news'
              ? 'bg-white text-custom-blue-dark shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}>
          <FontAwesomeIcon icon={faNewspaper} className="w-4 h-4" />
          <span>News</span>
        </Link>
      </div>

      {/* Content */}
      {activeTab === 'events' && (
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {eventsData.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                {event.urlImage && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={event.urlImage}
                      alt={event.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-custom-blue-dark bg-blue-50 px-2 py-1 rounded">
                      {event.date}
                    </span>
                    <span className="text-xs text-gray-500">Event</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {event.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <Link
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-custom-blue-dark hover:text-custom-blue-dark/80 transition-colors">
                      <span className="text-sm font-medium">Learn More</span>
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className="ml-1 w-3 h-3"
                      />
                    </Link>
                    {event.moreInfo && (
                      <span className="text-xs text-gray-500">
                        {event.moreInfo}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'news' && (
        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsData.map(news => (
              <div
                key={news.id}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-custom-blue-dark bg-blue-50 px-2 py-1 rounded">
                    {news.category}
                  </span>
                  <span className="text-xs text-gray-500">{news.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {news.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {news.excerpt}
                </p>
                <Link
                  href={news.readMore}
                  className="inline-flex items-center text-custom-blue-dark hover:text-custom-blue-dark/80 transition-colors text-sm font-medium">
                  Read More
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="ml-1 w-3 h-3"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Call to Action */}
      <div className="mt-12 bg-gradient-to-r from-custom-blue to-custom-blue-dark rounded-lg p-8 text-white">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
          <p className="text-lg mb-6 opacity-90">
            Don&apos;t miss out on important RDM updates and events. Subscribe
            to the Shared RDM Newsletter.
          </p>
          <a
            href="https://forschungsdaten.at/shared-rdm-newsletter/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-custom-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Subscribe to Shared RDM Newsletter
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsEventsPage;
