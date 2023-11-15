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
        <div className="ml-auto w-1/3">{/* <SearchForm /> */}</div>
        {servicesData.map(section => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div
              className={`border-1 rounded-lg border border-gray-200 p-6 group-hover:opacity-10`}
              key={section.name}>
              <div key={section.name} className="space-y-3">
                <button
                  type="button"
                  className="bg-white-smoke font-regular mb-2  mr-2 rounded-lg px-5 py-2.5 text-sm text-gray-700 focus:outline-none">
                  {section.name}
                </button>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                  {section.items.map(item => {
                    return (
                      <div
                        key={item.name}
                        className="hover:border-1 group relative transform cursor-pointer overflow-hidden rounded-lg border shadow-md transition-transform duration-300 hover:scale-105">
                        <div className="bg-white-smoke absolute bottom-0 left-0 right-0 top-0 z-10 flex items-center justify-center p-4 transition-opacity duration-300 group-hover:opacity-0">
                          <div className="flex items-center gap-3 rounded px-6 py-3.5 text-center">
                            <div className="flex flex-col flex-wrap">
                              <span className="font-regular text-2xl text-gray-800 focus:ring-4">
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
          );
        })}
      </div>
    </>
  );
};

export default Page;
