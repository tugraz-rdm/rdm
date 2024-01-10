import { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <p className="text-gray-900 text-base font-thin p-0">
        When working with research data, or digital objects in general, several
        legal and ethical aspects have to be considered. Compliance with ethical
        and legal terms depends on the individual project and research topic.
      </p>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What do we offer?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-900 text-thin">
        <li>
          Data Stewards provide support on general legal and ethical
          considerations regarding your research data, including e.g. suitable
          licenses, or secure and effective handling of sensitive data.
        </li>
        <li>
          If necessary, questions will be forwarded to the appropriate contact
          persons at TU Graz for legal and ethical matters.
        </li>
      </ul>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What are the benefits?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-900 text-thin">
        <li>You receive support to an often difficult and unclear topic.</li>
        <li>
          In most cases, the topic is already discussed after a brief
          clarification and the roadmap is set.
        </li>
        <li>Proper planning avoids potential issues proactively.</li>
      </ul>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What does the process look like?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-900 text-thin">
        <li>
          Contact the RDM team or a Data Steward as soon as you need advice.
        </li>
        <li>
          You then make an appointment (online or F2F). Sometimes a mail is
          sufficient.
        </li>
        <li>
          A Data Steward and you go will discuss the situation and answers your
          questions.
        </li>
        <li>
          If necessary, you will be forwarded to other service departments, such
          as the Research & Technology House (F&T Haus), the Ethics Committee,
          IT services, or the Data Protection Office.
        </li>
      </ul>
    </div>
  );
};

export default Page;
