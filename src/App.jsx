import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from './components';
import Modal from './components/Modal';
import Stars from './components/canvas/Stars';
import aflogo from './assets/andres-felipe-high-resolution-logo-white-on-transparent-background (1).png'
import { useState } from 'react';
//StartsCanvas



const App=() =>{

  const [showModal, setShowModal] = useState(false);

  return (
 <BrowserRouter>
      <div className="relative z-0 bg-primary">
          <div className=" bg-cover bg-no-repeat bg-center">
          {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"></div> */}
                <Navbar />
                <Hero />

          </div>

          <About/>





          <Experience />

          <Works />
          {/* <Feedbacks />  this is for testimonials*/}

          <div className="relative z-0">
              {/* <Contact /> */}
              {/* <Stars /> */}
          </div>
          {/* <Tech /> */}
          {/* <Modal /> */}
      <div className="text-center pb-[50px] text-[cyan] text-3xl">hi@andresfelipe.dev</div>
      <div className="text-center pb-[50px]">Felipe Salazar 2023 &copy; <em id="date"></em></div>

      </div>

 </BrowserRouter>
  )
}

export default App;
