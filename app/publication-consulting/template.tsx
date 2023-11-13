import React, { FC } from 'react';

import { Boundary } from '#/ui/boundary';

interface TemplateProps {
  children: React.ReactNode;
}

const Template: FC<TemplateProps> = ({ children }) => {
  return <Boundary>{children}</Boundary>;
};

export default Template;
