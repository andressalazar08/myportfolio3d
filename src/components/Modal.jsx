import React from 'react';
import { useState } from 'react';
import web from '../assets/web.png'
import Carousel from "./Carousel";
import { mobile, backend } from '../assets';
import { SectionWrapper } from '../hoc';


const Modal = () => {

    const [ modalinfo, setModalinfo ] =useState(false);

    const slides = [
        // mobile,
        // web,
        // backend
        "https://i.ibb.co/ncrXc2V/1.png",
        "https://i.ibb.co/B3s7v4h/2.png",
        "https://i.ibb.co/XXR8kzF/3.png",
        "https://i.ibb.co/yg7BSdM/4.png"

    ]




    return (

           <main className='App'>

            <div className='mx-auto'>

                <Carousel autoSlide={true} >
                    {slides.map((s)=>(
                        <img src={s} />
                    ))}


                </Carousel>

            </div>


           </main>


    )


}


export default SectionWrapper(Modal,"");