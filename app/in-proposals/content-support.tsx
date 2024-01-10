import React from 'react';

const ContentSupport = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <p className="font-thin text-base text-gray-900">
        RDM pertains to all steps along the data lifecycle to ensure that
        research data can be found, is accessible to others (whether other
        researchers or other interested parties), and is described (e.g. through
        proper metadata) in such a way that they can be reused by others (FAIR
        Data). Thereby, the{' '}
        <a
          className="text-gray-900 underline"
          href="https://www.tugraz.at/fileadmin/user_upload/tugrazExternal/0c4b9c02-50a6-4a31-b5fd-24a0f93b69c5/General_RDM_Policy_TU_Graz.pdf">
          TU Graz framework policy
        </a>{' '}
        provides guidance to all University academics, staff and students on
        good RDM practices. Adherence to these guidelines contributes to the
        transparency and reproducibility of research. TU Graz also provides RDM
        tools and infrastructure detailed in the list below
      </p>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        The RDM Team at Graz University of Technology supports all aspects of
        RDM, including how to:
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-900 text-thin">
        <li>organize research data adequately </li>
        <li>store and document data appropriately with metadata </li>
        <li>
          use innovative tools for documentation of experimental parameters{' '}
        </li>
        <li>provide easy access to research data </li>
        <li>publish research data </li>
        <li>comply to funder mandates </li>
      </ul>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        Tools available at Graz University of Technology for RDM tasks:
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-900 text-thin">
        <li>
          TU Graz Repository (based on InvenioRDM): Repository for long-term
          storage of reusable and citable data{' '}
        </li>
        <li>
          TU Graz DMP Tool (based on DAMAP): Tool to create data management
          plans{' '}
        </li>
        <li>
          CyVerse Austria: Collaborative platform for RDM and data analysis
        </li>
        <li>
          Electronic Lab Notebook (eLabFTW): Digital documentation and
          laboratory management{' '}
        </li>
      </ul>
      <p className="font-thin text-base text-gray-900">
        To implement data management in a project, a DMP is created in which all
        necessary data-related processes and tasks are described. During this
        phase, it is determined which data is generated and how it is processed.
        The use of suitable tools must also be addressed here. The RDM Team
        organises training courses for project staff to ensure efficient data
        management in the project, emphasising on how to ensure that data
        leading to a publication is available under the FAIR principles. Data
        management practices will be regularly reviewed and further developed
        with the help of the DMP during the entire project period.
      </p>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        Some key points that shall be elaborated in the DMP and can be noted in
        the planning phase:
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-900 text-thin">
        <li>
          A responsible person for data management in the project consortium
          will be selected and will be supported by the institutional data
          stewardship team.
        </li>
        <li>
          There will be different types of data generated and/or collected
          and/or stored and/or processed … using discipline or generic metadata
          schemas …
        </li>
        <li>
          A strategy to ensure data quality will be developed and detailed.
        </li>
        <li>
          Collaborative data management will be handled using GIT (institutional
          Gitlab or rather Github for finalization?) to ensure version control,
          and the institutional Graz TU Cloud, which is managed by the
          university’s central IT services (ZID) with redundant back-up system.
          Other optional systems offered by TU Graz are CyVerse Austria for
          (secure) collaborative (meta)data management and data analysis, as
          well as eLabFTW for metadata and experiment management.
        </li>
        <li>
          Special attention will be given to collecting, processing, handling
          and storing sensitive data throughout the research process. This
          concerns both textual data and image and sound data. For personal data
          fully informed consent will be given for collecting, processing and
          storing data.
        </li>
        <li>
          Data management processes will also adhere to TU Graz guidelines on
          safeguarding{' '}
          <a
            className="font-thin text-gray-900"
            href="/Studierende_und_Bedienstete/Directives_and_regulations_of_TU_Graz/Safeguarding_Good_Scientific_Practice_Guidelines.pdf"
            target="_blank"
            rel="noopener noreferrer">
            good scientific practices
          </a>
        </li>
        <li>
          Besides discipline-specific repositories (examples to be added here),
          the institutional registered research repository of TU Graz will be
          used for (non-sensitive) data (and source code/software) publications
          based on FAIR principles.
        </li>
        <li>
          IPR rights and other legal aspects must be handled and detailed in the
          consortium agreement. Some guidelines on the utilization of results in
          regard to intellectual property rights are described in a{' '}
          <a
            className="font-thin text-gray-900"
            href="https://tu4u.tugraz.at/fileadmin/user_upload/redaktion/Richtlinien/Verwertung_Ergebnisse_Forschung_und_Entwicklung_RL.pdf"
            target="_blank"
            rel="noopener noreferrer">
            document by TU Graz’ F&T Haus
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContentSupport;
