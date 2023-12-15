import React from 'react';

const ContentSupport = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <p className="font-thin text-base text-gray-900">
        Research Data Management (RDM) pertains to all steps taken along the
        data lifecycle to ensure that research data can be found, are accessible
        to others (whether other researchers or other interested parties), and
        are described (e.g. through proper metadata) in such a way that they can
        be reused by others (FAIR Data - findable, accessible, interoperable,
        reusable). Thereby, the{' '}
        <a
          className="text-gray-900 underline"
          href="https://www.tugraz.at/fileadmin/user_upload/tugrazExternal/0c4b9c02-50a6-4a31-b5fd-24a0f93b69c5/General_RDM_Policy_TU_Graz.pdf">
          TU Graz framework policy
        </a>{' '}
        provides guidance to all University academics, staff and students on
        good research data management practices. Adherence to these guidelines
        enables transparency and reproducibility of research. TU Graz also
        provides RDM tools and infrastructure detailed in the list beneath.
      </p>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        The RDM Teamat Graz University of Technology supports all aspects of
        RDM, including how to:
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-900 text-thin">
        <li>Organise research data adequately </li>
        <li>Store and document data appropriately with metadata </li>
        <li>
          Use innovative tools for documentation of experimental parameters{' '}
        </li>
        <li>Provide easy access to research data </li>
        <li>Publish research data </li>
        <li>Comply to funder mandates </li>
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
        To implement data management in the project, a data management plan
        (DMP) is created in which all necessary processes and tasks are
        described. During this phase, it is determined which data is generated
        and how it is processed. The use of suitable tools must also be
        evaluated here. Training courses are held for project staff to ensure
        efficient data management in the project. Among other things, emphasis
        will be placed on ensuring that data leading to publication is available
        under the FAIR principles (findable, accessible, interoperable,
        reusable). Data management practices will be regularly reviewed and
        further developed with the help of the DMP during the entire project
        period.
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
          schemata …
        </li>
        <li>
          A strategy to ensure data quality will be developed and detailed in
          the DMP.
        </li>
        <li>
          Collaborative data management will be handled using GIT (institutional
          Gitlab or rather Github for finalization?) ensuring version control,
          and institutional Graz TU Cloud which is managed by central IT
          services with redundant back-up system. Other optional systems offered
          by TU Graz are CyVerse Austria for (secure) collaborative (meta)data
          management and data analysis, as well as ElabFTW for metadata and
          experiment management.
        </li>
        <li>
          Moreover, special attention will be given to collecting, processing,
          handling and storing sensitive data throughout the research process.
          This concerns both textual data and image and sound data. For personal
          data fully informed consent will be given for collecting, processing
          and storing data.
        </li>
        <li>
          Data management processes will also adhere to TU Graz guidelines on
          safeguarding the good scientific practice:{' '}
          <a
            className="font-thin text-gray-900"
            href="/Studierende_und_Bedienstete/Directives_and_regulations_of_TU_Graz/Safeguarding_Good_Scientific_Practice_Guidelines.pdf"
            target="_blank"
            rel="noopener noreferrer">
            Open Safeguarding Good Scientific Practice Guidelines
          </a>
        </li>
        <li>
          Next to discipline-specific repositories (examples to be added here)
          the institutional registered research repository of TU Graz will be
          used for (non-sensitive) data (and source code/software) publications
          based on FAIR principles.
        </li>
        <li>
          IPR rights and other legal aspects will be also handled and detailed
          in the consortium agreement. Some guidelines on the utilization of
          results in regard to intellectual property rights are described by TU
          Graz:{' '}
          <a
            className="font-thin text-gray-900"
            href="https://tu4u.tugraz.at/fileadmin/user_upload/redaktion/Richtlinien/Verwertung_Ergebnisse_Forschung_und_Entwicklung_RL.pdf"
            target="_blank"
            rel="noopener noreferrer">
            Open Research and Development Results Utilization Guidelines
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContentSupport;
