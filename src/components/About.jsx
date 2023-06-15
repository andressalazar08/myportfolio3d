import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import  { styles }  from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';



const ServiceCard = ({ index, title, icon }) =>{
  return (

      <Tilt className="xs:w-[250px] w-full">
          <motion.div
            variants={fadeIn("right", "spring", 0.5*index, 0.75 )}
            className="w-full p-[1px] rounded-[20px] shadow-card"

          >

              <div
                options= {{
                  max:45,
                  scale: 1,
                  speed: 450
                }}
                style={{background: "linear-gradient(#20e8e8, #207ee8)" }}
                className="rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
              >

                <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
                <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
              </div>
          </motion.div>

      </Tilt>
  )
}


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>
            Introduction
          </p>
          <h2 className={styles.sectionHeadText}>
          Overview
          </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm Industrial Engineer and Systems Engineering student with experience in Javascript, Python and Java.
        I had participated in different web app projects some of them as Product Owner and some as developer.
        <br />
        I also have been a trailblazer since 2023 ranked in the salesforce ecosystem.
        <br />I'm a quick learner and have strong skills on leadership and communication.
        <br />
        Don't heasitate to contact me if you need a solution based on web technologies.
      </motion.p>

        {/* cards  */}

        <div className="mt-20 flex flex-wrap gap-10">

            {services.map((service, index)=>(
              <ServiceCard key={service.title} index={index} {...service}/>
            ))}


        </div>



    </>
  )
}

export default About