'use client';

import { FC } from 'react';

interface ExternalLinkGuideTemplateProps {
  source: {
    label: string;
    url: string;
  };
}

const ExternalLinkGuideTemplate: FC<ExternalLinkGuideTemplateProps> = ({
  source,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto border rounded-lg p-6 bg-custom-bone">
      <h2 className="text-2xl font-semibold text-gray-100">{source.label}</h2>
      <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block px-6 py-3 bg-custom-blue text-white rounded-lg hover:bg-custom-blue">
        Open {source.label}
      </a>
    </div>
  );
};

export default ExternalLinkGuideTemplate;
