'use client';

import React, { FC, useEffect, useState } from 'react';

import { Boundary } from '#/ui/boundary';

interface TemplateProps {
  children: React.ReactNode;
}

const Template: FC<TemplateProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // small delay to show smooth transition
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Boundary>
      <div
        className={`transition-all duration-500 ease-in-out ${
          isLoaded
            ? 'opacity-100 transform translate-y-0'
            : 'opacity-0 transform translate-y-4'
        }`}>
        {children}
      </div>
    </Boundary>
  );
};

export default Template;
