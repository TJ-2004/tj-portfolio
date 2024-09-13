'use client';
import React, { ReactNode, useEffect } from 'react';

interface UpdateProps {
  children: ReactNode; // This defines that the children prop will be of type ReactNode
}

const Update: React.FC<UpdateProps> = ({ children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return <div>{children}</div>;
};

export default Update;
