import React from 'react';

const LicensesForPersonal = () => {
  return (
    <div className="mt-3 prose prose-sm prose-invert max-w-none">
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        Licenses for personal or other confidential data
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
        <li>
          <a
            href="https://library.unimelb.edu.au/Digital-Scholarship/restrictive-licence-template"
            className="text-gray-700 font-medium underline"
            target="_blank">
            RLT (Restrictive License Template){' '}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LicensesForPersonal;
