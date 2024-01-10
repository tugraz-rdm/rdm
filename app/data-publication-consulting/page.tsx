import { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <h1 className="text-xl font-thin text-gray-700">
        Data Publication Consulting
      </h1>
      <p className="text-gray-900 text-base font-thin p-0">
        All non-sensitive research results which lead to a publication shall be
        made available for the scientific community for transparency and
        reproducibility. Therefore, all forms of digital objects, such as
        research data, metadata, or source code, should be assigned a persistent
        identifier by uploading them to a repository. TU Graz offers the
        institutional repository to publish research results obtained by its
        staff members. Additional topic- or discipline-specific repositories can
        be found via the registry of research data repositories. In order to
        specify what can and cannot be done with the data, all research results
        are required to have a license attached to them before publication.
        Examples for various digital objects can be found under the subsection
        Licenses.
      </p>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What do we offer?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
        <li>
          Consultancy on publication of digital objects based on known
          discipline-specific criteria for research data
        </li>
        <li>Support to find a suitable repository for publication</li>
        <li>Formulation of meta data to describe the data adequately</li>
        <li>
          Besides individual consultation, the RDM Team offers courses on
          repositories, data publication and meta data, available in the
          In-House Training programme
        </li>
        <li>
          The library and the RDM Team also offers a lecture called „Finding
          Scientific Information and Publishing Your Research Results“
        </li>
      </ul>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What are the benefits?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
        <li>
          Making your data compliant with the FAIR guiding principles for
          scientific data management (to make digital objects findable,
          accessible, interoperable, and reusable) will increase the visibility
          of your research.
        </li>
        <li>
          Making data available and reusable (also for different purposes) by a
          wider research community promotes the scientific process of knowledge
          discovery, and increases citability,
        </li>
        <li>and enables new collaboration possibilities.</li>
      </ul>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What does the process look like?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
        <li>
          Contact the RDM Team or a data steward by sending a question via mail
          or asking for an online or face-to-face meeting.
        </li>
        <li>
          During an appointment, data stewards will discuss with you suitable
          options to have your data published.
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
