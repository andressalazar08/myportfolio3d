import { usesState, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';


const Contact = () => {

  const formRef = useRef();

  const [form, setForm] =useState({
    name:'',
    email:'',
    message:'',
  })

  const[loading, setLoading] =useState(false);

  const handleChange= (e)=>{}

  const handleSubmit= (e)=>{}


  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}> Contact</h3>


        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
            <label className='felx flex-col'>
                  <span className='text-white font-medium mb-4'>
                    Your name
                  </span>
            </label>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className='bg-tertiary py-1 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'

            />

            <label className='felx flex-col'>
                  <span className='text-white font-medium mb-4'>
                    Your Email
                  </span>
            </label>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className='bg-tertiary py-1 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'

            />


            <label className='flex flex-col'>
                  <span className='text-white font-medium mb-4'>
                    Your message
                  </span>
            </label>
            <textarea
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder=""
              className='bg-tertiary py-1 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'

            />



        </form>


      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact");