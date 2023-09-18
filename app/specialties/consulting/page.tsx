import Image from 'next/image'
import React from 'react'
import consultingImage from '../../../public/images/Consulting/consultingImage.jpg'
import WHConsulting from '../../../public/images/Consulting/WHConsulting.png'
import OurServices from '../../../public/images/Consulting/OurServices.png'

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
      <div className="pt-20 bg-primary bg-cover bg-no-repeat" style={{ backgroundImage: `url(${consultingImage.src})` }}>
        <div className="h-full p-10 flex items-center">
          <div className='lg:w-1/2 my-10'>
            <Image src={WHConsulting} alt='we hire consulting logo' layout='responsive' />
            <hr className="my-12 border-secondary border-4 dark:border-secondary" />
            <p className='text-white text-xl font-bold'>We strive to meet the ever-changing needs of
              businesses and create specialized HR solutions that are customized for companies as an interim
              or long-term solution.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-around pb-10">
          <div className="flex-none w-52 p-2">
            <p className='text-white text-2xl font-black' >Discovery</p>
            <p className='text-white text-md font-medium'>By conducting initial HR Business assessments,
              we gain valuable insight into your organizations needs and then determine the best project plan
              to help you achieve your HR Goals.
            </p>
          </div>
          <div className="flex-none w-52 p-2">
            <p className='text-white text-2xl font-black' >Define & Design</p>
            <p className='text-white text-md font-medium'>Through a collaborative partnership,
              we provide a customized and detailed plan design that will be our road-map to provide
              assistance to your current HR infrastructure or the framework to help you build it from the
              ground up.
            </p>
          </div>
          <div className="flex-none w-52 p-2">
            <p className='text-white text-2xl font-black' >Execution</p>
            <p className='text-white text-md font-medium'>It it our goal to ensure that we meet project
              objectives through the agreed upon terms and time frames, while delivering excellent customer
              service and communication throughout.
            </p>
          </div>
          <div className="flex-none w-52 p-2">
            <p className='text-white text-2xl font-black' >Transition</p>
            <p className='text-white text-md font-medium'>Upon project completion, we help identify internal
              or external resources to ensure the HR strategy continues to align with the business strategy
              going forward and provide training to ease the transition.
            </p>
          </div>
        </div>
      </div>

      {/* Our Services.. */}
      <div>
        <div className='flex justify-center '>
          <div className='w-1/2'>
            <Image className='py-10 mt-10' src={OurServices} alt='OurServices logo' width={500} height={500} />
          </div>
        </div>
        <div className='md:w-1/2 mx-auto py-20'>
          <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
          </svg></button>
          <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
              </li>
            </ul>
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
        <div className="bg-custom flex flex-col md:flex-row md:justify-around py-24">
          <Image className="w-3/4 md:w-1/2 lg:w-1/4 mx-auto" src={SpecializedSupport} alt="SpecializedSupport logo" />
          <button className="mt-4 border-2 border-secondary md:py-4 md:px-8 md:w-1/4 font-bold w-1/2 mx-auto py-4"><a href="tel:(832) 455-8780">Schedule A Call</a></button>
        </div>
      </div>
    </main >
  )
}