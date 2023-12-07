import React from 'react';

const LicensesForSoftware = () => {
  return (
    <>
      <div className="mt-5 mb-3 text-lg font-medium text-gray-300 uppercase">
        <h1>Licenses for Software and Code</h1>
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
        <li>
          MIT License:{' '}
          <a
            href="https://opensource.org/license/mit/"
            className="text-gray-700 font-medium underline"
            target="_blank">
            Full license
          </a>
        </li>
        <li>
          Apache License:{' '}
          <a
            href="https://www.apache.org/licenses/LICENSE-2.0"
            className="text-gray-700 font-medium underline"
            target="_blank">
            Full license
          </a>
        </li>
        <li>
          GNU General Public License 3:{' '}
          <a
            href="https://www.gnu.org/licenses/gpl-3.0"
            className="text-gray-700 font-medium underline"
            target="_blank">
            Full license
          </a>
        </li>
        <li>
          3-Clause BSD License:{' '}
          <a
            href="https://opensource.org/license/bsd-3-clause/"
            className="text-gray-700 font-medium underline"
            target="_blank">
            Full license
          </a>
        </li>
        <li>
          European Union Public License:{' '}
          <a
            href="https://opensource.org/license/eupl-1-2/"
            className="text-gray-700 font-medium underline"
            target="_blank">
            Full license
          </a>
        </li>
      </ul>
    </>
  );
};

export default LicensesForSoftware;
