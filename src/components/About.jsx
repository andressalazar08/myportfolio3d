import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import  { styles }  from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { github } from "../assets";

import { SectionWrapper } from '../hoc';
import { Link } from 'react-router-dom';
import Modal from './Modal';
//``
const ServiceCard = ({ index, title, icon }) =>{
  return (


          <motion.div
            variants={fadeIn("right", "spring", 0.5*index, 0.75 )}
            className="w-full rounded-[20px] "

          >

              <div
                options= {{
                  max:45,
                  scale: 1,
                  speed: 450
                }}
                style={{background: "linear-gradient(#20e8e8, #207ee8)" }}
                className="rounded-[20px] min-h-[180px] flex justify-evenly items-center flex-col"
              >
                <h3 className="text-white text-[20px] font-bold text-center mt-5">{title}</h3>
                 <Modal />
                {/* <img src={icon} alt={title} className="w-16 h-16 object-contain"/> */}

              </div>
          </motion.div>


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
        Industrial Engineer BSc., Msc. in Engineering and Systems Engineering student.<br />
        I have participated in different web app projects, with different roles:
        <br /><div className="text-[cyan] flex flex-row justify-between"> Business Analyst, Project Manager and Fullstack developer</div>

        <br />
        <span className="text-[cyan] ">Trailblazer</span> ranked in the salesforce ecosystem as <span className="text-[cyan] ">Expeditioner</span>.
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
        <div className="mt-[120px] l:ml-[100px] xl:ml-[100px] xs:ml-[10px]">
            {/* <Link
              onClick={()=>{}}
            > */}
              <ServiceCard  key="certs" index="1" title="Certitications and Badges" icon={github}/>
            {/* </Link> */}
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