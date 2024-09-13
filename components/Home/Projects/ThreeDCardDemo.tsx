'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '../Projects/3d-card';
import Link from 'next/link';
// import { projectData } from '@/Data/data';
type Props = {
  project: {
    id: number;
    image: string;
    url: string;
    name: string;
  };
};
export function ThreeDCardDemo({ project }: Props) {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2]  w-auto sm:w-[20rem] h-[27rem] rounded-xl p-6 border  ">
        <CardItem translateZ="50" className="text-xl font-bold text-white">
          {project.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 "
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={project.image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-5">

          <CardItem
            translateZ={20}
            as={Link}
            href={project.url}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-white text-black"
          >
            Live
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-white   text-white text-xs font-bold"
          >
            <Image src="/images/github.svg" alt='github' height={20} width={20}  />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
