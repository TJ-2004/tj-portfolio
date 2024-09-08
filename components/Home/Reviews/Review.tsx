import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';
import Slider from './Slider';

const Review = () => {
  return (
    <div className="pt-16 pb-16 bg-[#0f0715]" id="reviews">
      {/* Section Heading */}
      <SectionHeading>Client Reviews</SectionHeading>
      <div className="w-[90%] sm:w-4/5 mx-auto mt-20">
        {/* slider */}
        <Slider />
      </div>
    </div>
  );
};

export default Review;
