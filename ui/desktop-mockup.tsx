import React from 'react';

interface DesktopMockupProps {
  lightImageUrl?: string;
  darkImageUrl?: string;
}

const DesktopMockup: React.FC<DesktopMockupProps> = ({
  lightImageUrl,
  darkImageUrl,
}) => {
  return (
    <>
      <div className="relative mx-auto border-gray-100 dark:border-gray-100 bg-gray-100 border-[8px] rounded-t-xl h-[172px] w-[301px] md:h-[294px] md:w-[512px]">
        <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
          {lightImageUrl && (
            <img
              src={lightImageUrl}
              className="dark:hidden h-[156px] md:h-[278px] w-full rounded-xl"
              alt="Desktop Mockup Light"
            />
          )}
          {darkImageUrl && (
            <img
              src={darkImageUrl}
              className="hidden dark:block h-[156px] md:h-[278px] w-full rounded-lg"
              alt="Desktop Mockup Dark"
            />
          )}
        </div>
      </div>
      <div className="relative mx-auto bg-gray-100 dark:bg-gray-100 rounded-b-xl rounded-t-sm h-[17px] w-[351px] md:h-[21px] md:w-[512px]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-100"></div>
      </div>
    </>
  );
};

export default DesktopMockup;
