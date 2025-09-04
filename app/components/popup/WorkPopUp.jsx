import {motion} from 'motion/react';
import { useEffect, useContext } from "react";

import Image from 'next/image';

import { popUpContext } from '../Works';

const WorkPopUp = ({work}) => {

    // console.log(work)
    const { isOpen, setIsOpen, selectedWork, setSelectedWork } = useContext(popUpContext);

    const handleClose = () => {
        setIsOpen(false);
        setSelectedWork(null);
    }

    useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-100 bg-black-200 bg-opacity-50" onClick={()=>handleClose()}>
        <motion.div
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.7, opacity: 0 }}
        transition={{ type: "spring", duration: 0.4 }}
        className="relative bg-primary !p-[1px] rounded-2xl w-full lg:max-w-4xl sm:max-w-2xl max-w-md shadow-card green-pink-gradient"
        onClick={e => e.stopPropagation()}
      >
        <div className='bg-primary !p-6 rounded-2xl'>
            <button
            className="absolute top-2 right-4 text-xl text-gray-400 hover:text-white hover:scale-120 hover:rotate-90 transition-transform duration-200 hover:cursor-pointer scale-110"
            onClick={()=>handleClose()}
            >
            &times;
            </button>

            <div className='w-full h-[240px]'>
                <Image 
                    src={selectedWork.image}
                    alt={selectedWork.name} 
                    className='w-full h-full object-cover rounded-2xl'/>
            </div>
            <div className='!mt-5'>
                <h2 className="text-white font-bold text-2xl !mb-2">
                    {selectedWork?.name || "Work Experience"}
                </h2>
                <p className='text-secondary'>
                    {selectedWork?.description || "I have worked on various projects using Next.js, React, and Tailwind CSS."}
                </p>
            </div>
        </div>
        </motion.div>
    </div>
  )
}

export default WorkPopUp
