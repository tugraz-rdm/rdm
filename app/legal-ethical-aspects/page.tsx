import { ExternalLink } from '#/ui/external-link';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <div className="prose prose-sm prose-invert max-w-none">
      <ul className="text-gray-700 font-thin p-0">
        <h1 className="text-xl font-thin text-gray-700">
          RDM Legal & Ethical Aspects
        </h1>
        Providing comprehensive guidance on navigating the complex landscape of
        legal and ethical considerations in research data management, our
        resources are designed to help researchers and institutions understand
        their obligations and best practices in this critical area. This
        includes in-depth information on compliance with data protection laws
        such as the General Data Protection Regulation (GDPR), which governs the
        handling of personal data within and outside the EU. We address the
        importance of obtaining consent from research participants, ensuring
        data confidentiality, and the secure storage and transfer of sensitive
        information.
      </ul>
      <div className="flex gap-2 ">
        <ExternalLink href="#">
          Learn More about RDM Legal & Ethical Aspects
        </ExternalLink>
      </div>
    </div>
  );
};

export default Page;
