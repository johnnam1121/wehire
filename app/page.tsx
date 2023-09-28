import Image from 'next/image';
import ImageSlide from './components/HomePage/ImageSlide';

export default function Home() {
  return (
    <main>
      {/* pbp landing */}
      <div className="pt-20 bg-primary bg-cover bg-no-repeat xl:bg-[url('../public/images/Home/WH-hdr-11.png')]">
        <div className="h-full p-10 flex items-center mt-20">
          <div className='mx-auto lg:w-5/12 my-10 lg:ml-32'>
            <Image src='/images/Homepage/pbp-1024x429.png' alt='we hire big 4 logo' width={600} height={400} />
            <hr className='mt-10 border-t-4 border-lightBlue' />
            <p className="text-secondary block mt-10 font-semibold text-lg">At our core, WeHire Group wants to make a difference in
              people&apos;s careers. We provide professionals with the tools to achieve their goals and connect clients with motivated
              individuals that impact their business.</p>
          </div>
        </div>
      </div>

      {/* job search and employer banners */}
      <div className='flex justify-center flex-col md:flex-row'>
        <div className='bg-lightBlue rounded-lg -translate-y-10 md:w-1/2 md:mx-10 mx-3 my-3'>
          <h3 className='text-white text-5xl md:text-6xl font-bold md:ml-8 p-3 mt-6'>Job Search</h3>
          <button className='text-white text-md font-semibold border-2 rounded-lg md:ml-11 p-3 m-3 mb-6 transition ease-in hover:bg-white hover:text-lightBlue'>Find Opportunities</button>
        </div>
        <div className='bg-secondary rounded-lg -translate-y-10 md:w-1/2 md:mx-10 mx-3 my-3'>
          <h3 className='text-white text-5xl md:text-6xl font-bold md:ml-8 p-3 mt-6'>Employer</h3>
          <button className='text-white text-md font-semibold border-2 rounded-lg md:ml-11 p-3 m-3 mb-6 transition ease-in hover:bg-white hover:text-secondary'><a href="/">Find Top Talent</a></button>
        </div>
      </div>

      {/* Our Process */}
      <div className="flex flex-col items-center justify-center">
        <div className='mt-40 mb-20'>
          <div className="mx-10">
            <Image src='/images/Homepage/OurProcess.png' alt="Our Process photo" width={500} height={500} />
          </div>
        </div>

        <div className='lg:w-1/2 w-3/4'>
          <ol className="relative border-l border-gray-200 dark:border-gray-700">
            <li className="mb-10 ml-6 ">
              <span className="	absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -left-5 ring-2 ring-pink dark:ring-gray-900">
                <span className="text-blue-800 dark:text-blue-300 font-bold text-xl">1</span>
              </span>
              <h3 className="ml-4 flex items-center mb-1 text-3xl font-bold text-secondary dark:text-white">Call</h3>
              <p className="ml-4 mb-4 text-base font-normal text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis..</p>
            </li>
            <li className="mb-10 ml-6 ">
              <span className="	absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -left-5 ring-2 ring-pink dark:ring-gray-900">
                <span className="text-blue-800 dark:text-blue-300 font-bold text-xl">2</span>
              </span>
              <h3 className="ml-4 flex items-center mb-1 text-3xl font-bold text-secondary dark:text-white">Call</h3>
              <p className="ml-4 mb-4 text-base font-normal text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis..</p>
            </li>
            <li className="mb-10 ml-6 ">
              <span className="	absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -left-5 ring-2 ring-pink dark:ring-gray-900">
                <span className="text-blue-800 dark:text-blue-300 font-bold text-xl">3</span>
              </span>
              <h3 className="ml-4 flex items-center mb-1 text-3xl font-bold text-secondary dark:text-white">Call</h3>
              <p className="ml-4 mb-4 text-base font-normal text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis..</p>
            </li>
            <li className="mb-10 ml-6 ">
              <span className="	absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -left-5 ring-2 ring-pink dark:ring-gray-900">
                <span className="text-blue-800 dark:text-blue-300 font-bold text-xl">4</span>
              </span>
              <h3 className="ml-4 flex items-center mb-1 text-3xl font-bold text-secondary dark:text-white">Call</h3>
              <p className="ml-4 mb-4 text-base font-normal text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis..</p>
            </li>
            <li className="mb-10 ml-6 ">
              <span className="	absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -left-5 ring-2 ring-pink dark:ring-gray-900">
                <span className="text-blue-800 dark:text-blue-300 font-bold text-xl">5</span>
              </span>
              <h3 className="ml-4 flex items-center mb-1 text-3xl font-bold text-secondary dark:text-white">Call</h3>
              <p className="ml-4 mb-4 text-base font-normal text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis..</p>
            </li>
          </ol>
        </div>
      </div>

      {/* Specialties */}
      <div className='mt-40'>
        <div className='md:w-1/2 mx-20' >
          <Image src='/images/Homepage/Specialties.png' alt="Our Process photo" layout='responsive' width={400} height={400} />
          <hr className="my-12 border-secondary border-2 dark:border-secondary" />
          <p className=' text-secondary font-semibold text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
        </div>
        <div>
          <ImageSlide />
        </div>
      </div>

      {/* Referral Bonus */}
      <div className='mt-40 mb-20'>
        <div className='block lg:flex justify-center items-center'>
          <div>
            <Image src='/images/Homepage/phone.png' alt="Our Process photo" width={500} height={500} />
          </div>
          <div className='mx-8 mt-3 lg:w-1/2'>
            <Image src='/images/Homepage/referral.png' alt="Our Process photo" layout='responsive' width={600} height={600} />
            <p className='text-secondary font-semibold text-sm mt-10'>It&apos;s all in our name &ndash; We work with our network to Hire the most qualified candidates for our clients. That&apos;s why we offer a minimum industry-leading $1,000 referral bonus to anyone who helps fill our job openings for clients and up to $5,000 for our top positions.</p>
            <button className='mt-5 border-2 rounded-md border-secondary text-sm text-secondary font-bold px-3 py-2'>Refer A Friend</button>
          </div>
        </div>
      </div>
    </main>
  )
}