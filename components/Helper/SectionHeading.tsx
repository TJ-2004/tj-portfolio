import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
const SectionHeading = ({ children }: Props) => {
  return (
    <h1 className="bg-blue-800  text-center py-3 px-4 mx-auto text-white text-2xl sm:text-3xl md:text-4xl uppercase -rotate-6">
      {children}
    </h1>
  );
};

export default SectionHeading;
