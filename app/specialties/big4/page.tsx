import Image from 'next/image'
import React from 'react'
import pbp from '../../../public/images/homepage/pbp-1024x429.png'

export default function page() {
  return (
    <main>
      <div className="h-screen bg-primary bg-cover bg-no-repeat bg-[../../../public/images/homepage/pbp-1024x429.png]">
        <div className="h-full p-10 flex items-center">
          <div className="max-w-3xl xl:ml-60 mx-auto">
            <Image src={pbp} alt='Powered By People' width={800} height={400} />
            <div className='mt-10 border-t-4 border-custom'>
              <p className="block mt-10 font-semibold text-md">At our core, WeHire Group wants to make a difference in people&apos;s careers. We provide professionals with the tools to achieve their goals and connect clients with motivated individuals that impact their business.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
