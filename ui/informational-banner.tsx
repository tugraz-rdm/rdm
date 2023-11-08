import React, { FC, useState } from 'react';

const InformationalBanner: FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      id="informational-banner"
      tabIndex={-1}
      className="fixed bottom-0 left-0 z-50 flex flex-col justify-between w-full p-4 border-b border-gray-200 md:flex-row bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
      <div className="mb-4 md:mb-0 md:mr-4">
        <p className="flex items-center text-sm font-thin text-gray-500 dark:text-gray-400">
          The RDM website promotes awareness of RDM issues among TU Graz
          researchers. RDM encompasses steps ensuring data can be found,
          accessed, and reused with proper description. <br />
          This site offers RDM tools, services and materials from the RDM Team
          at TU Graz.
        </p>
      </div>
      <div className="flex items-center flex-shrink-0">
        <a
          href="https://www.tugraz.at/sites/rdm/home"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-3 py-2 mr-3 text-xs font-medium text-white bg-gray-700 border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-custom-blue focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          Learn more
          <svg
            className="w-3 h-3 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
        <button
          data-dismiss-target="#informational-banner"
          type="button"
          onClick={handleDismiss}
          className="flex-shrink-0 inline-flex justify-center w-7 h-7 items-center text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white">
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close banner</span>
        </button>
      </div>
    </div>
  );
};

export default InformationalBanner;
