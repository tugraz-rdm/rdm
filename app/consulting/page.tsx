import { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What is a DMP?
      </div>
      <p className="text-gray-900 text-base font-thin p-0">
        Imagine you are working on a new research project. You are faced with a
        lot of data that you need to collect, store, organize, and manage. You
        know all these tasks ares important, but you are not sure how to get
        started with them. This is where a Data Management Plan (DMP) comes in.
        A DMP is a document that describes how you will handle your research
        data. It is an important part of your research project because it helps
        you to organize, secure, and make your data accessible.
      </p>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        A DMP typically includes the following sections:
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
        <li>
          Introduction: Here you explain what your research project is about,
          and what data you will collect.{' '}
        </li>
        <li>
          Data definitions: In this section, you define the data you will
          collect. You should describe the data types, formats, and sources of
          the data.{' '}
        </li>
        <li>
          Data collection and access: Describe how you will collect your data
          and how you will enable others to access it.{' '}
        </li>
        <li>
          Data storage and preservation: Describe how you will store your data
          and how you will protect it from loss or damage.{' '}
        </li>
        <li>
          Data quality and accessibility: Describe how you will ensure the
          quality of your data and how you will make it accessible to others.{' '}
        </li>
      </ul>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What do we offer?
      </div>
      <p className="text-gray-900 text-base font-thin p-0">
        The RDM Team, especially the Data Stewards, will support you in creating
        a DMP. Whether you need to provide this for the funding body or simply
        want to have a professional DMP for your research project, the Data
        Stewards can give you comprehensive advice, review your DMP and provide
        feedback before finalization.
      </p>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What are the benefits?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
        <li>Fulfil all requirements of funding bodies with regard to DMPs</li>
        <li>DMPs are part of good scientific practice</li>
        <li>
          Each research project, including master&apos;s and dissertation projects,
          should have its own DMPs{' '}
        </li>
        <li>
          You can identify potential bottlenecks in the project at an early
          stage: e.g. storage, licenses, agreements, backups{' '}
        </li>
        <li>Organize and manage your data </li>
        <li>Improve the reproducibility of your research </li>
      </ul>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What does the process look like?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
        <li>
          Contact the RDM Team or a Data Steward when a DMP needs to be created.
        </li>
        <li>
          Make an appointment (online or f2f) if desired, and determine what is
          to be discussed.
        </li>
        <li>
          Together with a Data Steward, go through all the relevant steps. Be
          sure to ask the Data Steward all questions you may have!
        </li>
        <li>
          Send your draft DMP to the Data steward and wait for her feedback.
          Where appropriate, discuss any changes on your draft.{' '}
        </li>
      </ul>
    </div>
  );
};

export default Page;
