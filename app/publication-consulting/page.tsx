import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <ul className="text-gray-700 font-thin p-0">
        <h1 className="text-xl font-thin text-gray-700">
          DMP Publication Consulting at TU Graz
        </h1>
        Research data management is a cornerstone of effective research
        practices. At TU Graz, we recognize the challenges researchers often
        face when developing and executing data management strategies. Our DMP
        Consulting service offers tailored guidance, ensuring your research data
        is managed efficiently and in compliance with institutional and funding
        requirements. Whether you're initiating a new project, or looking to
        optimize data management for ongoing research, our consultants are here
        to assist. We provide advice on best practices, strategies for data
        storage, sharing, and preservation, as well as insights into the latest
        tools and technologies that can streamline your data management
        processes. As data plays an increasingly pivotal role in research
        outcomes, having a comprehensive data management plan is essential. Our
        DMP Consulting service ensures you're well-equipped to handle the
        complexities of today's data-centric research environment. If you have
        questions or require guidance on any aspect of research data management,
        do not hesitate to reach out. We're here to support and facilitate your
        research endeavors at TU Graz.
      </ul>

      <div className="flex gap-2 ">
        <ExternalLink href="https://dmp.tugraz.at/">
          Learn More about DMP Publication Consulting at TU Graz
        </ExternalLink>
      </div>
    </div>
  );
};

export default Page;
