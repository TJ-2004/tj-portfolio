import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]">
      <div>
        <Image
          src="/images/logo.png"
          alt="logo"
          width={80}
          height={80}
          className="mx-auto rounded-full"
        />
        <div className="text-white flex items-center justify-center flex-wrap space-x-10 space-y-4 font-thin">
          <div>Home.</div>
          <div>Services.</div>
          <div>Projects.</div>
          <div>Reviews.</div>
          <div>Contact.</div>
        </div>
        <p className="text-white text-opacity-60 mt-6 text-center">
          © 2024 All Rights Reserved by WebDev Warriors
        </p>
      </div>
    </div>
  );
};

export default Footer;
