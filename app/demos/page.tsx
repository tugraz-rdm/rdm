'use client';

import React, { FC } from 'react';
import { faExternalLinkAlt, faPlay } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DemosPage: FC = () => {
  return (
    <div
      className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-4"
      style={{ margin: '-2.5rem' }}>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-custom-blue-dark mb-4">
          Interactive Demos
        </h1>
        <p className="text-lg text-gray-600">
          Explore our research data management tools through interactive
          demonstrations
        </p>
      </div>

      <div className="space-y-6">
        {/* InvenioRDM Demo */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="bg-custom-blue-dark/10 p-2 rounded-lg">
                  <FontAwesomeIcon
                    icon={faPlay}
                    className="w-5 h-5 text-custom-blue-dark"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    InvenioRDM Curation Workflow
                  </h2>
                  <p className="text-sm text-gray-600">
                    Learn the InvenioRDM curation workflow step by step - from
                    submission to review and publication
                  </p>
                </div>
              </div>
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                Interactive
              </span>
            </div>
          </div>

          <div className="p-6">
            <div
              style={{
                position: 'relative',
                boxSizing: 'content-box',
                maxHeight: '80vh',
                width: '100%',
                aspectRatio: '2.6928471248246844',
                padding: '40px 0 40px 0',
              }}>
              <iframe
                src="https://app.supademo.com/embed/cmff4ah1p03t80s0i1pys4rop?embed_v=2&utm_source=embed"
                loading="lazy"
                title="New Demo"
                allow="clipboard-write"
                frameBorder="0"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              This demo shows the InvenioRDM curation workflow using
              Invenio-Curations package for institutional review processes
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
          <div className="bg-gray-200 p-3 rounded-lg inline-block mb-4">
            <FontAwesomeIcon icon={faPlay} className="w-6 h-6 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            More Demos Coming Soon
          </h3>
          <p className="text-gray-600 mb-4">
            We&apos;re working on additional interactive demonstrations for
            other RDM tools and services.
          </p>
          <div className="text-sm text-gray-500">
            Planned demos: eLabFTW, CyVerse, DAMAP, and more
          </div>
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-r from-custom-blue to-custom-blue-dark rounded-lg p-8 text-white">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Need Help?</h3>
          <p className="text-lg mb-6 opacity-90">
            If you have questions about any of our tools or need personalized
            assistance, don&apos;t hesitate to reach out to our RDM team.
          </p>
          <a
            href="https://www.tugraz.at/sites/rdm/home"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-custom-blue-dark px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Contact RDM Team
          </a>
        </div>
      </div>
    </div>
  );
};

export default DemosPage;
