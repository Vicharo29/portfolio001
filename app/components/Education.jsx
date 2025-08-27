"use client"

import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import {motion} from 'framer-motion';

import Image from 'next/image';

import 'react-vertical-timeline-component/style.min.css';

import {educations} from '../constants';
import {SectionWrapper} from '../hoc';
import { textVariant } from '../utils/motion';
import { exp } from 'three/tsl';

const EducationCard = ({education}) => 
  (<VerticalTimelineElement
    contentStyle = {{background: '#1d1836', color: '#fff'}}  
    contentArrowStyle={{borderRight: '7px solid  #232631'}}
    date={education.date}
    iconStyle={{background: education.iconBg}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <Image 
          src={education.icon} 
          width={28}
          height={28}
          alt={education.company_name} 
          className='w-[60%] h-[60%] object-contain'/>
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">
        {education.school}
      </h3>
      <p className="text-secondary text-[16px] font-semibold" style={{margin:0}}>
        {education.company_name}
      </p>
    </div>
    <ul className="!mt-5 list-disc !ml-5 !space-y-2">
      {education.points.map((point, index)=>(
        <li key={`education-point-${index}`}
          className="text-white-100 text-[14px] !pl-1 tracking-wider">
          {point}
          </li>
      ))}
      
    </ul>
    
  </VerticalTimelineElement>
  )


const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">
          Where and what I have studied so far
        </p>
        <h2 className="sectionHeadText">
          Education.
        </h2>
      </motion.div>

      <div className="!mt-20 flex flex-col">
        <VerticalTimeline>
          {educations.map((education, index)=>(
            <EducationCard key={index} education={education}/>
          ))}
        </VerticalTimeline>

      </div>

    </>
  )
}

export default SectionWrapper(Education, "education");