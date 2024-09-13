/* eslint-disable react/no-unescaped-entities */
// import Links from '@/components/Helper/Links';
import { BaseInfo } from '@/Data/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaSquareArrowUpRight } from 'react-icons/fa6';
// import { FloatingDockDemo } from './FloatingDockDemo';

const Hero = () => {
  return (
    <div
      className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative "
      id="home"
    >
      <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Content */}
          <div>
            {/* Sub heading */}
            <h1
              data-aos="fade-left"
              className=" text-2xl md:text-3xl  lg:text-5xl mb-5 text-gray-300 font-semibold"
            >
              Hi, I'm {BaseInfo.name}
            </h1>
            {/* Title */}
            <h1
              data-aos="fade-right"
              data-aos-delay="100"
              className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl  font-bold md:leading-[3rem] xl:leading-[4rem] lg:leading-[3.5rem] text-white"
            >
              {BaseInfo.position}
            </h1>
            {/* Description */}
            <p
              data-aos="fade-left"
              data-aos-delay="200"
              className="mt-6 text-sm md:text-base text-white text-opacity-60"
            >
              {BaseInfo.description}
            </p>
            {/* Button */}
            <div className='flex '>
              <div className="w-fit">
                <Link
                  href="https://drive.google.com/file/d/1piL2-UmmNAMLkSd8QaD2Xx2FPrFWla9T/view?usp=drive_link"
                  target="_blank"
                >
                  <button
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    className="text-white font-semibold md:px-8 md:py-2.5 px-6 py-1.5 text-sm md:text-lg transition-all duration-200 rounded-lg bg-blue-700 mt-8 hover:bg-blue-900 flex items-center space-x-2"
                  >
                    <span>Resume</span>
                    <FaSquareArrowUpRight />
                  </button>
                </Link>
              </div>

               <div>
                {/* <FloatingDockDemo /> */}
              </div> 
            </div>
          </div>
          {/* Images */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden"
          >
            <Image
              src={BaseInfo.profilePic}
              alt={BaseInfo.name}
              width={10000}
              height={10000}
              className="w-auto h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
