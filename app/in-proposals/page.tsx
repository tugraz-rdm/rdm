import { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <p className="text-gray-900 text-base font-thin p-0">
        The importance of research data management (RDM) is increasingly
        recognized in scientific funding. Many funders now require research
        projects to submit as part of the proposal a statement about how data
        from research activities will be managed, and include where appropriate
        details about current practices at the university or research
        organisation. The RDM Team can help you to address this important topic
        in your grant proposal.
      </p>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What do we offer?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-900 text-thin">
        <li>
          Consultancy on all aspects of RDM: We provide individual consultancy
          to understand your needs and goals for RDM. Together, we can create a
          customized description of your RDM activities in the project.
        </li>
        <li>
          Templates and checklists: We will offer you templates and checklists
          for further developing and refining RDM activities.{' '}
        </li>
        <li>
          Training and workshops: We offer training and workshops on various RDM
          topics and tools.{' '}
        </li>
      </ul>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What are the benefits?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-900 text-thin">
        <li>
          You increase your chances of funding: Funders view the consideration
          of RDM as an important quality criterion for evaluating research
          proposals.
        </li>
        <li>
          You improve the quality of your research: A well-thought RDM strategy
          can help ensure that your research data are FAIR, i.e. Findable,
          Accessible, Interoperable, and Reusable.
        </li>
        <li>
          You save time and resources: Consultancy can help you to avoid errors
          in RDM and thus save time and resources.
        </li>
      </ul>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What does the process look like?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-900 text-thin">
        <li>
          Contact the RDM Team or a Data Steward as soon as you plan to start
          writing the proposal.
        </li>
        <li>Make an appointment (online or F2F).</li>
        <li>
          Data Stewards will discuss the specifics of the project, including
          which points could be particularly important in relation to RDM and
          should be included in the proposal. Resources available at TU Graz
          will also be discussed.
        </li>
        <li>
          A preliminary discussion on RDM strategies serves as the basis for the
          Data Management Plan (DMP) as soon as the project is approved.
        </li>
      </ul>
    </div>
  );
};

export default Page;
