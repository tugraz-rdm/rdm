import React from 'react';

const LicensesForData = () => {
  return (
    <div className="mt-3 prose prose-sm prose-invert max-w-none">
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        Licenses for Data
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-900 text-thin">
        <li>
          <a
            href="https://creativecommons.org/publicdomain/zero/1.0/"
            className="text-gray-900 font-medium underline"
            target="_blank">
            CC0 (Creative Commons Zero){' '}
          </a>
        </li>
        <li>
          <a
            href="https://creativecommons.org/licenses/by/4.0/"
            className="text-gray-900 font-medium underline"
            target="_blank">
            CC BY (Attribution){' '}
          </a>
        </li>
        <li>
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/legalcode"
            className="text-gray-900 font-medium underline"
            target="_blank">
            CC BY-SA (Attribution-ShareAlike){' '}
          </a>
        </li>
        <li>
          <a
            href="https://creativecommons.org/licenses/by-nd/4.0/"
            className="text-gray-900 font-medium underline"
            target="_blank">
            CC BY-ND (Attribution-NoDerivatives){' '}
          </a>
        </li>
        <li>
          <a
            href="https://creativecommons.org/licenses/by-nc/4.0/"
            className="text-gray-900 font-medium underline"
            target="_blank">
            CC BY-NC (Attribution-NonCommerical){' '}
          </a>
        </li>
        <li>
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
            className="text-gray-900 font-medium underline"
            target="_blank">
            CC BY-NC-SA (Attribution-NonCommerical-ShareAlike){' '}
          </a>
        </li>
        <li>
          <a
            href="https://creativecommons.org/licenses/by-nd-nc/1.0/"
            className="text-gray-900 font-medium underline"
            target="_blank">
            CC BY-NC-ND (Attribution-NonCommercial-NoDerivatives){' '}
          </a>
        </li>
        <li>
          <a
            href="https://opendatacommons.org/licenses/pddl/1-0/"
            className="text-gray-900 font-medium underline"
            target="_blank">
            Open Data Commons Public Domain Dedication and License (PDDL) v1.0{' '}
          </a>
        </li>
        <li>
          <a
            href="https://opendatacommons.org/licenses/odbl/1-0/"
            className="text-gray-900 font-medium underline"
            target="_blank">
            Open Data Commons Open Database License (ODbL) v1.0{' '}
          </a>
        </li>
        <li>
          <a
            href="https://opendatacommons.org/licenses/by/1-0/"
            className="text-gray-900 font-medium underline"
            target="_blank">
            Open Data Commons Attribution License (ODC-By) v1.0{' '}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LicensesForData;
