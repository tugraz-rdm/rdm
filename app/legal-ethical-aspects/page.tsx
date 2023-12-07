import { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <p className="text-gray-900 text-base font-thin p-0">
        If you work with research data or digital objects of any kind, sooner or
        later the moment will come when you have to deal with the legal and
        ethical aspects of your data. The extent to which this is necessary and
        which steps need to be taken depends on the project itself.
      </p>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What do we offer?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-900 text-thin">
        <li>
          The data stewards serve as the first point of contact when it comes to
          legal questions about your research data (e.g. licenses or copyright
          agreement).
        </li>
        <li>If necessary, you will be referred to the right department.</li>
      </ul>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What are the benefits?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-900 text-thin">
        <li>
         You receive support with an often difficult and unclear topic.
        </li>
        <li>In most cases, the topic is already discussed after a brief clarification and the roadmap is set.</li>
        <li>If you contact us early, problems in this area can be proactively prevented.</li>
      </ul>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
       What does the process look like?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-900 text-thin">
        <li>Contact the RDM team or a data steward as soon as you need advice.</li>
        <li>You then make an appointment (online or F2F). Sometimes a mail is sufficent.</li>
        <li>A data steward and you go will discuss the situation and  answers your questions.</li>
        <li>If necessary, you will be forwarded to other areas of TU Graz, such as the Data Protection Officer, R&T House or the Ethics Advisory Board.</li>
      </ul>
    </div>
  );
};

export default Page;
