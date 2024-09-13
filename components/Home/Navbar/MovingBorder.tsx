'use client';
import React from 'react';
import { Button } from './moving-border';

export function MovingBorder() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className=" text-white  border-neutral-500 hover:text-lg transition-all duration-100 "
      >
        Hire Me
      </Button>
    </div>
  );
}
