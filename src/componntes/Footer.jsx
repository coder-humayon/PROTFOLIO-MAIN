import React from 'react'
import Container from './Container'
import { VscVscodeInsiders } from 'react-icons/vsc'
import { FaCode, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import useScrollReveal from "../hooks/useScrollReveal";

const Footer = () => {
  const [ref, visible] = useScrollReveal();
  return (
    <footer id='footer' className='py-10 shadow-lg bg-linear-to-br from-slate-800 via-slate-900 to-slate-800 text-white overflow-hidden'>
      <div ref={ref} className={` ${visible
          ? "opacity-100 translate-y-0 scale-100 duration-1000 ease-in-out"
          : "opacity-0 translate-y-16 scale-95"}`}>
        <Container>
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">

            {/* Left Section */}
            <div className="w-full lg:w-4/12">
              <div className="group flex items-center gap-4 cursor-pointer select-none">
                <div className="p-3 rounded-xl bg-linear-to-r from-[#00D3F3] to-[#3B82F6] text-white group-hover:bg-white group-hover:text-black transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                  <FaCode className=" text-[28px] lg:text-[32px] group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div className="leading-tight">
                  <h3 className="text-[16px] lg:text-[18px] font-bold tracking-wide text-white">
                    MD-HUMAUN KABIR
                  </h3>
                  <span className="text-xs lg:text-[12px] tracking-wide text-gray-500 uppercase">
                    Front-End Developer 
                  </span>
                </div>
              </div>
              <p className='text-[12px] lg:text-[14px] text-gray-500 pt-6'>
                Building fast, clean, and scalable web interfaces <br /> with React.
              </p>
            </div>

            {/* Quick Links */}
            <div className="w-full lg:w-2/12">
              <h3 className='text-[12px] lg:text-[14px] text-[#00D3F3]'>QUICK LINKS</h3>
              <ul className='flex flex-col gap-2 lg:gap-3 pt-5 text-[12px] lg:text-[14px]'>
                <li className='hover:text-[#00D3F3] duration-300 ease-in-out cursor-pointer'><a href="/">Home</a></li>
                <li className='hover:text-[#00D3F3] duration-300 ease-in-out cursor-pointer'><a href="#about">About</a></li>
                <li className='hover:text-[#00D3F3] duration-300 ease-in-out cursor-pointer'><a href="#skills">Skills</a></li>
                <li className='hover:text-[#00D3F3] duration-300 ease-in-out cursor-pointer'><a href="#projects">Projects</a></li>
              </ul>
            </div>

            {/* Contact Section */}
            <div className="w-full lg:w-4/12">
              <h3 className='text-[12px] lg:text-[14px] text-[#00D3F3]'>GET IN TOUCH</h3>
              <p className='text-[12px] lg:text-[14px] text-gray-500 flex gap-2 pt-4 items-center'>
                <FaGithub />humayonk474@gmail.com
              </p>
              <div className="flex pt-6 gap-4 flex-wrap lg:flex-nowrap">
                <button className="inline-flex items-center gap-2 p-2 border bg-[#091B24] hover:bg-[#00D3F3] ease-in-out duration-300 text-[#FFFFFF] rounded-2xl hover:border-[#00D3F3] hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]">
                  <FaGithub />
                </button>
                <button className="inline-flex items-center gap-2 p-2 border bg-[#091B24] hover:bg-[#00D3F3] ease-in-out duration-300 text-[#FFFFFF] rounded-2xl hover:border-[#00D3F3] hover:shadow-[0_0_30px_rgba(0,211,243,0.15)]">
                  <FaLinkedinIn />
                </button>
              </div>
              <p className='pt-7 text-[14px] lg:text-[18px] font-lato text-[#ffffff95]'>
                © {new Date().getFullYear()} Humaun. All rights reserved.
              </p>
            </div>
          </div>
          
        </Container>
      </div>
    </footer>
  )
}

export default Footer