import { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-thin text-gray-700">
        Data Publication Consulting
      </h1>
      <p className="text-gray-900 text-base font-thin p-0">
        All non-sensitive research results which lead to a publication shall be
        made available for the scientific community in terms of transparency and
        reproducibility. Therefore, all forms of digital objects, such as
        research data, metadata, or source code, can be assigned a persistent
        identifier through entries on repositories. TU Graz offers the
        institutional repository for publishing research results. Additional
        topic- or discipline-specific data repositories can be found via the
        registry of research data repositories. Licenses have to be attached to
        all research results before publication, some examples are given for the
        various digital objects under the subsection Licenses.
      </p>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What do we offer?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
        <li>
          The RDM Team provides consultation on publication of digital objects
          based on criteria for current data science needs.
        </li>
        <li>
          Support to finding a suitable repository for publication and
          formulating meta data for describing the data in a proper way.
        </li>
        <li>
          Next to individual consultation the RDM Team offers courses, available
          in the In-House Training programme, on repositories and data
          publication and meta data.
        </li>
        <li>
          The library and the RDM team also offers a lecture called „Finding
          Scientific Information and Publishing Your Research Results“, with the
          focus on Finding and Publishing results.
        </li>
      </ul>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What are the benefits?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
        <li>
          Increased visibility of your research will result from the FAIR
          guiding principles for scientific data management (to make digital
          objects findable, accessible, interoperable, and reusable).
        </li>
        <li>
          Making data available and repurposable by a wider research community
          promotes the scientific process of knowledge discovery,
        </li>
        <li>and increases citability,</li>
        <li>and enables new collaboration possibilites.</li>
      </ul>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What does the process look like?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
        <li>
          Contact the RDM Team or a Data Steward by sending a question via mail
          or asking for an online or face-to-face meeting.
        </li>
        <li>
          During an appointment Data Stewards will discuss relevant options,
          possibilities or issues with you.
        </li>
        <li>and increases citability,</li>
        <li>
          If necessary, questions will be forwarded to other publication experts
          at the library.
        </li>
      </ul>
    </div>
  );
};

export default Page;
