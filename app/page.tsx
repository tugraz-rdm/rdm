'use client';

import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { services } from '#/lib/services';
import { useRouter } from 'next/navigation';

const Page: FC = () => {
  const router = useRouter();
  return (
    <>
      {/* <div
        className="absolute inset-0 z-0 mt-72 bg-no-repeat"
        style={{
          backgroundImage: "url('/RDM_Lifecycle.png')",
          backgroundSize: '50%',
          backgroundPosition: 'center',
          opacity: 0.05,
        }}
      ></div> */}
      <div className="container mx-auto space-y-10  text-white">
        <div className="ml-auto w-1/3">{/* <SearchForm /> */}</div>
        {services.map((section, index) => {
          let bgColor = 'rgba(255, 255, 255, 0.8)';
          if (index === 0) bgColor = '#F5F1ED';
          else if (index === 1) bgColor = '#DAD2BC';
          else if (index === 2) bgColor = '#1D4960';
          return (
            // eslint-disable-next-line react/jsx-key
            <div
              className={`border-1 rounded-lg ${bgColor} border border-gray-200 p-6 group-hover:opacity-10`}
            >
              <div key={section.name} className="space-y-3">
                <button
                  type="button"
                  className="bg-white-smoke font-regular mb-2  mr-2 rounded-lg px-5 py-2.5 text-sm text-gray-700 focus:outline-none"
                  // style={{backgroundColor: bgColor}}
                  >
                  {section.name}
                </button>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                  {section.items.map(item => {
                    return (
                      <div
                        key={item.name}
                        className="hover:border-1 group relative transform cursor-pointer overflow-hidden rounded-lg border shadow-md transition-transform duration-300 hover:scale-105"
                        onClick={() => router.push(`/${item.slug}`)} // navigate to this when the container is clicked
                      >
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
                        <img
                          src={item.name}
                          alt={item.name}
                          className="h-48 w-full transform bg-white object-cover transition-transform duration-500 hover:scale-110"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-60 p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <div className="flex h-full w-full space-x-3">
                            {item.buttons?.map((button, index) => {
                              return (
                                <a
                                  key={index}
                                  href={item.externalLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="font-regular flex w-full items-center justify-center rounded border border-gray-900 px-4 py-2 text-gray-900">
                                  {button.text}
                                  <div className="mt-2 inline-flex cursor-pointer items-center text-gray-700 hover:underline">
                                    <FontAwesomeIcon
                                      icon={faArrowUpRightFromSquare}
                                      className="mb-2 ml-2.5 h-3 w-3"
                                    />
                                  </div>
                                </a>
                              );
                            })}
                          </div>
                        </div>
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