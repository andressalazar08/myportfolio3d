import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import  { styles }  from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { github } from "../assets";

import { SectionWrapper } from '../hoc';
import { Link } from 'react-router-dom';
//``
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
                className="rounded-[20px] l:py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
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
      <div className="sm:flex flew-row ">
      <div>
      <motion.div variants={textVariant()}>

          <h2 className={`${styles.sectionHeadText} mt-[110px]`}>
          Overview
          </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("","", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Bsc in Industrial Engineer, Msc in Engineer and  Systems Engineering student.<br />
        I have participated in different web app projects, with different roles:
        <br /><div className="text-[cyan] flex flex-row justify-between">Fullstack developer, Product Owner and Project Manager.</div>

        <br />
        <span className="text-[cyan] ">Trailblazer</span> ranked in the salesforce ecosystem as <span className="text-[cyan] ">Adventurer</span>.
        <br />I'm a quick learner and have strong skills on leadership and communication.
        <br />
        <br />
        Contact me if you need a solution based on web technologies.
        <br />
        <br />
        <div className="text-[cyan] text-2xl">hi@andresfelipe.dev</div>
      </motion.p>
    </div>
      <motion.div variants={textVariant()}>
        <div className="mt-[170px] ml-[150px]">
            <Link
              onClick={()=>{}}
            >
              <ServiceCard  key="certs" index="1" title="Certitications and Badges" icon={github}/>
            </Link>
        </div>
      </motion.div>

      </div>
        {/* cards  */}

        {/* <div className="mt-20 flex flex-wrap gap-10">

            {services.map((service, index)=>(
              <ServiceCard key={service.title} index={index} {...service}/>
            ))}


        </div> */}



    </>
  )
}

export default SectionWrapper(About,"about");