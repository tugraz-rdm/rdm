import { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <p className="text-gray-900 text-base font-thin p-0">
        The importance of research data management (RDM) is increasingly
        recognized in scientific funding. Many funders now require research
        projects to submit a statement about RDM in their projects and/or how it
        is handled at their university.We want to help you to address this
        important topic in your grant proposal.
      </p>
      <div
        className="p-4 text-thin text-gray-700 rounded-lg bg-custom-isabelline dark:bg-custom-isabelline dark:text-gray-300 uppercase"
        role="alert">
        What do we offer?
      </div>
      <ul className="space-y-1 list-disc list-inside font-thin text-gray-900 text-thin">
        <li>
          Consultation on all aspects of RDM: We will consult with you
          individually to understand your needs and goals for RDM. Together, we
          can create a customized description of your RDM activities in the
          project.
        </li>
        <li>
          Templates and checklists: We will provide you with templates and
          checklists for developing your RDM activities.{' '}
        </li>
        <li>
          Training and workshops: We offer training and workshops on RDM.{' '}
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
          of RDM as an important quality criterion for research projects.
        </li>
        <li>
          You improve the quality of your research: A well-thought-out RDM can
          help to ensure that your research data are FAIR, i.e., Findable,
          Accessible, Interoperable, and Reusable.
        </li>
        <li>
          You save time and resources: Consultation can help you to avoid errors
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
          Contact the RDM team or a data steward as soon as you want to start
          writing the proposal.
        </li>
        <li>You then make an appointment (online or F2F).</li>
        <li>
          A data steward and you discuss the specifics of the project and which
          points could be particularly important in relation to RDM and should
          be included in the proposal. Available resources at TU Graz are also
          discussed.
        </li>
        <li>
          Also serves as the basis for the data management plan if the project
          is approved.
        </li>
      </ul>
    </div>
  );
};

export default Page;
