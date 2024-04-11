import React, { useEffect, useState } from 'react';
import App from './_app';
import Navbar from '@/components/Nav';
import MobileNav from '@/components/MobileNav'
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Skils from '@/components/Skils';
import Projects from '@/components/Projects';
import Testimonial from '@/components/Testimonial';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Page = () => {
  const [Nav, setNav] = useState(false)
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: 'ease',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
  }, [])

  return (
    <>
      <MobileNav nav={Nav} closeNav={closeNav} />
      <Navbar openNav={openNav} />
      <Hero />
      <div className='relative z-[30]'>
        <About />
        <Services />
        <Skils />
        <Projects />
        <Testimonial />
        <Blog />
        <Footer />
      </div>
    </>
  )
}

export default Page;
