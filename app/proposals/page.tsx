import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <ul className="text-gray-700 font-thin p-0">
        <h1 className="text-xl font-thin text-gray-700">
          Proposal RDM at TU Graz
        </h1>
        Efficient and responsible data handling is pivotal to the success of
        research projects. As part of TU Graz's commitment to advancing research
        integrity and effectiveness, we advocate for the incorporation of
        Research Data Management best practices within project proposals.
        Crafting a research proposal is more than just outlining research
        objectives. It's about building a clear strategy that encompasses data
        acquisition, storage, sharing, and preservation. At TU Graz, we provide
        dedicated support to researchers to integrate these best practices
        seamlessly into their proposals, ensuring they meet institutional and
        funder requirements from the outset. Whether you are in the early stages
        of drafting a proposal or looking for ways to refine and enhance your
        data management strategy within an existing proposal, our Proposal RDM
        team is here to assist. With their expertise, you'll be positioned to
        not only meet but exceed the expectations of today's data-centric
        research landscape. For in-depth guidance on embedding Research Data
        Management into your proposal strategies, please reach out. We are
        dedicated to ensuring that research at TU Graz is both groundbreaking
        and grounded in the best data practices.
      </ul>

      <div className="flex gap-2 ">
        <ExternalLink href="https://dmp.tugraz.at/">
          Learn More about Proposal RDM at TU Graz
        </ExternalLink>
      </div>
    </div>
  );
};

export default Page;