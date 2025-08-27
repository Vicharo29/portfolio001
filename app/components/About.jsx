"use client"

import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion'

import Image from 'next/image'

import {services} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'

import { SectionWrapper } from '../hoc'

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5*index, 0.75)}
        className='w-full green-pink-gradient !p-[1px] rounded-[20px] shadow-card'>
          <div
            options={{
              max:25,
              scale:1,
              speed:450
            }}
            className='bg-tertiary rounded-[20px] p-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <Image src={icon} alt={title} width={64} height={64}
              className='w-16 h-16 object-contain'/>
              <h3 className='text-white text-[20px] font-bold text-center'>
                {title}
              </h3>
          </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">
          Introduction
        </p>
        <h2 className="sectionHeadText">
          Overview.
        </h2>
      </motion.div>

      <motion.p 
        variants={fadeIn("","",0.1, 1)} 
        className="!mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I am a robotic enthusiast who has a background in mechanical engineering and is passionate about robots 
        and doing projects related to robotics. I have been working on 
        various projects that involve robotics and automation.
        I have experience in designing, building, and programming robots for different applications, using
        3D CAD, microcontrollers, C++ and Python.         
        I am currently a junior software engineer at a medical device company.
        I am always looking for new challenges and opportunities to learn and grow in 
        the field of both robotics and software.
      </motion.p>

      <div className="!mt-20 flex flex-wrap gap-10">
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index}{...service}/>
        ))}
      </div>

    </section>
  )
}

export default SectionWrapper(About, "about")