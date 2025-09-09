import {motion} from 'motion/react';
import { useEffect, useContext } from "react";

import Image from 'next/image';

import { popUpContext } from '../Works';
import { i } from 'maath/dist/index-0332b2ed.esm';

const WorkPopUp = ({work}) => {

    // console.log(work)
    const { isOpen, setIsOpen, selectedWork, setSelectedWork } = useContext(popUpContext);

    const handleClose = () => {
        setIsOpen(false);
        setSelectedWork(null);
    }

    useEffect(()=>{
        console.log("isOpen changed:", isOpen);
        if (isOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        // Cleanup in case component unmounts while popup is open
        return () => {
        document.body.classList.remove("overflow-hidden");
        };
  }, [isOpen]);

  return (
    <div className="fixed top-10 inset-0 flex items-center justify-center z-49 bg-black-200 bg-opacity-50" onClick={()=>handleClose()}>
        <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        transition={{ type: "spring", duration: 0.7 }}
        className="relative bg-primary !p-[1px] rounded-2xl lg:max-w-4xl sm:max-w-2xl max-w-md shadow-card green-pink-gradient z-50 max-h-[80vh] overflow-y-auto scrollbar-hide"
        onClick={(e) => e.stopPropagation()}
      >
        <div className='bg-primary !p-7 rounded-2xl'>
            <button
            className="absolute top-2 right-4 text-xl text-gray-400 hover:text-white hover:scale-120 hover:rotate-90 transition-transform duration-200 hover:cursor-pointer scale-110"
            onClick={()=>handleClose()}
            >
            &times;
            </button>

            <div className='flex flex-col sm:grid sm:grid-cols-2 sm:gap-7 sm:items-stretch sm:h-full sm:overflow-hidden'>
                <div className='w-full h-full'>
                    <Image 
                        src={selectedWork.image}
                        alt={selectedWork.name} 
                        className='w-full max-h-50 sm:max-h-70 object-cover rounded-2xl'/>
                </div>

                <div className='!mt-5 sm:!mt-0'>
                    <h2 className="text-white font-bold text-2xl !mb-2">
                        {selectedWork?.name || "Work Experience"}
                    </h2>
                    {/* <div className='overflow-y-auto max-h-40 scrollbar-hide sm:max-h-60'>
                        <p className='text-secondary text-justify'>
                            {selectedWork?.description || "I have worked on various projects using Next.js, React, and Tailwind CSS."}
                        </p>
                    </div> */}
                    {/* <ul className='overflow-y-auto max-h-45 scrollbar-hide sm:max-h-60'>
                        {selectedWork?.popup.map((item, index) => (
                            <li key={`popup-${index}`}>
                                <p className='text-secondary text-justify'>
                                    <span className='text-white font-semibold'>
                                        {item.type}
                                    </span> 
                                    : {item.content}
                                </p>
                            </li>
                        ))}
                    </ul> */}

                    <div className='overflow-y-auto max-h-45 scrollbar-hide sm:max-h-60 w-full'>
                        {selectedWork?.popup.map((item, index) => (
                            <div className="grid grid-cols-5 sm:grid-cols-4 gap-2 sm:gap-1" key={`popup-${index}`}>
                                <p className='text-white'>
                                    {item.type}
                                </p>
                                <p className='text-secondary text-justify col-span-4 sm:col-span-3'>
                                    : {item.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
    </div>
  )
}

export default WorkPopUp;
