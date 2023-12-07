import React from 'react';

const LicensesForPersonal = () => {
  return (
    <>
      <div className="mt-5 mb-3 text-lg font-medium text-gray-400 uppercase">
        <h1>Licenses for personal or other confidential data</h1>
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
        <li>
          RLT (Restrictive License Template):{' '}
          <a
            href="https://library.unimelb.edu.au/Digital-Scholarship/restrictive-licence-template"
            className="text-gray-700 font-medium underline"
            target="_blank">
            Full license
          </a>
        </li>
      </ul>
    </>
  );
};

export default LicensesForPersonal;
