import Image from 'next/image';
import pbp from '../public/images/pbp-1024x429.png';

export default function Home() {
  return (
    <main>
      {/* pbp landing */}
      <div className="h-screen bg-primary bg-cover bg-no-repeat xl:bg-[url('../public/images/WH-hdr-11.png')]">
        <div className="h-full p-10 flex items-center">
          <div className="max-w-3xl xl:ml-60 mx-auto">
            <Image src={pbp} alt='Powered By People' layout="responsive" width={800} height={400} />
            <div className='mt-10 border-t-4 border-custom'>
              <p className="block mt-10 font-semibold text-md">At our core, WeHire Group wants to make a difference in people&apos;s careers. We provide professionals with the tools to achieve their goals and connect clients with motivated individuals that impact their business.</p>
            </div>
          </div>
        </div>
      </div>

      {/* job search and employer banners */}
      <div className='grid md:grid-cols-2 bg-white'>
        <div className='flex justify-center items-center my-3 -translate-y-14'>
          <div className='bg-custom rounded-2xl w-10/12 md:w-11/12 lg:w-3/4'>
            <h3 className='text-6xl font-bold text-white ml-6 mt-12 text-left pt-3'>Job Search</h3>
            <button className='rounded-lg border-2 ml-6 mt-7 mb-12 text-white text-md p-3'>Find Opportunities</button>
          </div>
        </div>
        <div className='flex justify-center items-center my-3 -translate-y-14'>
          <div className='bg-secondary rounded-2xl w-10/12 md:w-11/12 lg:w-3/4'>
            <h3 className='text-6xl font-bold text-white ml-6 mt-12 text-left pt-3'>Employer</h3>
            <button className='rounded-lg border-2 ml-6 mt-7 mb-12 text-white text-md p-3'>Find Top Talent</button>
          </div>
        </div>
      </div>
    </main>
  )
}
