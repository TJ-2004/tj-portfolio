import SectionHeading from '@/components/Helper/SectionHeading';
import { aboutInfo } from '@/Data/data';
import Image from 'next/image';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const About = () => {
  return (
    <div className="pt-16 pb-16 bg-[#050709]" id="about">
      {/* Section Heading */}
      <SectionHeading>About Me</SectionHeading>
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 mt-20 mx-auto w-4/5 ">
        {/* Content */}
        <div data-aos="fade-left" data-aos-anchor-placement="top-center">
          <h1 className="text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-200">
            {aboutInfo.title}
          </h1>
          <p className="mt-6 text-base text-gray-500">
            {aboutInfo.description}
          </p>
          <div className="mt-8">
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-7 w-7 bg-blue-800 justify-center items-center flex flex-col ">
                <FaCheck className="text-white" />
              </div>
              <p className="text-gray-300 font-bold text-sm sm:text-base md:text-lg">
                FrontEnd Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-7 w-7 bg-orange-800 justify-center items-center flex flex-col ">
                <FaCheck className="text-white" />
              </div>
              <p className="text-gray-300 font-bold text-sm sm:text-base md:text-lg">
                BackEnd Development
              </p>
            </div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="h-7 w-7 bg-green-800 justify-center items-center flex flex-col ">
                <FaCheck className="text-white" />
              </div>
              <p className="text-gray-300 font-bold text-sm sm:text-base md:text-lg">
                Full Stack Development
              </p>
            </div>
          </div>
        </div>
        {/* Images */}
        <div
          data-aos="zoom-in"
          data-aos-delay="150"
          data-aos-anchor-placement="top-center"
          className="grid grid-cols-2 gap-16 items-center lg:mx-auto"
        >
          {/* 1st Stat */}
          <div className="">
            <Image
              src="/images/customer.png"
              width={80}
              height={80}
              alt="Customer Photo"
              className="mx-auto"
            />
            <p className="text-white text-center text-xl font-bold mt-3">
              {aboutInfo.client}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Satisfied Customer
            </p>
          </div>
          {/* 2nd Stat */}
          <div className="">
            <Image
              src="/images/experience.png"
              width={80}
              height={80}
              alt="Customer Photo"
              className="mx-auto"
            />
            <p className="text-white text-center text-xl font-bold mt-3">
              {aboutInfo.experience}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Years Experience
            </p>
          </div>
          {/* 3rd Stat */}
          <div className="">
            <Image
              src="/images/completed.png"
              width={80}
              height={80}
              alt="Customer Photo"
              className="mx-auto"
            />
            <p className="text-white text-center text-xl font-bold mt-3">
              {aboutInfo.project}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Completed Project
            </p>
          </div>
          {/* 4th Stat */}
          <div className="">
            <Image
              src="/images/rocket.png"
              width={80}
              height={80}
              alt="Customer Photo"
              className="mx-auto"
            />
            <p className="text-white text-center text-xl font-bold mt-3">
              {aboutInfo.website}
            </p>
            <p className="text-base sm:text-lg text-gray-400 text-center">
              Websites Launched
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
