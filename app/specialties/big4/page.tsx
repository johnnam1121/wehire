import Image from 'next/image'
import React from 'react'
import Big4Image from '../../../public/images/Big4/Big4Image.png'
import WeHireBig4 from '../../../public/images/Big4/WehireBig4.png'
import deloitte from '../../../public/images/Big4/deloitte.png'
import kp from '../../../public/images/Big4/kp.png'
import ey from '../../../public/images/Big4/ey.png'
import pwc from '../../../public/images/Big4/pwc.png'
import WhatIf from '../../../public/images/Big4/WhatIf.png'
import education from '../../../public/images/Big4/education.png'
import coaching from '../../../public/images/Big4/coaching.png'
import placement from '../../../public/images/Big4/placement.png'
import SpecializedSupport from '../../../public/images/Big4/SpecializedSupport.png'


export default function page() {
  return (
    <main>

      {/* landing */}
      <div className="pt-20 bg-primary bg-cover bg-no-repeat" style={{ backgroundImage: `url(${Big4Image.src})` }}>
        <div className="h-full p-10 flex items-center">
          <div className='lg:w-1/2 my-10'>
            <Image src={WeHireBig4} alt='we hire big 4 logo' layout='responsive' />
            <hr className="my-12 border-secondary border-4 dark:border-secondary" />
            <p className='text-white text-xl font-bold'>Big4 is a hyper focused extension of the Wehire Group. Our sole purpose is to help candidates
              leverage their &apos;big four&apos; experience to pursue new opportunities. Our process is simple.
              We start with a 1 on 1 conversation to learn a little about you. We&apos;ll talk about where you&apos;ve
              been, where you want to go, and how we can help.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-around pb-10">
          <div className="flex-none w-48 p-2">
            <Image src={deloitte} alt="Deloitte logo" width={200} height={200} />
          </div>
          <div className="flex-none w-48 p-2">
            <Image src={pwc} alt="PwC logo" width={200} height={200} />
          </div>
          <div className="flex-none w-48 p-2">
            <Image src={ey} alt="EY logo" width={200} height={200} />
          </div>
          <div className="flex-none w-48 p-2">
            <Image src={kp} alt="KPMG logo" width={200} height={200} />
          </div>
        </div>
      </div>

      {/* what if.. */}
      <div>
        <div className='flex justify-center '>
          <div className='w-1/2'>
            <Image className='py-10 mt-10' src={WhatIf} alt='What if.. logo' width={400} height={400} />
            <p className='pb-10 text-secondary font-semibold text-md'>What if your workplace was challenging, innovative, and rewarding? At our core,
              WeHire believes in bringing this type of workplace to everyone. Through a combination of both
              education and recruitment, we help managers become better leaders, provide career coaching to
              employees, and place highly qualified candidates in great work environments. Because whether we&apos;re
              building a better workplace or helping you find a new one, everything that WeHire does is powered
              by people.
            </p>
          </div>
        </div>
        <div className='md:w-1/2 mx-auto py-20'>
          <div className='md:flex md:justify-around'>
            <div className="flex-none mx-auto p-2 md:w-1/3">
              <Image className='w-full' src={education} alt="Education logo" />
              <p>clock image here</p>
            </div>
            <div className="flex-none mx-auto p-2 md:w-1/3">
              <Image className='w-full' src={coaching} alt="Coaching logo" />
              <p>clock image here</p>
            </div>
            <div className="flex-none mx-auto p-2 md:w-1/3">
              <Image className='w-full' src={placement} alt="Placement logo" />
              <p>clock image here</p>
            </div>
          </div>
        </div>
      </div>

      {/* calendly */}
      <div className='flex justify-center pb-10 mb-10'>
        <div className='bg-slate-700 w-1/2 h-48'>
          <p className='text-white text-center align-center'>Calendly here</p>
        </div>
      </div>

      {/* schedule a call */}

      <div>
        <div className="bg-lightBlue flex flex-col md:flex-row md:justify-around py-24">
          <Image className="w-3/4 md:w-1/2 lg:w-1/4 mx-auto" src={SpecializedSupport} alt="SpecializedSupport logo" />
          <button className="mt-4 border-2 border-secondary md:py-4 md:px-8 md:w-1/4 font-bold w-1/2 mx-auto py-4"><a href="tel:(832) 455-8780">Schedule A Call</a></button>
        </div>
      </div>
    </main >
  )
}