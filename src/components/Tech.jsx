import Ball from './canvas/Ball';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return (
    <div
      className="flex flex-row flex-wrap justify-center gap-10"
    >
      {technologies.map((techonology)=>(
        <div
          className="w-28 h-28"
          key={techonology.name}
        >

          {/* <Ball icon={techonology.icon}></Ball> */}
          <p>here goes tech icons</p>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech,"");