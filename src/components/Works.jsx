import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from '../hoc';
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import live2 from '../assets/live.png';

//``


const ProjectCard = ({ index, name, description, tags, image, source_code_link })=>{
    return (
        <motion.div variants={fadeIn("up", "spring", index*0.1, 0.75)}>

            {/* <Tilt
             options={{
                max:45,
                scale:1,
                speed:450
              }}
              >
            second
            </Tilt> */}

            <div

              className="bg-tertiary p-5 rounded-2xl sm:w-[360px]  xs:w-[360px] w-full"

            >
              <div className="relative w-full h-[230px]">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                          <div
                            onClick={()=>window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                          >
                            <img
                              src={github}
                              alt="github"
                              className="w-1/2 h-1/ object-contain"
                            />


                          </div>


                  </div>
                  {/* Aquí option for deploy */}
                  {/* <div className="absolute left-0 top-0 flex justify-end m-3 card-img_hover">
                          <div
                            onClick={()=>window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                          >
                            <img
                              src={live2}
                              alt="github"
                              className="w-1/2 h-1/ object-contain"
                            />


                          </div>


                  </div> */}

              </div>

              {/* description of the project */}

              <div className="mt-5 ">
                <h4 className="text-white font-bold text-[20px]">{name}</h4>
                <p className="mt-2 text-secondary text-[16px]">{description}</p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">

                  {tags.map((tag)=>(
                      <p
                        key={tag.name}
                        className={`text-[17px] ${tag.color}`}
                      >
                      # {tag.name}

                      </p>
                  ))}

              </div>


            </div>

        </motion.div>
    )
}

const Works = () => {
  return (
    <>
        <motion.div
            variants={textVariant()}>


                <p className={`${styles.sectionHeadText}`}>
                    Projects
                </p>
          </motion.div>

          <div className="w-full flex">
            <motion.p
              variants={fadeIn("down", "spring", 0.1,1)}
            >
              Following projects shows my skills and experience through real-world examples of my work.
              Each project is briefly described with links to code repositories.
            </motion.p>
          </div>

          <div className="mt-20 flex flex-wrap gap-7">
              {projects.map((project, index)=>(
                <ProjectCard
                  key={`project-${index}`}
                  index={index}
                  {...project}
                />
              ))}
          </div>

    </>
  )
}

export default SectionWrapper(Works,"");