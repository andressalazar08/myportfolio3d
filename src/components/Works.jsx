import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from '../hoc';
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

//``


const ProjectCard = ({ index, name, description, tags, image, source_code_link })=>{
    return (
        <motion.div>
          test
        </motion.div>
    )
}

const Works = () => {
  return (
    <>
        <motion.div
            variants={textVariant()}>
                <h2 className={`${styles.sectionSubText} `}>
                    My work
                </h2>

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