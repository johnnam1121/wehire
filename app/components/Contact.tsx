'use client'
import { useForm, ValidationError } from '@formspree/react';
import { useRef, useState } from 'react';

export default function Contact() {
  const form = useRef();
  const formRef = useRef<HTMLFormElement>(null);
  const formKey = process.env.NEXT_PUBLIC_FORM_KEY;
  if (!formKey) {
    throw new Error('NEXT_PUBLIC_FORM_KEY is not defined');
  }
  const [state, handleSubmit] = useForm(formKey);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFiles(Array.from(event.target.files));
    }
  };

  if (state.succeeded) {
    return (
      <div className="w-full py-10 dark:bg-gray-100 flex">
        <div className="lg:w-[60%] sm:w-[80%] xs:w-[90%] mx-auto flex gap-8 items-center justify-center">
          <div className="flex flex-col gap-4 text-black dark:text-black px-4 py-10 rounded-lg border border-secondary shadow-xl shadow-slate-900/30">
            <h5 className="text-sm text-black font-semibold">WeHire Group</h5>
            <div className="w-full flex gap-2 items-center justify-around">
              <div className="text-5xl font-semibold uppercase font-serif">Thank You</div>
              <hr className="w-[50%] h-1 rounded-full border-t-kashBlue-600 bg-kashBlue-600" />
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget justo sit amet massa hendrerit bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin.
            </p>
            {/* <div className="flex gap-4 justify-center">
            <a href="/" className="w-full px-4 py-1 border-2 border-kashBlue-600 rounded-sm text-center flex items-center justify-center duration-200 hover:bg-kashBlack-100 hover:text-primary">
              Return to homepage
            </a>
            <a href="https://app.joinit.com/o/kash" target="blank" className="w-full text-primary px-4 py-1 bg-kashBlue-600 rounded-sm text-center flex items-center justify-center duration-200 hover:bg-kashBlack-100">
              Become a Member
            </a>
          </div> */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center">
      <div className="max-w-screen-lg mx-auto p-5">
        <div className="grid grid-cols-1 md:grid-cols-12 border border-secondary rounded shadow-lg shadow-secondary/30">
          <div className="bg-secondary md:col-span-4 p-10 text-primary">
            <p className="mt-4 text-sm leading-7 font-regular uppercase">Contact</p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
              Get In <span className="text-kashBlue-300">Touch</span>
            </h3>
            <p className="mt-4 leading-7 text-primary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eget justo sit amet massa hendrerit bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin.
            </p>
            <div className="flex items-center mt-5">
              <span className="text-sm">House #14, Street #12, something Road, Houston, Texas.</span>
            </div>
            <div className="flex items-center mt-5">
              <span className="text-sm">+832 100 1000</span>
            </div>
            <div className="flex items-center mt-5">
              <span className="text-sm">some information?</span>
            </div>
          </div>
          <form ref={formRef} className="md:col-span-8 p-10" onSubmit={handleSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                  First Name
                </label>
                <input
                  name="firstName"
                  className="placeholder-secondary appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-primary focus:border-gray-500"
                  id="grid-first-name" type="text" placeholder="Jane" required
                />
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                  Last Name
                </label>
                <input
                  name="lastName"
                  className="placeholder-secondary appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-primary focus:border-gray-500"
                  id="grid-last-name" type="text" placeholder="Doe" required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                  Email Address
                </label>
                <input
                  name="email"
                  className="placeholder-secondary appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-primary focus:border-gray-500"
                  id="grid-email" type="email" placeholder="********@*****.***" required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            {/* Message */}
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                  Your Message
                </label>
                <textarea
                  name="message"
                  placeholder='Something awesome!'
                  rows={10}
                  className="placeholder-secondary appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-primary focus:border-gray-500"
                  id="grid-message" required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>
              <div className="flex justify-between w-full px-3">
                <input
                  type="file"
                  id="myfile"
                  name="myfile"
                  multiple
                  className='hidden'
                  onChange={handleFileChange}
                />
                <label
                  className='py-2 px-2 sm:px-6 shadow bg-primary hover:bg-gray-400 duration-200 focus:shadow-outline focus:outline-none text-secondary font-bold rounded border border-secondary'
                  htmlFor='myfile'>Attach Files</label>
                <button
                  className="py-2 px-2 sm:px-6 shadow bg-secondary hover:bg-gray-400 duration-200 focus:shadow-outline focus:outline-none text-primary font-bold rounded"
                  type="submit"
                  disabled={false}
                >
                  Send Message
                </button>
              </div>
              <div className="w-full px-3 mt-2">
                {selectedFiles.length > 0 && (
                  <ul className='text-sm'>
                    {selectedFiles.map((file, index) => (
                      <li key={index} className="text-gray-700">
                        {file.name}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}