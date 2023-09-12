'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/wehire-logo.png";
import { Squash as Hamburger } from 'hamburger-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const parentVariants = {
    visible: { transition: { staggerChildren: 0.15 } }
  };
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };
  const sidebarVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div>
      <nav className="bg-primary">
        <div className="flex justify-between">
          <Link href="/">
            <Image className="p-5" src={Logo} alt="dojo help desk logo" width={150} height={150} quality={100} />
          </Link>
          <div className='p-5'>
            <button onClick={toggleNavbar}>
              <div className='rounded-full bg-secondary w-10 h-10 flex justify-center items-center'>
                <div className='flex items-center justify-center'>
                  {isOpen ?
                    <Hamburger color="#f0f0f0" size={28} toggled={isOpen} toggle={setIsOpen} />
                    :
                    <Hamburger color="#f0f0f0" size={28} toggled={isOpen} toggle={setIsOpen} />
                  }
                </div>
              </div>
            </button>
          </div >
        </div>
      </nav>
      <div>
        <AnimatePresence>
          {isOpen ?
            // <div className={`fixed left-0 w-screen h-screen bg-primary z-50 flex justify-center items-center transition-opacity duration-100 ease-in ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <motion.div
              className="fixed left-0 w-screen h-screen bg-primary z-50 flex justify-center items-center"
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.25 }}
              variants={sidebarVariants}
            >
              {/* <div className={`fixed left-0 w-screen h-screen bg-primary z-50 flex justify-center items-center ${isOpen ? 'transition-opacity duration-1000 ease-in opacity-100' : 'transition-opacity duration-1000 ease-out opacity-0'}`}> */}
              <div className="block text-left">
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={parentVariants}
                >
                  <motion.div variants={childVariants}>
                    <Link href='/'>
                      <p className="text-secondary text-5xl font-bold mt-3 hover:text-custom transition ease-in duration-300">
                        Big4
                      </p>
                    </Link>
                  </motion.div>
                  <motion.div variants={childVariants}>
                    <Link href='/'>
                      <p className="text-secondary text-5xl font-bold mt-3 hover:text-custom transition ease-in duration-300">
                        Consulting
                      </p>
                    </Link>
                  </motion.div>
                  <motion.div variants={childVariants}>
                    <Link href='/'>
                      <p className="text-secondary text-5xl font-bold mt-3 hover:text-custom transition ease-in duration-300">
                        Blog Articles
                      </p>
                    </Link>
                  </motion.div>
                  <motion.div variants={childVariants}>
                    <h4 className="text-secondary mt-5 font-bold text-lg">Our Office</h4>
                  </motion.div>
                  <motion.div variants={childVariants}>
                    <p className="text-secondary font-medium mt-1 text-md">708 Main St,<br />
                      Houston, TX<br />
                      77002</p>
                  </motion.div>
                  <motion.div variants={childVariants}>
                    <p className="text-secondary font-medium mt-5 text-md">P: <a href="tel:(832) 455-8780">(832) 455-8780</a></p>
                  </motion.div>
                  <motion.div variants={childVariants}>
                    <p className="text-secondary font-medium mt-1 text-md">E: <a href="mailto: yang.nam@wehiregroup.com">yang.nam@wehiregroup.com</a></p>
                  </motion.div>
                </motion.p>
              </div>
              {/* </div> */}
            </motion.div>
            :
            <>
              <motion.div
                className="fixed left-0 w-screen h-screen bg-primary z-50 flex justify-center items-center"
                initial="visible"
                animate="hidden"
                exit="hidden"
                variants={sidebarVariants}
                transition={{ duration: 0.25 }}
                >
              </motion.div>
            </>
          }
        </AnimatePresence>
      </div>
    </div>
  );
}
