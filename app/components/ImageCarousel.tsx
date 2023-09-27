'use client'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { CSSProperties } from 'react';

import ComingSoon from '../../public/images/Homepage/Specialties/ComingSoon.png'
import wehireBig4 from '../../public/images/Homepage/Specialties/wehireBig4.png'
import wehireConsulting from '../../public/images/Homepage/Specialties/wehireConsulting.png'
import wehireTax from '../../public/images/Homepage/Specialties/wehireTax.png'

import WHConsulting from '../../public/images/Consulting/WHConsulting.png'

import Image from 'next/image';

export default function SimpleSlider() {
  // const settings = {
  //   dots: true,
  //   speed: 500,
  //   swipeToSlide: true,
  //   slidesToShow: 3.25,
  //   slidesToScroll: 1,
  //   initialSlide: 0.25,
  //   infinite: false,
  // };
  const settings = {
    focusOnSelect: false,
    dots: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 3.25,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: false,

  };

  return (
    <div className='mx-10 mt-40 py-4'>
      <Slider {...settings}>
        {/* <div className='px-5 relative py-2 transform transition-transform duration-300 hover:-translate-y-2'>
          <Image className='' src={wehireConsulting} alt='We Hire Consulting Image' />
          <div className='absolute opacity-0 h-full bottom-0 flex justify-center items-end transition-opacity duration-300 hover:opacity-100'>
            <div className='flex flex-col'>
              <Image className='delay-150' src={WHConsulting} alt='test' />
              <p className='delay-300'>Specialized HR solutions for interim or long-term needs.</p>
            </div>
          </div>
        </div> */}
        <div className='px-5 relative py-2 transform transition-transform duration-300 hover:-translate-y-2'>
          <Image className='' src={wehireConsulting} alt='We Hire Consulting Image' />
          <div className='absolute opacity-0 h-full bottom-0 flex items-end transition-opacity duration-300 hover:opacity-100 delay-150 ease-in-out'>
            <div className='flex flex-col w-1/2'>
              <Image className='mb-10' src={WHConsulting} alt='test' />
              <p className='absolute opacity-0 h-full bottom-0 flex justify-center items-end transition-opacity duration-300 hover:opacity-100 delay-300 ease-in-out'>Specialized HR solutions for interim or long-term needs.</p>
            </div>
          </div>
        </div>

        <div className='px-5'>
          <Image src={wehireBig4} alt='We Hire Big 4 Image' />
        </div>
        <div className='px-5'>
          <Image src={wehireTax} alt='We Hire Tax Image' />
        </div>
        <div className='px-5'>
          <Image src={ComingSoon} alt='Coming Soon Image' />
        </div>
        <div className='px-5'>
          <Image src={ComingSoon} alt='Coming Soon Image' />
        </div>
        <div className='px-5'>
          <Image src={ComingSoon} alt='Coming Soon Image' />
        </div>
      </Slider>
    </div>
  );
}
