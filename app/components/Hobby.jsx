"use client"

import { Suspense, useState } from 'react';
import {motion} from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Image from 'next/image';

import CanvasLoader from './Loader';

import { textVariant } from '../utils/motion';
import {SectionWrapper} from '../hoc';

import {hobby} from '../constants';
import Developer from './canvas/Developer';

// update the color of the bg and text

// update the contents

// update the model


const Hobby = () => {

  const [animationName, setAnimationName] = useState('idle');


  return (
    <section className="c-space my-20">
      <motion.div 
        initial="hidden"
        whileInView="show"
      variants={textVariant()}>
        <p className="sectionSubText">
          what I like
        </p>
        <h2 className="sectionHeadText">
          Hobby.
        </h2>
      </motion.div>

      <div className='work-container'>
        <div className='work-canvas'>
          <Canvas>
          <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

              {/* <Suspense fallback={<CanvasLoader/>}> */}
              <Suspense>
                <Developer position-y={-3} scale={3} animationName={animationName} />
              </Suspense>
          </Canvas>
        </div>

        <div className='work-content'>
        <div className="sm:py-10 !py-5 sm:px-5 !px-2.5">
              {hobby.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group">
                  <div className="flex flex-col h-full justify-start items-center !py-2">
                    <div className="work-content_logo">
                      <Image src={item.icon} className='scale-[0.7]' alt="" />
                    </div>

                    <div className="work-content_bar" />
                  </div>

                  <div className="sm:!p-5 !px-2.5 !py-5">
                    <p className="font-bold text-white text-[24px]">{item.name}</p>
                    <p className="text-sm !mb-5 text-secondary">
                      {item.pos}
                    </p>
                    <p className="text-secondary group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
        </div>

      </div>

    </section>
  );
}

export default SectionWrapper(Hobby, "hobby");