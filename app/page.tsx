import Image from 'next/image';
import ImageSlide from './components/HomePage/ImageSlide';

// import pbp from '/images/Home/pbp-1024x429.png'
// import ourProcess from 'c'
// import specialties from '/images/Home/Specialties.png'
// import phone from '/images/Home/phone.png'
// import referral from '/images/Home/referral.png'

export default function Home() {
  return (
    <main>
      {/* pbp landing */}
      <div className="pt-20 bg-primary bg-cover bg-no-repeat xl:bg-[url('../public/images/Home/WH-hdr-11.png')]">
        <div className="h-full p-10 flex items-center mt-20">
          <div className='mx-auto lg:w-5/12 my-10 lg:ml-32'>
            <img src='/images/Home/pbp-1024x429.png' alt='we hire big 4 logo' width={600} height={400} />
            <hr className='mt-10 border-t-4 border-lightBlue' />
            <p className="text-secondary block mt-10 font-semibold text-lg">At our core, WeHire Group wants to make a difference in
              people&apos;s careers. We provide professionals with the tools to achieve their goals and connect clients with motivated
              individuals that impact their business.</p>
          </div>
        </div>
      </div>

      {/* Specialties */}
      <div className='mt-20 mb-10'>
        <div className=' md:w-1/2 mx-10 md:mx-20' >
          {/* layout='responsive' */}
          <img src='/images/Home/Specialties.png' alt="Our Process photo" width={400} height={400} />
          <hr className="my-12 border-secondary border-2 dark:border-secondary" />
          <p className=' text-secondary font-semibold text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        </div>
        <div>
          <ImageSlide />
        </div>
      </div>


    </main>
  )
}