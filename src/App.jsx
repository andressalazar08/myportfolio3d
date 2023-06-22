import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works } from './components';
import Stars from './components/canvas/Stars';
//StartsCanvas



const App=() =>{

  return (
 <BrowserRouter>
      <div className="relative z-0 bg-primary">
          <div className=" bg-cover bg-no-repeat bg-center">
          {/* <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"></div> */}
                <Navbar />
                <Hero />

          </div>

          <About />
          <Experience />

          <Works />
          {/* <Feedbacks />  this is for testimonials*/}

          <div className="relative z-0">
              {/* <Contact /> */}
              {/* <Stars /> */}
          </div>
          {/* <Tech /> */}

      <div className="text-center pb-[50px] text-[cyan] text-3xl">hi@andresfelipe.dev</div>
      <div className="text-center pb-[50px]">Felipe Salazar 2023 &copy; <em id="date"></em></div>

      </div>

 </BrowserRouter>
  )
}

export default App;
