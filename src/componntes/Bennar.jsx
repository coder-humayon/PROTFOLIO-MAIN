import React from 'react'
import Container from './Container'
import { FaCloudDownloadAlt, FaFacebook, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import h2 from "../assets/h2.png"

import { DiReact } from 'react-icons/di'
import { GoDotFill } from 'react-icons/go'
import useScrollReveal from "../hooks/useScrollReveal";

const Bennar = () => {
    const [ref, visible] = useScrollReveal();

    return (
        <section id='bennar' className='bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden'>
            <div ref={ref} className={`transition-all duration-1000 ease-in-out ${visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-16 scale-95"}`}>
                {/* Background effects */}
                <div className="absolute rotate-40 -inset-5 pointer-events-none">
                    <div className="absolute -top-20 left-52 w-32 h-32 bg-white/20 rounded-xl animate-pulse"></div>
                    <div className="absolute top-60 right-8 w-24 h-24 bg-white/15 rounded-lg animate-pulse"></div>
                    <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-white/30 rounded-2xl animate-ping [animation-duration:2.5s]"></div>
                    <div className="absolute bottom-20 right-10 w-28 h-28 bg-white/20 rounded-xl animate-pulse"></div>
                </div>

                <Container>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 pt-16 md:pt-20 pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
                        {/* Left Content */}
                        <div className="text-center md:text-left">
                            <p className="text-indigo-600 font-bold font-lato text-[20px] mb-3">Hello, I’m</p>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#00bfff89] leading-tight">
                                  MD.Humayun <br />
                                <span className="text-[#ffd900ae] font-medium">Front-End Developer</span>
                            </h1>
                            <p className="text-gray-400 mt-4 font-lato text-[20px] sm:text-[25px]">
                                I build <span className="bg-linear-to-r from-green-300 via-blue-400 to-purple-500 bg-clip-text text-transparent font-bold">fast, clean,</span> and scalable web interfaces with React.
                                <DiReact className='animate-spin [animation-duration:3s] inline-block text-[40px] sm:text-[50px] text-[#61DAFB]' />
                            </p>
                            <p className='font-lato pt-4 text-[#7da37dc5] text-[16px] sm:text-[18px] max-w-md mx-auto md:mx-0'>
                                Frontend Developer specializing in React, Tailwind CSS, and modern JavaScript. I create
                                component-based architectures that are performant, maintainable, and built for production.
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
                                <button className="hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] bg-linear-to-r from-[#00D3F3] to-[#3B82F6] text-white px-6 py-3 rounded-full hover:bg-indigo-700 transition w-full sm:w-auto">
                                    <a href="#portfolio">View Projects</a>
                                </button>
                                <button className="group hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] border font-bold font-lato border-[#00d3f3bb] text-[#00D3F3] px-6 py-3 rounded-full transition w-full sm:w-auto">
                                    <a
                                        href="/Md.Humaun_CV.pdf"
                                        download="Md.Humaun_CV.pdf"
                                        className="flex items-center justify-center gap-2 w-full"
                                    >
                                        Download CV <FaCloudDownloadAlt className='inline-block' />
                                    </a>
                                </button>
                            </div>

                            {/* Social Icons */}
                            <div className="flex justify-center md:justify-start gap-4 mt-8 sm:mt-12">
                                <ul className="flex gap-6 justify-center md:justify-start items-center flex-wrap">
                                    <li className="relative group cursor-pointer">
                                        <a href="https://github.com/coder-humayon" target="_blank" rel="noopener noreferrer">
                                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-black text-white text-sm px-3 py-1 rounded-md">GitHub</span>
                                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ffffff71] text-gray-800 shadow-md group-hover:bg-gray-800 group-hover:text-white group-hover:-translate-y-2 transition-all duration-300">
                                                <FaGithub size={22} />
                                            </div>
                                        </a>
                                    </li>
                                    <li className="relative group cursor-pointer">
                                        <a href="" target='_blank' rel="noopener noreferrer">
                                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-black text-white text-sm px-3 py-1 rounded-md">LinkedIn</span>
                                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ffffff71] text-blue-600 shadow-md group-hover:bg-blue-600 group-hover:text-white group-hover:-translate-y-2 transition-all duration-300">
                                                <FaLinkedinIn size={22} />
                                            </div>
                                        </a>
                                    </li>
                                    <li className="relative group cursor-pointer">
                                        <a href="mailto:example@gmail.com" target='_blank' rel="noopener noreferrer">
                                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-black text-white text-sm px-3 py-1 rounded-md">Email</span>
                                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ffffff71] text-[#D93025] shadow-md group-hover:bg-[#D93025] group-hover:text-white group-hover:-translate-y-2 transition-all duration-300">
                                                <MdEmail size={24} />
                                            </div>
                                        </a>
                                    </li>
                                    <li className="relative group cursor-pointer">
                                        <a href="https://www.facebook.com/h.m.humayon.kobir.310666" target='_blank' rel="noopener noreferrer">
                                            <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-300 bg-black text-white text-sm px-3 py-1 rounded-md">Facebook</span>
                                            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#ffffff71] text-[#0000ff91] shadow-md group-hover:bg-[#0000ff66] group-hover:text-white group-hover:-translate-y-2 transition-all duration-300">
                                                <FaFacebook size={24} />
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative hidden md:flex justify-center ">
                            <div className="w-100 h-100 bg-indigo-600/10 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.6)] "></div>
                            <div className="absolute mt-[2%] w-[380px] h-[380px] rounded-full bg-indigo-600/20 overflow-hidden">
                                <img
                                    src={h2}
                                    alt=""
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="shadow-[0_0_15px_rgba(255,255,255,0.6)] mb-10 w-6 h-10 border-2 border-white rounded-full mx-auto flex items-start justify-center mt-8">
                        <span className="mt-2 animate-bounce">
                            <GoDotFill className="text-white text-xs" />
                        </span>
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Bennar