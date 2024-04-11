import { CodeBracketIcon, CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/16/solid'
import React from 'react'

const Services = () => {
    return (
        <div className='bg-[#121212] pt-[4rem] mt:pt-[8rem] pb-[5rem]' >
            <p className='heading'>My <span className='text-yellow-400'>Services</span></p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto item-center gap-[3rem] mt-[4rem] text-white'>
                <div>
                    <div data-aos='fade-right' data-aos-delay='500' className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                        <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                        <h1 className='text-[15px] text-[#d3d2d2'>Frontend</h1><br />
                        <p className='text-[15px] text-[#d3d2d2] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime obcaecati delectus quia praesentium quasi,</p>
                    </div>
                </div>
                <div>
                    <div data-aos='fade-up ' data-aos-delay='500' className='bg-orange-600 hover:scale-110 transform transition-all duration-300 uppercase font-semibold text-center p-[2rem]'>
                        <RocketLaunchIcon className=" w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                        <h1 className='text-[15px] text-[#d3d2d2'>Backend</h1><br />
                        <p className='text-[15px] text-[#d3d2d2] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime obcaecati delectus quia praesentium quasi,</p>
                    </div>
                </div>
                <div>
                    <div data-aos='fade-left' data-aos-delay='500' className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase font-semibold text-center p-[2rem]'>
                        <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-[#d3fae8]" />
                        <h1 className='text-[15px] text-[#d3d2d2'>Fullstack</h1><br />
                        <p className='text-[15px] text-[#d3d2d2] font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime obcaecati delectus quia praesentium quasi,</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
