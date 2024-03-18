import './App.css';
import React, { useState, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SeparationSection from './components/SeparationSection';
import About from './components/About';
import Lawyer from './components/Lawyer';

// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Aos from 'aos';

function App() {
  // useEffect(() => {
  //   AOS.init(
  //     {
  //       once: true,
  //       duration: 800,
  //     }
  //   );
  //   Aos.refresh()
  // });
  // const [screenLoading, setScreenLoading] = useState(false);
  // useEffect(() => {
  //   setScreenLoading(true);
  //   setTimeout(() => {
  //     setScreenLoading(false);
  //   }, 2500);
  // }, []);

  // const top = () => {
  //   document.documentElement.scrollTop = 0;
  // };
  // const [backToTop, setbackToTop] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (document.documentElement.scrollTop > 300) {
  //       setbackToTop(true);
  //     } else {
  //       setbackToTop(false);
  //     }
  //   });
  // }, []);
  return (
    <>
      <div className="">
        <SeparationSection />
        <About />
        <Lawyer/>

      </div>
      {/* <div onClick={() => top()} className={backToTop ? "back_to_top shadow-[0_5px_16px_rgba(252,252,252,1)] overflow-hidden fixed bottom-[3%] h-[50px] w-[50px] flex items-center justify-center rounded-[50px] border-[2px] border-solid border-[#0066FF] bg-[#000] cursor-pointer transition-all ease-linear duration-300 right-[2%] z-[2]" : "hidden"}>
        <img src={Backtotop} alt='Backtotop' className='max-w-[60px] ' />
      </div> */}
    </>
  );
}

export default App;
