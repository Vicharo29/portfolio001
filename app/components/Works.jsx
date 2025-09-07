"use client"

import {Tilt} from 'react-tilt';

// import {motion} from 'framer-motion';
import {motion} from 'motion/react';
import {useState, createContext} from 'react';

import Image from 'next/image';

import {github} from '../assets';
import { SectionWrapper } from '../hoc';
import {projects} from '../constants';
import {fadeIn, textVariant} from '../utils/motion';

import WorkPopUp from './popup/WorkPopUp';

// const github = "./assets/github.png"

export const popUpContext = createContext();

const ProjectCard = ({project}) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(null);

  console.log(project.name)
  const popUpValue = {
    isOpen,
    setIsOpen,
    selectedWork,
    setSelectedWork
  }

  const handleCardClick = (work) => {
    setSelectedWork(work);
    setIsOpen(true);
  };

  return (
    <popUpContext.Provider value={popUpValue}>
    <motion.div 
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeIn("up", "spring", project.index*0.5, 0.7)}>
      <Tilt 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary !p-5 rounded-2xl sm:w-[360px] w-full">
          <div className='relative w-full h-[230px]'>
            <Image 
             src={project.image} 
             alt={project.name} 
             className='w-full h-full object-cover rounded-2xl'/>
             <div className='absolute !inset-0 flex justify-end !m-3 card-Image_hover'>
                <div onClick={()=> window.open(project.source_code_link, '_blank')}
                  className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                    <Image src={github} alt="github" className='w-1/2 h-1/2 object-contain'/>
                </div>
             </div>
          </div>

          <div className='!mt-5'>
            <h3 className='text-white font-bold text-[24px] hover:cursor-pointer' onClick={() => handleCardClick(project)}>
              {project.name}
            </h3>
            <p className='!mt-2 text-secondary text-[14px] selection:bg-[#915eff] selection:text-white'>
              {project.description}
            </p>
          </div>

          <div className='!mt-4 flex flex-wrap gap-2'>
            {project.tags.map((tag)=>(
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>
                  #{tag.name}
              </p>
            ))}

          </div>
      </Tilt>

      {isOpen && <WorkPopUp work={selectedWork}/>}

    </motion.div>
    </popUpContext.Provider>
  )
}


const Works = () => {
  return (
    <section className='relative'>
      <motion.div 
       initial="hidden"
       whileInView="show"
       variants={textVariant()}>
        <p className="sectionSubText">
          My Work
        </p>
        <h2 className="sectionHeadText">
          Projects.
        </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn("","",0.1, 1)}
          className="!mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Below are selected projects I have worked on, showcasing the technologies and skills
             I have developed over time. I am continually seeking new challenges and opportunities 
             to grow in both robotics and software development. For additional details—such as source 
             code and demo videos—please click the icon in the upper right corner of each project. 
             Projects marked with the #research tag were completed as part of academic research during my studies; thus,
             some of their content may be limited due to research ethics.
        </motion.p>
      </div>

      <div className="!mt-20 flex flex-wrap gap-7">
        {projects.map((project, index)=>(
          <ProjectCard key={`project-${index}`} index={index} project={project}/>
        ))}
      </div>
    </section>
  )
}

export default SectionWrapper(Works, "projects");