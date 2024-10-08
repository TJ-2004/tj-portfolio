'use client';
import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Services from './Services/Services';
import Projects from './Projects/Projects';
// import Skills from './Skills/Skills';
// import Review from './Reviews/Review';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    };
    initAOS();

  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <Services />
      {/* <Skills /> */}
      {/* <Review /> */}
    </div>
  );
};

export default Home;
