'use client'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export default function ImageSlide() {
  const settings = {
    focusOnSelect: false,
    dots: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 3.25,
    slidesToScroll: 1,
    initialSlide: 0,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          centerPadding: "50px",
        },
      },
    ],
  };

  return (
    <div className='mx-10 mt-40 py-4'>
      <Slider {...settings}>

        {/* customTeal - weHireConsultingBg */}
        <div className="flex justify-center items-center px-2">
          <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
            <div className="lightbox relative transition-all duration-500 group-hover:scale-105 tobii-zoom">
              <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100 group-hover:opacity-0 transition-opacity	transition-duration: 150ms"></div>
              <img src='/images/HomePage/BG1.png' alt='We Hire Consulting Image' className="w-full h-auto" />
              <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent to-customTeal opacity-0 group-hover:opacity-100 transition-opacity	transition-duration: 150ms"></div>
            </div>
            <img className='w-1/2 md:w-3/4 lg:w-1/2 ml-8 absolute bottom-8 group-hover:bottom-32 right-2 left-2 transition-all duration-500' src='/images/HomePage/weHireConsulting.png' alt="Consulting Small Image" />
            <div className="w-1/2 md:w-3/4 lg:w-1/2 ml-10 mb-8 absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500">
              <p className="hover:text-primary-600 text-lg text-white transition duration-500 font-semibold">Specialized HR solutions for interim or long-term needs.</p>
            </div>
          </div>
        </div>

        {/* customBlue - weHireBig4 */}
        <div className="flex justify-center items-center px-2">
          <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
            <div className="lightbox relative transition-all duration-500 group-hover:scale-105 tobii-zoom">
              <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100 group-hover:opacity-0 transition-opacity	transition-duration: 150ms"></div>
              <img src='/images/HomePage/BG2.png' alt='We Hire Big 4 Image' className="w-full h-auto" />
              <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent to-lightBlue opacity-0 group-hover:opacity-100 transition-opacity	transition-duration: 150ms"></div>
            </div>
            <img className='w-1/2 md:w-3/4 lg:w-1/2 ml-8 absolute bottom-8 group-hover:bottom-32 right-2 left-2 transition-all duration-500' src='/images/HomePage/weHireBig4.png' alt="Big 4 Small Image" />
            <div className="w-1/2 md:w-3/4 lg:w-1/2 ml-10 mb-8 absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500">
              <p className="hover:text-primary-600 text-lg text-white transition duration-500 font-semibold">Specialized HR solutions for interim or long-term needs.</p>
            </div>
          </div>
        </div>

        {/* lightGreen - weHireTax */}
        <div className="flex justify-center items-center px-2">
          <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
            <div className="lightbox relative transition-all duration-500 group-hover:scale-105 tobii-zoom">
              <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100 group-hover:opacity-0 transition-opacity	transition-duration: 150ms"></div>
              <img src='/images/HomePage/BG3.png' alt='We Hire Tax Image' className="w-full h-auto" />
              <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent to-green-500 opacity-0 group-hover:opacity-100 transition-opacity	transition-duration: 150ms"></div>
            </div>
            <img className='w-1/2 md:w-3/4 lg:w-1/2 ml-8 absolute bottom-8 group-hover:bottom-32 right-2 left-2 transition-all duration-500' src='/images/HomePage/weHireTax.png' alt="Tax Small Image" />
            <div className="w-1/2 md:w-3/4 lg:w-1/2 ml-10 mb-8 absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500">
              <p className="hover:text-primary-600 text-lg text-white transition duration-500 font-semibold">Specialized HR solutions for interim or long-term needs.</p>
            </div>
          </div>
        </div>

        {/* secondary - coming soon */}
        <div className="flex justify-center items-center px-2">
          <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
            <div className="lightbox relative transition-all duration-500 group-hover:scale-105 tobii-zoom">
              <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-100 group-hover:opacity-0 transition-opacity	transition-duration: 150ms"></div>
              <img src='/images/HomePage/BG4.png' alt='We Hire Coming Soon Image' className="w-full h-auto" />
              <div className="gradient-overlay absolute inset-0 bg-gradient-to-b from-transparent to-secondary opacity-0 group-hover:opacity-100 transition-opacity	transition-duration: 150ms"></div>
            </div>
            <img className='w-1/2 md:w-3/4 lg:w-1/2 ml-8 absolute bottom-8 group-hover:bottom-32 right-2 left-2 transition-all duration-500' src='/images/HomePage/comingSoon.png' alt="Coming Soon Small Image" />
            <div className="w-1/2 md:w-3/4 lg:w-1/2 ml-10 mb-8 absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500">
              <p className="hover:text-primary-600 text-lg text-white transition duration-500 font-semibold">Specialized HR solutions for interim or long-term needs.</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
