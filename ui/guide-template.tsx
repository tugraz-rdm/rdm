import React, { useState } from 'react';

interface PdfSources {
  [key: string]: string;
}

interface GuideTemplateProps {
  pdfSources: PdfSources;
}

const GuideTemplate: React.FC<GuideTemplateProps> = ({ pdfSources }) => {
  const [activeTab, setActiveTab] = useState('english');
  const renderContent = () => {
    const pdfSource = pdfSources[activeTab];
    if (!pdfSource) {
      return null; 
    }

    return (
      <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2"></h3>
        <iframe
          src={pdfSources[activeTab]}
          style={{
            width: '100vh',
            height: '50vh',
            border: 'none',
          }}></iframe>
      </div>
    );
  };

  return (
    <div className="md:flex">
      <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
        <li>
          <a
            href="#"
            onClick={() => setActiveTab('english')}
            className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
              activeTab === 'english'
                ? 'text-white bg-custom-blue dark:bg-custom-blue'
                : 'hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'
            }`}
            aria-current="page">
            <svg
              className="w-4 h-4 me-2 text-white-smoke dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 20">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            English
          </a>
        </li>
      </ul>
      {renderContent()}
    </div>
  );
};

export default GuideTemplate;
