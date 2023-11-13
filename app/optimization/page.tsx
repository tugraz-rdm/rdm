import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <ul className="text-gray-700 font-thin p-0">
        <h1 className="text-xl font-thin text-gray-700">
          Optimization RDM at TU Graz
        </h1>
        Research Data Management (RDM) optimization is the enhancement and
        refinement of methods and strategies used to handle research data
        throughout its lifecycle. It encompasses the design and implementation
        of advanced workflows and pipelines tailored to support the intricate
        processes of collecting, processing, analyzing, and storing research
        data. The focus is on developing robust infrastructures that facilitate
        data accessibility, integrity, and preservation, ensuring compliance
        with evolving standards and regulatory requirements. RDM optimization
        also involves the integration of tools for metadata generation, data
        tracking, and quality control, which streamline collaboration and data
        sharing among researchers. By addressing the challenges of data volume,
        variety, and velocity, RDM optimization solutions support scalable and
        sustainable research practices. These solutions aim to improve the
        reproducibility of research outcomes and maximize the impact and utility
        of research data.
      </ul>

      <div className="flex gap-2 ">
        <ExternalLink href="#">
          Learn More about Optimization RDM at TU Graz
        </ExternalLink>
      </div>
    </div>
  );
};

export default Page;
