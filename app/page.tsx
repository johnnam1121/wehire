import Image from 'next/image';
// import Contact from './components/Contact';

import wehireDarkLogo from '../public/images/Home/wehireDarkLogo.png'
import wehireHR from '../public/images/Home/wehireHR.png'

export default function Home() {
  return (
    <main className='bg-secondary min-h-screen'>
      <div className='flex text-center justify-center pt-10 sm:pt-20'>
        <Image src={wehireDarkLogo} alt='We Hire Logo Dark' />
      </div>
      <div className='flex text-center justify-center pt-4 sm:pt-10'>
        <h1 className='text-2xl font-semibold text-primary font-cabin'>
          Powered by people.
        </h1>
      </div>
      <div className='flex text-center justify-center pt-40 sm:pt-64'>
        <div className='border-2 rounded-xl border-customTeal' >
          <a className=" group block rounded-lg transition hover:bg-slate-800 duration-[500ms] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            href='https://www.wehirehr.com/' target="_blank" rel="noopener noreferrer">
            <Image src={wehireHR} alt='We Hire HR logo' className='px-4 py-6 sm:w-64' />
          </a>
        </div>
      </div>
      <div className='flex justify-center text-center pt-40 sm:pt-80'>
        <a
          href="mailto:hello@wehiregroup.com"
          className="inline-block border-2 rounded-xl border-primary bg-primary text-secondary font-medium px-4 py-2 transition hover:bg-secondary hover:text-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary duration-[500ms]"
        >
          Contact Us
        </a>
      </div>
    </main>
  )
}


{/* Contact Form */ }
// <div className='bg-primary py-20' id='homePageContactForm'>
//   {/* <h1 className='mb-8 font-bold text-5xl text-secondary text-center'>Contact Us!</h1> */}
//   <Contact />
// </div>


// 'primary': '#f0f0f0',
// 'secondary': '#162F55',
// 'lightBlue': '#128DF0',
// 'customTeal': '#00c3ba'
