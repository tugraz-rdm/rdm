import React from 'react';

export type Documents = {
  name: string;
  type: 'download' | 'link';
  url: string;
};

interface RdmDocumentSectionProps {
  isOpen: boolean;
  documents: Documents[]; 
}

const RdmDocumentSection: React.FC<RdmDocumentSectionProps> = ({ isOpen, documents }) => {
  const handleDownload = (url: string) => {
    window.location.href = url; 
  };

  return (
    <>
      {isOpen && (
        <div style={{ marginLeft: '17px' }}>
          {documents.map((document, docIndex) => (
            <div key={docIndex}>
              {document.type === 'download' ? (
                <button
                  type="button"
                  className="hover:bg-white-smoke group flex w-full items-center rounded-lg p-2 text-base hover:text-gray-700 text-white-smoke transition duration-75 dark:text-white-smoke dark:hover:bg-white-smoke"
                  onClick={() => handleDownload(document.url)}
                >
                  <span className="flex-1 whitespace-nowrap text-left font-thin">{document.name}</span>
                </button>
              ) : (
                <a
                  href={document.url}
                  className="hover:bg-white-smoke group flex w-full items-center rounded-lg p-2 text-base hover:text-gray-700 text-white-smoke transition duration-75 dark:text-white-smoke dark:hover:bg-white-smoke"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex-1 whitespace-nowrap text-left font-thin">{document.name}</span>
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default RdmDocumentSection;
