import React from 'react';
import { useState } from 'react';
import web from '../assets/web.png'
import Carousel from "./Carousel";
import { mobile, backend } from '../assets';
import { SectionWrapper } from '../hoc';
import associate from '../assets/associate.png';
import fullstack from '../assets/fullstack.png';
import efset from '../assets/efset1.png';
import salesforce from '../assets/salesforcebase.png';
import trailhead from '../assets/trailhead.png';
import agile from '../assets/agile.png';
import javascript from '../assets/javascript.png';

const Modal = () => {

    const [ modalinfo, setModalinfo ] =useState(false);

    const slides = [
        // mobile,
        // web,
        // backend
        associate,
        efset,
        salesforce,
        trailhead,
        agile,
        fullstack,

    ]




    return (

           <main className='w-[370px] h-[auto] p-5'>

            <div >

                <Carousel autoSlide={true}  >
                    {slides.map((s)=>(
                        <img   src={s}/>
                    ))}


                </Carousel>

            </div>


           </main>


    )


}


export default Modal;