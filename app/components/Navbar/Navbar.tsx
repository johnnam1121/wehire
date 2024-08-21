'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/wehire-logo.png";
import NavbarDropdown from "./Dropdown";
import { Squash as Hamburger } from 'hamburger-react';

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const scrollToDiv = () => {
    const element = document.getElementById('homePageContactForm');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="bg-primary w-full z-20">
      <div className="flex justify-between items-center mx-auto py-3">
        <Link href="/">
          <Image className="px-5 py-3" src={Logo} alt="dojo help desk logo" width={150} height={150} quality={100} />
        </Link>
        <div className="md:flex items-center justify-end">
          <button
            className="shadow bg-secondary hover:bg-gray-400 duration-200 focus:shadow-outline focus:outline-none text-primary font-bold py-2 px-2 sm:px-6 rounded mr-4"
            onClick={scrollToDiv}>
            Contact
          </button>
          {/*   <div className={`md:hidden flex items-center justify-end mr-2`} onClick={toggleDropdown}>
            <button className={`rounded-full bg-secondary w-10 h-10 flex justify-center items-center`}>
              <div className='flex items-center justify-center'>
                {isOpen ?
                  <Hamburger color="#f0f0f0" size={20} toggled={isOpen} toggle={setIsOpen} />
                  :
                  <Hamburger color="#f0f0f0" size={20} toggled={isOpen} toggle={setIsOpen} />
                }
              </div>
            </button>
          </div>
          */}
          {/* <div className={`md:flex ${isDropdownOpen ? 'flex-col mr-2 mt-3' : 'hidden'} ${isDropdownOpen ? 'md:ml-auto text-right' : ''}`}>
            <NavbarDropdown />
            <p className="mx-5 text-md font-semibold">Find Jobs</p>
            <p className="mx-5 text-md font-semibold">About Us</p>
            <button
              className="shadow bg-secondary hover:bg-gray-400 duration-200 focus:shadow-outline focus:outline-none text-primary font-bold py-2 px-2 sm:px-6 rounded"
              onClick={scrollToDiv}>
              Contact
            </button>
          </div> */}
        </div>
      </div>
    </nav >
  );
}