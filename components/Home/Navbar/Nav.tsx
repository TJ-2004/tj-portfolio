import { navLinks } from '@/constant/constant';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';

// define prop types
type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  return (
    <div className="fixed h-[12vh] z-[10] bg-blue-950 w-full">
      <div className="flex items-center justify-between h-full w-[95%] sm:w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={50}
          height={50}
          className="ml-[-1.5rem] sm:ml-0 rounded-full"
        />
        <div className="flex items-center space-x-10">
          {/* NavLinks */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navLinks) => {
              return (
                <Link key={navLinks.id} href={navLinks.url}>
                  <p className="nav__link">{navLinks.label}</p>
                </Link>
              );
            })}
          </div>
          {/* Buttons */}

          <div className="flex items-center space-x-4">
            <button className="md:px-10 md:py-3 px-8 py-3 text-blue-800 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg ">
              Hire Me
            </button>
            {/* Buger */}
            <HiBars3BottomRight
              className="w-8 h-8 cursor-pointer text-white lg:hidden"
              onClick={openNav}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
