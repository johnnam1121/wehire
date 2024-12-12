// import Image from 'next/image';
// import ImageSlide from './components/HomePage/ImageSlide';
// import Contact from './components/Contact';

// // import pbp from '/images/Home/pbp-1024x429.png'
// // import ourProcess from 'c'
// // import specialties from '/images/Home/Specialties.png'
// // import phone from '/images/Home/phone.png'
// // import referral from '/images/Home/referral.png'

// export default function Home() {
//   return (
//     <main>
//       {/* pbp landing */}
//       <div className="pt-20 bg-primary bg-cover bg-no-repeat lg:bg-[url('../public/images/Home/WH-hdr-11.png')]">
//         <div className="h-full p-10 flex items-center mt-20">
//           <div className='mx-auto lg:w-5/12 my-10 lg:ml-32'>
//             <img src='/images/Home/pbp-1024x429.png' alt='we hire big 4 logo' width={600} height={400} />
//             <hr className='mt-10 border-t-4 border-lightBlue' />
//             {/* <p className="text-secondary block mt-10 font-semibold text-lg">At our core, WeHire Group wants to make a difference in
//               people&apos;s careers. We provide professionals with the tools to achieve their goals and connect clients with motivated
//               individuals that impact their business.</p> */}
//             <p className="text-secondary block mt-10 font-semibold text-lg">At WeHire Group, we specialize in delivering custom search solutions tailored to meet your
//               unique staffing needs. With a commitment to excellence, we provide first-class service and
//               connect you with qualified candidates swiftly and efficiently.</p>
//           </div>
//         </div>
//       </div>

//       {/* our services */}
//       <div className='py-16 px-16 text-center sm:text-left'>
//         <h1 className='font-bold text-5xl text-secondary md:pt-20'>Our Services</h1>
//         <div className='sm:flex md:pb-20'>
//           <div className='mt-10 text-center sm:text-left w-full sm:pr-20'>
//             <h3 className='font-semibold text-2xl mb-2 text-secondary'>Top Talent Acquisition</h3>
//             <p className='text-lg'>
//               Identify and recruit top-tier executives and senior leaders who drive
//               your organization&#39;s success.
//             </p>
//           </div>
//           <div className='mt-10 text-center sm:text-left w-full sm:pr-20'>
//             <h3 className='font-semibold text-2xl mb-2 text-secondary'>Specialized Recruitment</h3>
//             <p className='text-lg'>
//               From technical specialists to managerial roles, we find
//               talented individuals across various industries and disciplines.
//             </p>
//           </div>
//           <div className='mt-10 text-center sm:text-left w-full sm:pr-20'>
//             <h3 className='font-semibold text-2xl mb-2 text-secondary'>Customized Solutions</h3>
//             <p className='text-lg'>
//               Whether you need permanent placements or temporary staffing
//               solutions, we adapt our services to meet your evolving business needs.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* why choose wehire */}
//       <div className='py-20 px-16 bg-primary mb-20'>
//         <div className='mt-8'>
//           <h1 className='mb-8 font-bold text-5xl text-secondary'>Why Choose WeHire Group?</h1>
//           <div className='pl-2 md:pr-20'>
//             <h2 className='mb-2 md:mb-2 font-semibold text-3xl text-secondary'>Customized Search Solutions:</h2>
//             <p className='mb-8 text-lg md:mb-8 font-normal'>We understand that every client is unique. That&#39;s why we
//               offer personalized search strategies designed to find candidates who align perfectly with
//               your requirements and company culture. </p>
//             <h2 className='mb-2 md:mb-2 font-semibold text-3xl text-secondary'>Quality Service:</h2>
//             <p className='mb-8 text-lg md:mb-8 font-normal'>Our dedicated team is committed to delivering exceptional service at
//               every step of the hiring process. We prioritize your satisfaction and strive to exceed your
//               expectations. </p>
//             <h2 className='mb-2 md:mb-2 font-semibold text-3xl text-secondary'>Rapid Placement:</h2>
//             <p className='mb-8 text-lg md:mb-8 font-normal'>Time is valuable. We streamline the hiring process to ensure you
//               receive qualified candidates promptly, minimizing downtime and maximizing
//               productivity </p>
//           </div>
//         </div>
//       </div>
//       {/* <p>
//         Client Success Stories
//         Discover how WeHire Group has empowered businesses like yours to thrive through strategic
//         staffing solutions. Read our success stories and learn how we can elevate your team.
//         Contact Us
//         Ready to elevate your hiring process? Contact WeHire Group today to discuss your staffing
//         requirements. Let us partner with you to build a stronger, more capable team.
//       </p> */}

//       {/* Specialties */}
//       <div className='my-10'>
//         <div className=' md:w-1/2 mx-10 md:mx-20' >
//           {/* layout='responsive' */}
//           <img src='/images/Home/Specialties.png' alt="Our Process photo" width={400} height={400} />
//           <hr className="my-12 border-secondary border-2 dark:border-secondary" />
//           <p className=' text-secondary font-semibold text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
//         </div>
//         <div>
//           <ImageSlide />
//         </div>
//       </div>

//       {/* Contact Form */}
//       <div className='bg-primary py-20' id='homePageContactForm'>
//         {/* <h1 className='mb-8 font-bold text-5xl text-secondary text-center'>Contact Us!</h1> */}
//         <Contact />
//       </div>
//     </main>
//   )
// }

// import pbp from '/images/Home/pbp-1024x429.png'
// import ourProcess from 'c'
// import specialties from '/images/Home/Specialties.png'
// import phone from '/images/Home/phone.png'
// import referral from '/images/Home/referral.png'

// export default function Home() {
//   return (
//     <main>
//       {/* pbp landing */}
//       <div className="pt-20 bg-primary bg-cover bg-no-repeat xl:bg-[url('../public/images/Home/WH-hdr-11.png')]">
//         <div className="h-full p-10 flex items-center mt-20">
//           <div className='mx-auto lg:w-5/12 my-10 lg:ml-32'>
//             <img src='/images/Home/pbp-1024x429.png' alt='we hire big 4 logo' width={600} height={400} />
//             <hr className='mt-10 border-t-4 border-lightBlue' />
//             <p className="text-secondary block mt-10 font-semibold text-lg">At our core, WeHire Group wants to make a difference in
//               people&apos;s careers. We provide professionals with the tools to achieve their goals and connect clients with motivated
//               individuals that impact their business.</p>
//           </div>
//         </div>
//       </div>

//       {/* job search and employer banners */}
//       <div className='flex justify-center flex-col md:flex-row'>
//         <div className='bg-lightBlue rounded-lg -translate-y-10 md:w-1/2 md:mx-10 mx-3 my-3'>
//           <h3 className='text-white text-5xl md:text-6xl font-bold md:ml-8 p-3 mt-6'>Job Search</h3>
//           <button className='text-white text-md font-semibold border-2 rounded-lg md:ml-11 p-3 m-3 mb-6 transition ease-in hover:bg-white hover:text-lightBlue'>Find Opportunities</button>
//         </div>
//         <div className='bg-secondary rounded-lg -translate-y-10 md:w-1/2 md:mx-10 mx-3 my-3'>
//           <h3 className='text-white text-5xl md:text-6xl font-bold md:ml-8 p-3 mt-6'>Employer</h3>
//           <button className='text-white text-md font-semibold border-2 rounded-lg md:ml-11 p-3 m-3 mb-6 transition ease-in hover:bg-white hover:text-secondary'><a href="/">Find Top Talent</a></button>
//         </div>
//       </div>

//       {/* Our Process */}
//       <div className="flex flex-col items-center justify-center">
//         <div className='mt-40 mb-20'>
//           <div className="mx-10">
//             <img src='/images/Home/OurProcess.png' alt="Our Process photo" width={500} height={500} />
//           </div>
//         </div>

//         <div className='lg:w-1/2 w-3/4'>
//           <ol className="relative border-l border-gray-200 dark:border-gray-700">
//             <li className="mb-10 ml-6 ">
//               <span className="	absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -left-5 ring-2 ring-pink dark:ring-gray-900">
//                 <span className="text-blue-800 dark:text-blue-300 font-bold text-xl">1</span>
//               </span>
//               <h3 className="ml-4 flex items-center mb-1 text-3xl font-bold text-secondary dark:text-white">Call</h3>
//               <p className="ml-4 mb-4 text-base font-normal text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis..</p>
//             </li>
//             <li className="mb-10 ml-6 ">
//               <span className="	absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -left-5 ring-2 ring-pink dark:ring-gray-900">
//                 <span className="text-blue-800 dark:text-blue-300 font-bold text-xl">2</span>
//               </span>
//               <h3 className="ml-4 flex items-center mb-1 text-3xl font-bold text-secondary dark:text-white">Call</h3>
//               <p className="ml-4 mb-4 text-base font-normal text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis..</p>
//             </li>
//             <li className="mb-10 ml-6 ">
//               <span className="	absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -left-5 ring-2 ring-pink dark:ring-gray-900">
//                 <span className="text-blue-800 dark:text-blue-300 font-bold text-xl">3</span>
//               </span>
//               <h3 className="ml-4 flex items-center mb-1 text-3xl font-bold text-secondary dark:text-white">Call</h3>
//               <p className="ml-4 mb-4 text-base font-normal text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis..</p>
//             </li>
//             <li className="mb-10 ml-6 ">
//               <span className="	absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -left-5 ring-2 ring-pink dark:ring-gray-900">
//                 <span className="text-blue-800 dark:text-blue-300 font-bold text-xl">4</span>
//               </span>
//               <h3 className="ml-4 flex items-center mb-1 text-3xl font-bold text-secondary dark:text-white">Call</h3>
//               <p className="ml-4 mb-4 text-base font-normal text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis..</p>
//             </li>
//             <li className="mb-10 ml-6 ">
//               <span className="	absolute flex items-center justify-center w-10 h-10 bg-white rounded-full -left-5 ring-2 ring-pink dark:ring-gray-900">
//                 <span className="text-blue-800 dark:text-blue-300 font-bold text-xl">5</span>
//               </span>
//               <h3 className="ml-4 flex items-center mb-1 text-3xl font-bold text-secondary dark:text-white">Call</h3>
//               <p className="ml-4 mb-4 text-base font-normal text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis..</p>
//             </li>
//           </ol>
//         </div>
//       </div>

//       {/* Specialties */}
//       <div className='mt-20'>
//         <div className=' md:w-1/2 mx-10 md:mx-20' >
//           {/* layout='responsive' */}
//           <img src='/images/Home/Specialties.png' alt="Our Process photo" width={400} height={400} />
//           <hr className="my-12 border-secondary border-2 dark:border-secondary" />
//           <p className=' text-secondary font-semibold text-md'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
//         </div>
//         <div>
//           <ImageSlide />
//         </div>
//       </div>

//       {/* Referral Bonus */}
//       <div className='mt-40 mb-20'>
//         <div className='block lg:flex justify-center items-center'>
//           <div>
//             <img src='/images/Home/phone.png' alt="Our Process photo" width={500} height={500} />
//           </div>
//           <div className='mx-8 mt-3 lg:w-1/2'>
//             {/* layout='responsive' */}
//             <img src='/images/Home/referral.png' alt="Our Process photo" width={600} height={600} />
//             <p className='text-secondary font-semibold text-sm mt-10'>It&apos;s all in our name &ndash; We work with our network to Hire the most qualified candidates for our clients. That&apos;s why we offer a minimum industry-leading $1,000 referral bonus to anyone who helps fill our job openings for clients and up to $5,000 for our top positions.</p>
//             <button className='mt-5 border-2 rounded-md border-secondary text-sm text-secondary font-bold px-3 py-2'>Refer A Friend</button>
//           </div>
//         </div>
//       </div>
//     </main>
//   )
// }