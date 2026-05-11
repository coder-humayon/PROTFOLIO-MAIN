import React, { useState } from 'react'
import Container from './Container'
import { FaCode, FaBars, FaTimes } from 'react-icons/fa'

export const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='sticky z-50 top-0 left-0 bg-linear-to-br from-slate-800 via-slate-900 to-slate-700 backdrop-blur shadow-sm'>
      <Container>
        <div className="w-full">
          <div className="w-full flex justify-center">
            <div className="w-full max-w-7xl px-4 md:px-6 py-4 flex items-center justify-between">

              {/* Logo */}
              <div className="group flex items-center gap-4 cursor-pointer select-none">
                <div className="p-3 rounded-xl bg-linear-to-r from-[#00D3F3] to-[#3B82F6] text-white 
                  group-hover:bg-white group-hover:text-black 
                  transition-all duration-300 shadow-md hover:shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                  <FaCode className="text-[32px] group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <div className="leading-tight">
                  <h3 className="text-[20px] font-lato font-bold tracking-wide text-[#ffffff96]">
                    MD.Humayun
                  </h3>
                  <span className="text-xs font-lato tracking-wide text-gray-500 uppercase">
                    Front-End Developer
                  </span>
                </div>
              </div>

              {/* Desktop Menu */}
              <ul className="hidden md:flex gap-8 lg:gap-10 text-sm font-bold text-[#ffffffa1]">
                <li className="relative cursor-pointer transition hover:text-indigo-600 group">
                  <a href="/">Home</a>
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative cursor-pointer transition hover:text-indigo-600 group">
                  <a href="#about">About</a>
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative cursor-pointer transition hover:text-indigo-600 group">
                  <a href="#skills">Skills</a>
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative cursor-pointer transition hover:text-indigo-600 group">
                  Contact
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                </li>
                <li className="relative cursor-pointer transition hover:text-indigo-600 group">
                  <a href="#portfolio">Projects</a>
                  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                </li>
              </ul>

              {/* Hire Me Button */}
              <button className="hidden md:block hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] bg-linear-to-r from-[#00D3F3] to-[#3B82F6] text-white px-5 lg:px-6 py-2 rounded-full text-sm hover:bg-indigo-700 transition">
                Hire Me
              </button>

              {/* Mobile Bar */}
              <div className="md:hidden">
                <button onClick={() => setOpen(!open)} className="text-white text-2xl focus:outline-none">
                  {open ? <FaTimes /> : <FaBars />}
                </button>
              </div>

            </div>
          </div>

          {/* Mobile Menu */}
          {open && (
            <div className="md:hidden mt-2 bg-slate-900 rounded-xl p-4 flex flex-col gap-4 text-white font-bold">
              <a href="/" onClick={() => setOpen(false)}>Home</a>
              <a href="#about" onClick={() => setOpen(false)}>About</a>
              <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
              <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
              <a href="#portfolio" onClick={() => setOpen(false)}>Projects</a>
              <button className="bg-linear-to-r from-[#00D3F3] to-[#3B82F6] py-2 rounded-full hover:bg-indigo-700 transition">
                Hire Me
              </button>
            </div>
          )}

        </div>
      </Container>
    </nav>
  )
}