import React from 'react'
import Container from './Container'
import projct1 from "../assets/projct1.png"
import projct2 from "../assets/projct2.png"
import projct3 from "../assets/projct3.png"
import { BsGithub } from 'react-icons/bs'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import { LuGithub } from 'react-icons/lu'
import useScrollReveal from "../hooks/useScrollReveal";
import { Link } from 'react-router'

const Portfolio = () => {
    const [ref, visible] = useScrollReveal();
    return (
        <section id='portfolio' className='bg-linear-to-r  from-slate-900  to-slate-900 py-15'>
            <div ref={ref} className={` ${visible
                ? "opacity-100 translate-y-0 scale-100 duration-1000 ease-in-out"
                : "opacity-0 translate-y-16 scale-95"}`}>
                <Container>
                    <div className="">
                        <div className=" text-center">
                            <h3 className='text-[25px] uppercase text-[#00D3F3] font-lato '>Portfolio</h3>
                            <h2 className='text-[50px] text-[#ffffffe4] font-bold font-lato'>Featured <span className='text-[50px] text-[#00D3F3] font-bold font-lato'>Projects</span></h2>
                            <p className=' text-[19px] text-[#ffffff93] font-lato pb-3'>Real-world applications built with production-grade code, optimized performance, and clean <br /> architecture.</p>
                        </div>
                        {/* part one */}
                        <div className="mt-10 flex flex-col lg:flex-row justify-between gap-7">

                            <div className="w-full lg:w-6/12 group mt-9">
                                <div className="relative p-5 border-3 cursor-pointer bg-[#ffffff7d] border-[#0C4D61] rounded-2xl">

                                    <img
                                        className='w-full group-hover:scale-104 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] shadow-md duration-300 ease-in-out rounded-2xl'
                                        src={projct1}
                                        alt=""
                                    />

                                    <div className="w-full h-full bg-[#00d3f328] absolute top-0 left-0 rounded-2xl opacity-0 group-hover:opacity-100 duration-300 ease-in-out flex items-center justify-center gap-6">

                                        <Link to="https://github.com/coder-humayon" target='_blank'>
                                            <BsGithub className='text-[30px] lg:text-[35px]' />
                                        </Link>

                                        <Link to="https://orebi-2-2.vercel.app/" target='_blank'>
                                            <FaArrowUpRightFromSquare className='text-[30px] lg:text-[40px] bg-[#00D3F3] py-2 lg:py-3 px-2 lg:px-3 text-white rounded-full' />
                                        </Link>

                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-6/12">

                                <h2 className='text-[22px] lg:text-[30px] font-lato text-white'>
                                    Analytics Dashboard
                                </h2>

                                <p className='text-[14px] lg:text-[16px] text-[#ffffff9d] font-lato font-medium pt-2'>
                                    Real-time analytics platform with interactive charts, data visualization, and responsive design. Built with React, Recharts, and Tailwind CSS.
                                </p>

                                <div className="hover:scale-101 hover:shadow-[0_0_30px_rgba(0,211,243,0.15)] duration-300 ease-in-out p-5 lg:p-6 mt-4 rounded-2xl border border-[#00D3F3]/40 bg-linear-to-br from-[#0B0E14] to-[#071C22] transition-all">

                                    <p className="text-[16px] lg:text-[18px] text-[#00D3F3] font-lato font-bold tracking-wide">
                                        Problem Solved
                                    </p>

                                    <p className="mt-2 text-[14px] lg:text-[15px] font-lato text-gray-300 leading-relaxed">
                                        Complex data visualization with real-time updates and responsive layouts.
                                    </p>

                                </div>

                                <div className="pt-6">

                                    <ul className="flex gap-3 lg:gap-4 flex-wrap cursor-pointer">
                                        <li className="font-lato py-2 px-5 lg:px-6 text-white text-[13px] lg:text-[15px] border border-[#00D3F3]/40 rounded-full bg-[#0B0E14] transition-all duration-300 hover:border-[#00D3F3] hover:text-[#00D3F3] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,211,243,0.25)]">React</li>
                                        <li className="font-lato py-2 px-5 lg:px-6 text-white text-[13px] lg:text-[15px] border border-[#00D3F3]/40 rounded-full bg-[#0B0E14] transition-all duration-300 hover:border-[#00D3F3] hover:text-[#00D3F3] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,211,243,0.25)]">React Router</li>
                                        <li className="font-lato py-2 px-5 lg:px-6 text-white text-[13px] lg:text-[15px] border border-[#00D3F3]/40 rounded-full bg-[#0B0E14] transition-all duration-300 hover:border-[#00D3F3] hover:text-[#00D3F3] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,211,243,0.25)]">Context API</li>
                                        <li className="font-lato py-2 px-5 lg:px-6 text-white text-[13px] lg:text-[15px] border border-[#00D3F3]/40 rounded-full bg-[#0B0E14] transition-all duration-300 hover:border-[#00D3F3] hover:text-[#00D3F3] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,211,243,0.25)]">Tailwind CSS</li>
                                        <li className="font-lato py-2 px-5 lg:px-6 text-white text-[13px] lg:text-[15px] border border-[#00D3F3]/40 rounded-full bg-[#0B0E14] transition-all duration-300 hover:border-[#00D3F3] hover:text-[#00D3F3] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,211,243,0.25)]">JavaScript</li>
                                    </ul>

                                    <ul className='flex flex-wrap pt-5 gap-4 lg:gap-6 cursor-pointer'>
                                        <li className='text-[#00D3F3] text-[16px] lg:text-[20px] font-lato'>
                                            <FaArrowUpRightFromSquare className='inline-block' /> Live Demo
                                        </li>
                                        <li className='text-[#00D3F3] text-[16px] lg:text-[20px] font-lato'>
                                            <LuGithub className='inline-block' /> Source Code
                                        </li>
                                    </ul>

                                </div>

                            </div>

                        </div>
                        {/* one part end */}
                        {/* part two */}
                        <div className="mt-12 flex flex-col lg:flex-row justify-between gap-7">

                            <div className="w-full lg:w-6/12">

                                <h2 className='text-[22px] lg:text-[30px] font-lato text-white'>
                                    Analytics Dashboard
                                </h2>

                                <p className='text-[14px] lg:text-[16px] text-[#ffffff9d] font-lato font-medium pt-2'>
                                    Real-time analytics platform with interactive charts, data visualization, and responsive design. Built with React, Recharts, and Tailwind CSS.
                                </p>

                                <div className="hover:scale-101 hover:shadow-[0_0_30px_rgba(0,211,243,0.15)] duration-300 ease-in-out p-5 lg:p-6 mt-4 rounded-2xl border border-[#00D3F3]/40 bg-linear-to-br from-[#0B0E14] to-[#071C22] transition-all">

                                    <p className="text-[16px] lg:text-[18px] text-[#00D3F3] font-lato font-bold tracking-wide">
                                        Problem Solved
                                    </p>

                                    <p className="mt-2 text-[14px] lg:text-[15px] font-lato text-gray-300 leading-relaxed">
                                        Complex data visualization with real-time updates and responsive layouts.
                                    </p>

                                </div>

                                <div className="pt-6">

                                    <ul className="flex gap-3 lg:gap-4 flex-wrap cursor-pointer">
                                        <li className="font-lato py-2 px-5 lg:px-6 text-white text-[13px] lg:text-[15px] border border-[#00D3F3]/40 rounded-full bg-[#0B0E14] transition-all duration-300 hover:border-[#00D3F3] hover:text-[#00D3F3] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,211,243,0.25)]">React</li>
                                        <li className="font-lato py-2 px-5 lg:px-6 text-white text-[13px] lg:text-[15px] border border-[#00D3F3]/40 rounded-full bg-[#0B0E14] transition-all duration-300 hover:border-[#00D3F3] hover:text-[#00D3F3] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,211,243,0.25)]">TypeScript</li>
                                        <li className="font-lato py-2 px-5 lg:px-6 text-white text-[13px] lg:text-[15px] border border-[#00D3F3]/40 rounded-full bg-[#0B0E14] transition-all duration-300 hover:border-[#00D3F3] hover:text-[#00D3F3] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,211,243,0.25)]">Recharts</li>
                                        <li className="font-lato py-2 px-5 lg:px-6 text-white text-[13px] lg:text-[15px] border border-[#00D3F3]/40 rounded-full bg-[#0B0E14] transition-all duration-300 hover:border-[#00D3F3] hover:text-[#00D3F3] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,211,243,0.25)]">Tailwind CSS</li>
                                    </ul>

                                    <ul className='flex flex-wrap pt-5 gap-4 lg:gap-6 cursor-pointer'>
                                        <li className='text-[#00D3F3] text-[16px] lg:text-[20px] font-lato'>
                                            <FaArrowUpRightFromSquare className='inline-block' /> Live Demo
                                        </li>
                                        <li className='text-[#00D3F3] text-[16px] lg:text-[20px] font-lato'>
                                            <LuGithub className='inline-block' /> Source Code
                                        </li>
                                    </ul>

                                </div>
                            </div>

                            <div className="w-full lg:w-6/12 group mt-9">
                                <div className="relative p-5 border-3 cursor-pointer bg-[#ffffff7d] border-[#0C4D61] rounded-2xl">

                                    <img
                                        className='w-full group-hover:scale-104 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] shadow-md duration-300 ease-in-out rounded-2xl'
                                        src={projct2}
                                        alt=""
                                    />

                                    <div className="w-full h-full bg-[#00d3f328] absolute top-0 left-0 rounded-2xl opacity-0 group-hover:opacity-100 duration-300 ease-in-out flex items-center justify-center gap-6">

                                        <Link to="https://github.com/coder-humayon" target='_blank'>
                                            <BsGithub className='text-[30px] lg:text-[35px]' />
                                        </Link>

                                        <Link to="https://bootstrap-1-eight.vercel.app/" target='_blank'>
                                            <FaArrowUpRightFromSquare className='text-[30px] lg:text-[40px] bg-[#00D3F3] py-2 lg:py-3 px-2 lg:px-3 text-white rounded-full' />
                                        </Link>

                                    </div>

                                </div>
                            </div>

                        </div>
                        {/* part two end*/}
                        {/* part three */}
                        <div className="mt-12 flex flex-col lg:flex-row justify-between gap-7">

                            <div className="w-full lg:w-6/12 group mt-9">
                                <div className="relative p-5 border-3 cursor-pointer bg-[#ffffff7d] border-[#0C4D61] rounded-2xl">

                                    <img
                                        className='w-full group-hover:scale-104 hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] shadow-md duration-300 ease-in-out rounded-2xl'
                                        src={projct3}
                                        alt=""
                                    />

                                    <div className="w-full h-full bg-[#00d3f328] absolute top-0 left-0 rounded-2xl opacity-0 group-hover:opacity-100 duration-300 ease-in-out flex items-center justify-center gap-6">

                                        <BsGithub className='text-[30px] lg:text-[35px]' />
                                        <FaArrowUpRightFromSquare className='text-[30px] lg:text-[40px] bg-[#00D3F3] py-2 lg:py-3 px-2 lg:px-3 text-white rounded-full' />

                                    </div>

                                </div>
                            </div>

                            <div className="w-full lg:w-6/12">
                                <h2 className='text-[22px] lg:text-[30px] font-lato text-white'>Analytics Dashboard</h2>
                                <p className='text-[14px] lg:text-[16px] text-[#ffffff9d] font-lato font-medium pt-2'>
                                    Real-time analytics platform with interactive charts, data visualization, and responsive design. Built with React, Recharts, and Tailwind CSS.
                                </p>

                                <div className="hover:scale-101 hover:shadow-[0_0_30px_rgba(0,211,243,0.15)] duration-300 ease-in-out p-5 lg:p-6 mt-4 rounded-2xl border border-[#00D3F3]/40 bg-linear-to-br from-[#0B0E14] to-[#071C22] transition-all">
                                    <p className="text-[16px] lg:text-[18px] text-[#00D3F3] font-lato font-bold tracking-wide">
                                        Problem Solved
                                    </p>
                                    <p className="mt-2 text-[14px] lg:text-[15px] font-lato text-gray-300 leading-relaxed">
                                        Complex data visualization with real-time updates and responsive layouts.
                                    </p>
                                </div>

                                <div className="pt-6">
                                    <ul className="flex gap-3 lg:gap-4 flex-wrap cursor-pointer">
                                        <li className="font-lato py-2 px-5 lg:px-6 text-white text-[13px] lg:text-[15px] border border-[#00D3F3]/40 rounded-full bg-[#0B0E14] transition-all duration-300 hover:border-[#00D3F3] hover:text-[#00D3F3] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,211,243,0.25)]">React</li>
                                        <li className="font-lato py-2 px-5 lg:px-6 text-white text-[13px] lg:text-[15px] border border-[#00D3F3]/40 rounded-full bg-[#0B0E14] transition-all duration-300 hover:border-[#00D3F3] hover:text-[#00D3F3] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,211,243,0.25)]">TypeScript</li>
                                        <li className="font-lato py-2 px-5 lg:px-6 text-white text-[13px] lg:text-[15px] border border-[#00D3F3]/40 rounded-full bg-[#0B0E14] transition-all duration-300 hover:border-[#00D3F3] hover:text-[#00D3F3] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,211,243,0.25)]">Recharts</li>
                                        <li className="font-lato py-2 px-5 lg:px-6 text-white text-[13px] lg:text-[15px] border border-[#00D3F3]/40 rounded-full bg-[#0B0E14] transition-all duration-300 hover:border-[#00D3F3] hover:text-[#00D3F3] hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(0,211,243,0.25)]">Tailwind CSS</li>
                                    </ul>

                                    <ul className='flex flex-wrap pt-5 gap-4 lg:gap-6 cursor-pointer'>
                                        <li className='text-[#00D3F3] text-[16px] lg:text-[20px] font-lato'>
                                            <FaArrowUpRightFromSquare className='inline-block' /> Live Demo
                                        </li>
                                        <li className='text-[#00D3F3] text-[16px] lg:text-[20px] font-lato'>
                                            <LuGithub className='inline-block' /> Source Code
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        {/* part end */}
                    </div>
                </Container>
            </div>
        </section>
    )
}

export default Portfolio