"use client"

import React, {useEffect, useState} from 'react';
// import { Link } from 'react-router-dom';

import Link from 'next/link';
import Image from 'next/image';

import { navLinks } from '../constants';
import {logoR, menu, close} from '../assets';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className ="paddingX w-full flex items-center !py-3 fixed top-0 z-20 bg-primary">
      <div className = "w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link href='/'
          className="flex items-center gap-2"
          onClick={()=>{
            setActive("");
            window.scrollTo(0,0);}}>
        <Image src={logoR} alt="logo" className="w-9 h-9 object-obtain"/>
        <p className="text-white text-[18px] font-bold cursor-pointer flex"> Vicharo &nbsp;
          <span className="sm:block hidden">| Robotic Enthuiastic</span>
          </p>
          </Link>
        <ul className="list-none hidden sm:flex gap-10 flex-row">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white": "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <Image 
            src={toggle ? close:menu}
            alt="menu"
            className="w-[28px] h-[28px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? "hidden" : "flex"} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
              <ul className="list-none flex gap-4 flex-col justify-end items-start">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white": "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);}}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              </ul>
            </div>
        </div>
      </div>

    </nav>
  )
}

export default Navbar