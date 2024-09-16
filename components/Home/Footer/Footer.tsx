import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="pt-16 pb-16 bg-[#0f0715]">
        <div>
          <Image
            src="/images/logo.png"
            alt="logo"
            width={80}
            height={80}
            className="mx-auto rounded-full"
          />
         
          <p className="text-white text-opacity-60 mt-6 text-center">
            © 2024 All Rights Reserved by Tanishq Jaiswal
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
