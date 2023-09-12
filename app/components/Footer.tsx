import React from 'react'
import footer from "../../public/images/footer.png";
import Image from 'next/image';

export default function Footer() {
  return (
    <div className='bg-secondary h-64 flex flex-col justify-center items-center'>
      <Image className='px-10' src={footer} alt='footer image' width={500} height={500} />
      <p className='text-primary mt-8 text-sm font-bold'>© 2023 WeHire Group</p>
    </div>
  )
}
