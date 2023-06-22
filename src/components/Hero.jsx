import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import  Computers  from './canvas/Computers';
import { SectionWrapper } from '../hoc';
import { projects } from "../constants";
import me from "../assets/me.jpg";

//``
const Hero = () => {
  return (
    <>
      <div>

        <div className="max-w-7xl mx-auto flex flex-row items-start gap-5">
          <div className="flex flex-col justify-center items-center ">
              <div className="w-5 h-5 rounded-full bg-white" />
              <div className="w-1 sm:h-78 h-40 bg-gradient-to-b from-cyan-500  to-white-500"/>
          </div>

          <div>
                <h1 className={`${styles.heroHeadText} text-white`}>
                  Hi, I'm <span className="text-[cyan]"> Felipe Salazar Ramos</span>
                </h1>
                <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                Fullstack web developer<br /> with experience in the whole software development lifecycle
                </p>
          </div>


            <div className="relative w-[300px] h-[180px] l:ml-[80px] xl:ml-[100px] sm:ml-[50px] xs:ml-[10px] mb-[10px]">
                  <img
                    src={me}
                    alt="me"
                    className="w-full h-full object-cover rounded-2xl"
                  />
            </div>



      </div>

        <div className="absolute mt-[20px] xl:ml-[600px] l:ml-[600px] sm:ml-[250px]  xs:ml-[200px] flex justify-center items-center">
                <a href="#contact">
                  <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                              y:[0,24,0]
                            }}

                            transition={{
                              duration:1.5,
                              repeat: Infinity,
                              repeatType: 'loop'
                            }}

                            className="w-3 h-3 rounded-full bg-[cyan] mb-1"

                        />


                  </div>
                </a>
        </div>
      </div>

            {/* <Computers /> */}



            </>
  )
}

export default SectionWrapper(Hero,"")