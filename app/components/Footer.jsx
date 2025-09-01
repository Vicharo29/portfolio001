'use client'

import React from 'react'
import Link from 'next/link';

import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <div className='footer'>
      <div className='w-full flex justify-center items-center max-w-7xl md:mx-auto gap-10 md:justify-between lg:justify-start'>
           <p className="text-white text-sm eng">
            {year} &copy; Vicharo
           </p>
           <div className='pb-1 flex flex-row gap-3'>
            <Link href="https://www.instagram.com/vicharo/" target="_blank" className="text-white">
                <FaInstagram className='scale-125'/>
            </Link>
            <Link href="https://www.linkedin.com/in/vicharo/" target="_blank" className="text-white">
                <FaLinkedin className='scale-125'/>
            </Link>
           </div>
      </div>
    </div>
  )
}

export default Footer;
