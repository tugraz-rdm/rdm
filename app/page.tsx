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
          <blockquote className="text-xl font-semibold text-gray-900 dark:text-white">
            <p className="font-thin text-2xl  text-custom-blue-dark">
              Research data management (RDM) <span className='font-medium'>ensures integrity, increases your
              research impact, and preserves time</span> that is otherwise lost in
              searching for or understanding of data. 
            </p>
            <p className="font-thin text-1xl italic text-custom-blue-dark mt-3">
            The RDM Team at TU Graz
              offers the following tools and services (along the three phases of
              research):
            </p>
          </blockquote>
        </div>
        {servicesData.map((section, index) => {
          let descriptionIntro = '';
          if (index === 0) {
            descriptionIntro =
              'During the planning phase researchers can use the TU Graz DMP tool to create data management plans (DMP) for future and ongoing projects. Data Stewards will individually help with DMPs through consultations, and moreover support also project consortia in optimizing planned RDM processes.';
          } else if (index === 1) {
            descriptionIntro =
              'During the active state of research, you have access to and can make use of the institutional electronic laboratory notebook eLabFTW, and the (meta)data management as well as analysis platform CyVerse Austria. Moreover, the RDM team will support individual researchers and research groups in optimizing their current RDM processes.              ';
          } else if (index === 2) {
            descriptionIntro =
              'During the state of research complete, you can publish research results using the TU Graz Repository, while the RDM team will consult you in regard to data publications. You can also find guidance on legal and ethical aspects of handling and publishing research data.';
          }
          return (
            <>
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
                <p className="font-thin italic text-custom-blue-dark mt-3">
                  {descriptionIntro}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Page;
