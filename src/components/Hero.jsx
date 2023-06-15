import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import  Computers  from './canvas/Computers'
//``
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX}
      absolute inset-0
      top-[1px]
      max-w-7xl mx-auto flex
      flex-row items-start gap-5
      `} >
        <div className="flex flex-col justify-center items-center ">
            <div className="w-5 h-5 rounded-full bg-white" />
            <div className="w-1 sm:h-78 h-40 bg-gradient-to-b from-cyan-500  to-white-500"/>
        </div>
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="text-[#49ade3]"> Felipe Salazar Ramos</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I'm a Fullstack web developer with experience in the whole software development lifecycle
              </p>
            </div>
      </div>

            <Computers />

    </section>
  )
}

export default Hero