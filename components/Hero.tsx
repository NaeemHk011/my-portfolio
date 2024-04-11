import React from 'react'
import Particle from "./Particle"
import images from '@/public/images/banner.jpg';
import TextEffect from './TextEffect';
import Image from 'next/image';
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/16/solid';
const Hero = () => {
  return (
    <div className="h-[110vh] bg-[url('/images/banner.jpg')] bg-cover bg-center">
      <Particle />
      <div className='w-[90%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[10rem] h-[100%] items-center'>
        <div>
          <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
            HI, I'M <span className='text-yellow-400'>NAEEM!</span></h1>

          <TextEffect />
          <p className='mt-[1.5rem] text-[18px] text-[#ffffff92]'>
          a passionate web developer with a focus on creating engaging and user-friendly websites. With a strong foundation in front-end and back-end technologies, I specialize in building responsive web applications that bring ideas to life. My goal is to deliver high-quality, scalable solutions that exceed client expectations. Let's collaborate to turn your vision into reality!

          </p>
          <div className='mt-[1.5rem] flex-col space-y-3 sm:flex sm:flex-row item-center sm:space-x-6'>
          <button className='px-[2.5rem] hover:bg-yellow-400 transition-all duration-200 py-[0.3rem] text-[12px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-3'>
            <p>Download-CV</p>
            <ArrowDownTrayIcon className="w-[1.2rem] h-[1.7rem] text-black" />
          </button>
            <button className='flex item-center pl-[10px]'>
              <PlayCircleIcon className="w-[5rem] h-[3rem] hover:text-yellow-400 transition-all duration-200 text-[#55e6a5]" />
  
            </button>
          </div>
        </div>
        <div className='w-[450px] hidden bg-[#55e6a5] relative lg:flex item-center rounded-full h-[450px] '>
          <Image src="/images/u1.jpg" alt="user" layout="fill" className="object-cover rounded-full" />
        </div>


      </div>
    </div >
  )
}

export default Hero