import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Links = () => {
  return (
    <div>
      <div className='text-white'>
        <Link href="https://www.linkedin.com/in/tanishq-j-913152288/"  >
        <Image src="/images/linkedin.png" alt='linkedIn Logo' width={50} height={50}  />
        </Link>
        {/* <Link ></Link>
        <Link ></Link>
        <Link ></Link>
        <Link ></Link> */}
      </div>
    </div>
  );
};

export default Links;
