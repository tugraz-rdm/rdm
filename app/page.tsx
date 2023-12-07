'use client';

import { FC, useEffect, useState } from 'react';

import HoverableButtons from '#/ui/hoverable-buttons';
import { useCombinedData } from '#/lib/services';

const Page: FC = () => {
  const { servicesData } = useCombinedData();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // loading state in the future
  }

  return (
    <>
      <div className="container mx-auto space-y-10  text-white">
        <div className="ml-auto w-3/3">
          <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
            {/* <svg
              className="w-8 h-8 text-custom-blue-dark dark:text-gray-600 mb-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 18 14">
              <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
            </svg> */}
            <p className="font-thin text-xl text-custom-blue-dark">
              Research data management (RDM) processes can be subdivided in
              three phases of: <p className="font-medium">PLANNING</p>{' '}
              <p className="font-medium">ACTIVE STATE OF RESEARCH and</p>
              <p className="font-medium">RESEARCH COMPLETE </p>
            </p>
            <br />
            <p className="font-thin italic  text-custom-blue-dark">
                Along theses phases, the RDM-team offers several tools and
                services:
              </p>
          </blockquote>
        </div>
        {servicesData.map((section, index) => {
          let descriptionIntro = '';
          if (index === 0) {
            descriptionIntro =
              ' During the planning phase researchers can use the TU Graz DMP tool to create data management plans (DMP) for future and ongoing projects. Data stewards will individually help with DMPs through consultations, and moreover support also project consortia in optimizing planned RDM processes.';
          } else if (index === 1) {
            descriptionIntro =
              'During the active state of research, you have access to and can make use of the institutional electronic laboratory notebook eLabFTW, and the (meta)data management as well as analysis platform CyVerse Austria. Moreover, the RDM team will support individual researchers and research groups in optimizing their current RDM processes.';
          } else if (index === 2) {
            descriptionIntro =
              'During the state of research complete, you can publish research results using the TU Graz Repository, while the RDM-team will consult you in regard to data publications. You can also find guidance on legal and ethical aspects of handling and publishing research data.';
          }

          return (
            <>
     
              <p className="font-thin italic text-custom-blue-dark">
                {descriptionIntro}
              </p>
              <div
                className={`border-1 rounded-lg border border-custom-bone p-6 group-hover:opacity-10`}
                key={section.name}>
                <div key={section.name} className="space-y-3">
                  <button
                    type="button"
                    className="bg-white-smoke font-regular mb-2  mr-2 rounded-lg px-5 py-2.5 text-sm text-gray-700 focus:outline-none">
                    <img
                      src={`/icons/${section.name}.png`}
                      alt={`${section.name} icon`}
                      className={`inline-block mr-2 h-10 ${
                        section.name === 'PLANNING' ? 'w-8' : 'w-10'
                      }`}
                    />
                    {section.name}
                  </button>
                  <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {section.items.map(item => {
                      return (
                        <div
                          key={item.name}
                          className="hover:border-1  group relative transform cursor-pointer overflow-hidden rounded-lg border shadow-md transition-transform duration-300 hover:scale-105">
                          <div className="bg-white-smoke absolute bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center p-4 transition-opacity duration-300 group-hover:opacity-0">
                            <div className="flex items-center gap-3 rounded px-6 py-3.5 text-center">
                              <div className="flex flex-col flex-wrap">
                                <span className="font-regular text-2xl text-custom-blue-dark focus:ring-4">
                                  {item.name}
                                </span>
                                <p className="mt-2 text-sm font-thin text-black focus:ring-4">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </div>
                          <HoverableButtons item={item} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Page;
