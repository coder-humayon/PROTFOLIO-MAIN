import React from "react";
import Container from "./Container";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import useScrollReveal from "../hooks/useScrollReveal"; 

const Contract = () => {

  const [ref, visible] = useScrollReveal();
  return (
    <section
      id="contact" className=" bg-gradient-to-br from-neutral-950 via-slate-900 to-indigo-950 relative overflow-hidden"
     
    >
      <Container>
        <div
         ref={ref}
      className={`py-16 bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 
      transition-all duration-1100 
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Heading */}
          <div className="text-center px-4">
            <p className="text-[14px] text-[#00D3F3]">Contact</p>
            <h3 className="text-[40px] font-lato font-bold text-white">
              Let’s <span className="text-[#00D3F3]">Work Together</span>
            </h3>
            <p className="text-[14px] font-lato text-[#585858] mt-2">
              Got a project, idea, or collaboration in mind?
              <br className="hidden md:block" /> Hit me up — I actually reply.
            </p>
          </div>

          {/* Form */}
          <div className="mt-10 max-w-3xl mx-auto bg-[#0E0C14] border border-[#00d3f3c0] rounded-2xl p-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#11202D] border border-[#00d3f340] rounded-md px-4 py-2 text-white outline-none focus:border-[#00D3F3]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#11202D] border border-[#00d3f340] rounded-md px-4 py-2 text-white outline-none focus:border-[#00D3F3]"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="md:col-span-2 bg-[#11202D] border border-[#00d3f340] rounded-md px-4 py-2 text-white outline-none focus:border-[#00D3F3]"
              ></textarea>
              <button
                type="submit"
                className="md:col-span-2 bg-[#00D3F3] text-[#0E0E13] font-semibold py-2 rounded-md hover:scale-[1.02] duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Social Icons */}
            <div className="flex justify-center gap-5 mt-8">
              <a
                href="https://mail.google.com/mail/u/0/#inbox?compose=new"
                className="p-3 bg-[#11202D] text-[#00D3F3] rounded-full hover:bg-[#00D3F3] hover:text-black duration-300"
              >
                <FaEnvelope size={18} />
              </a>
              <a
                href="https://github.com/coder-humayon"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#11202D] text-[#00D3F3] rounded-full hover:bg-[#00D3F3] hover:text-black duration-300"
              >
                <FaGithub size={18} />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#11202D] text-[#00D3F3] rounded-full hover:bg-[#00D3F3] hover:text-black duration-300"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contract;