/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import { Button } from './moving-border';
import Link from 'next/link';

export function MovingBorder() {
  return (
    <div>
      <Button
        borderRadius="1.75rem"
        className=" text-white  border-neutral-500 hover:text-lg transition-all duration-100 "
      >
        <Link
          href="https://calendly.com/tanishqjais9756/let-s-talk"
          target="__blank"
        >
          Let's Talk
        </Link>
      </Button>
    </div>
  );
}
