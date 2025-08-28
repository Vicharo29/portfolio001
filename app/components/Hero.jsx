"use client"

import {motion} from 'framer-motion';

import { ComputersCanvas} from './canvas';

const words = [
  {text: "explore"},
  {text: "create"},
  {text: "innovate"}
]

const Hero = () => {

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`paddingX absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        <div className='flex flex-col gap-7'>
          <h1 className="heroHeadText">Hi, I'm <span className="text-[#915eff]">Vicharo </span><span className="sectionHeadText waving-hand sm:hidden">👋</span></h1>

          <p className="heroSubText text-wrap">
            I'm a Robotics Enthusiast who loves 
            <br className="sm:block"/>to
            <span className='slide'>
              <span className='wrapper'>
                {words.map((word)=>(
                  <span key={word.text} className='flex items-center md:!gap-3 !gap-1 pb-2'>
                    <span>
                      {word.text}
                    </span>
                  </span>
                ))}
              </span>
            </span>
            <span className="invisible">
              innovation
            </span>
            <span>
              new ideas.
            </span>
          </p>
        </div>
      </div>

      <div className='paddingX absolute inset-0 xs:translate-y-15'>
        <ComputersCanvas/>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2">
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 bg-secondary rounded-full mb-1"
              />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero