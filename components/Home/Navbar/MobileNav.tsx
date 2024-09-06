import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React from 'react';
import { CgClose } from 'react-icons/cg';
type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  return (
    <div>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black opacity-70 w-full h-screen z-[1000]">
        {/* NavLink */}
        <div className=" flex flex-col h-full w-[80%] sm:w-[60%]  fixed justify-center bg-[#0f0715] space-y-6 z-[10000] text-white ">
          {navLinks.map((navLinks) => {
            return (
              <Link key={navLinks.id} href={navLinks.url}>
                <p className="nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px] ">
                  {navLinks.label}
                </p>
              </Link>
            );
          })}
        </div>
        {/* Close */}
        <CgClose className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 h-6 w-6 text-white" />
      </div>
    </div>
  );
};

export default MobileNav;
