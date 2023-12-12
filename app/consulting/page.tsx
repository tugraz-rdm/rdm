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
        know this is important, but you are not sure how to get started.This is
        where a data management plan (DMP) comes in. A DMP is a document that
        describes how you will handle your research data. It is an important
        part of your research project because it helps you to organize, secure,
        and make your data accessible.
      </p>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        A DMP typically includes the following sections:
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
        <li>
          Introduction: In this section, you explain what your research project
          is and what data you will collect{' '}
        </li>
        <li>
          Data definitions: In this section, you define the data you will
          collect. You should describe the data types, formats, and sources of
          the data.{' '}
        </li>
        <li>
          Data collection and access: In this section, you describe how you will
          collect your data and how you will enable others to access your data.{' '}
        </li>
        <li>
          Data storage and preservation: In this section, you describe how you
          will store your data and how you will protect it from loss or damage.{' '}
        </li>
        <li>
          Data quality and accessibility: In this section, you describe how you
          will ensure the quality of your data and how you will make it
          accessible to others.{' '}
        </li>
      </ul>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What do we offer?
      </div>
      <p className="text-gray-900 text-base font-thin p-0">
        The RDM team, especially the data stewards, will support you in creating
        a data management plan. Whether you need to provide this for the funding
        body or simply want to have a professional DMP for your research
        project, the data stewards can give you comprehensive advice and review
        your DMP and provide feedback before finalization.
      </p>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What are the benefits?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-700 text-thin">
        <li>Fulfill all requirements of funding bodies with regard to DMPs</li>
        <li>DMPs are part of good scientific practice</li>
        <li>
          Each research project, including master's and dissertation projects,
          should have its own DMPs
        </li>
        <li>
          You can identify potential bottlenecks in the project at an early
          stage: e.g. storage, licenses, agreements, backups
        </li>
        <li>Organize and manage your data </li>
        <li>Improve the reproducibility of your research </li>
      </ul>
    </div>
  );
};

export default Page;
