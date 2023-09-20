import Image from 'next/image'
import React from 'react'
import consultingImage from '../../../public/images/Consulting/consultingImage.jpg'
import WHConsulting from '../../../public/images/Consulting/WHConsulting.png'
import OurServices from '../../../public/images/Consulting/OurServices.png'
import Dropdown from '@/app/specialties/consulting/Dropdown'
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
          <div className='w-4/6'>
            <Image className='py-10 mt-10' src={OurServices} alt='OurServices logo' width={500} height={500} />
            <Dropdown
              title="HR On Call"
              content={['An experienced consultant available just a phone call away for questions and solutions']}
            />
            <Dropdown
              title="Interim HR Support"
              content={['An experienced HR professional provided to you for on site support on an interim or longer term basis']}
            />
            <Dropdown
              title="Risk and Compliance"
              content={{
                'Policy & Procedure creation and administration': ['Handbooks', 'Individual Policies'],
                'Wage and Hour': ['FLSA (Fair Labor Standards Act)'],
                'Benefits': ['FMLA (Family Medical Leave Act)', 'ACA (Affordable Healthcare Act) training and filing', 'HIPPA (Health Insurance Portability & Accountability Act)', 'ERISA (Employee Retirement Income Security Act)', 'COBRA (Consolidated Onmibus Budget Reconciliation Act) )'],
                'Immigration': ['Hiring and onboarding non citizens)'],
                'Workplace Safety': ['OSHA (Occupational Safety and Health Administration) ', 'Workers Compensation'],
                'Workplace Discrimination Law': ['ADA (Americans with Disabilities Act) ', 'Covid-19 FFCRA (Families First Coronavirus Act)'],
              }}
            />
            <Dropdown
              title="Workforce Planning"
              content={['Analysis', 'Forecasting', 'Organizational Design', 'Succession Planning']}
            />
            <Dropdown
              title="Compensation"
              content={["Assessments", "Salary Grading"]}
            />
            <Dropdown
              title="Training and Development"
              content={["Manager 101", "Leadership development", "Employee Trainings"]}
            />
            <Dropdown
              title="Performance Management"
              content={["Employee Relations", "Documentation", "Appraisals", "Terminations", "Reductions in force"]}
            />
            <Dropdown
              title="HR Systems Selection & Implementation"
              content={["HRIS (Human Resource Information Systems)", "ATS (Applicant Tracking Systems)", "ERP (Enterprise Resource Planning)", "LMS (Learning Management System)"]}
            />
            <Dropdown
              title="Diversity & Inclusion"
              content={["Education", "Affirmative action plans",]}
            />
            <Dropdown
              title="Culture Initiatives"
              content={["Rewards and Recognition in the workplace", "Core Values creation",]}
            />
            <Dropdown
              title="Mergers and Aquisitions"
              content={["Evaluations", "HR Due Diligence", "Announcement", "Transition"]}
            />
          </div>
        </div>
      </div>

      {/* schedule a call */}

      <div>
        <div className="bg-lightGreen flex flex-col md:flex-row md:justify-around py-24 mt-36">
          <Image className="w-3/4 md:w-1/2 lg:w-1/4 mx-auto" src={SpecializedSupport} alt="SpecializedSupport logo" />
          <button className="mt-4 border-2 border-secondary md:py-4 md:px-8 md:w-1/4 font-bold w-1/2 mx-auto py-4"><a href="tel:(832) 455-8780">Schedule A Call</a></button>
        </div>
      </div>

    </main >
  )
}
