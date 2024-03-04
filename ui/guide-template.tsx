'use client'
import React, { useState } from 'react';

interface PdfSources {
  [key: string]: {
    url: string;
    label: string;
  };
}

interface GuideTemplateProps {
  pdfSources: PdfSources;
}

const GuideTemplate: React.FC<GuideTemplateProps> = ({ pdfSources }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(pdfSources)[0]);

  const renderContent = () => {
    const pdfSource = pdfSources[activeTab]?.url;
    if (!pdfSource) {
      return null;
    }

    return (
      <div className="p-6 bg-gray-50 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2"></h3>
        <iframe
          src={pdfSource}
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
        {Object.keys(pdfSources).map(key => (
          <li key={key}>
            <a
              href="#"
              onClick={() => setActiveTab(key)}
              className={`inline-flex items-center px-4 py-3 rounded-lg w-full ${
                activeTab === key
                  ? 'text-white bg-custom-blue dark:bg-custom-blue'
                  : 'hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white'
              }`}
              aria-current="page">
              {pdfSources[key].label}
            </a>
          </li>
        ))}
      </ul>
      {renderContent()}
    </div>
  );
};

export default GuideTemplate;
