
import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import useScrollReveal from "../hooks/useScrollReveal";
const skills = [
    { name: "HTML5 & CSS3", percent: 95, type: "Core" },
    { name: "React", percent: 95, type: "Frontend" },
    { name: "JavaScript (ES6+)", percent: 92, type: "Language" },
    { name: "Next.js", percent: 85, type: "Framework" },
    { name: "Tailwind CSS", percent: 90, type: "Styling" },
    { name: "Responsive Design", percent: 93, type: "UI/UX" },
    { name: "Performance Optimization", percent: 85, type: "Optimization" },
    { name: "Api Integration", percent: 87, type: "Backend" },
];

const Skills = () => {
    const [ref, visiblee] = useScrollReveal();
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
    }, []);
    return (
        <section id="skills"  ref={sectionRef} className="bg-linear-to-r transition-all duration-700 delay-200 from-slate-900 via-slate-800 to-slate-900 py-16 px-4">
         <div ref={ref} className={` ${visiblee
          ? "opacity-100 translate-y-0 scale-100 duration-1000 ease-in-out"
          : "opacity-0 translate-y-16 scale-95"}`}>
        <Container>
            <div className=" text-center">
                <h4 className="text-[30px] text-[#00D3F3] uppercase">Technical Skills</h4>
                <h2 className=" text-[45px] text-[#ffffffcf] font-bold font-lato pb-5">Tools & <span className=" text-[45px] font-lato font-bold text-[#00D3F3]">Technologies</span></h2>
            </div>
            <div className=" w-12/12 mx-auto grid md:grid-cols-2 gap-10">

                {skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-white font-semibold">
                                    {skill.name}
                                </h3>
                                <p className="text-sm text-gray-400">{skill.type}</p>
                            </div>
                            <span className="text-[#00D3F3] font-semibold">
                                {visible ? `${skill.percent}%` : "0%"}
                            </span>
                        </div>
                        <div className="w-full h-2 bg-gray-700/40 rounded-full overflow-hidden">
                            <div
                                className="h-full rounded-full bg-linear-to-r from-[#00D3F3] to-[#3B82F6] transition-all duration-1500"
                                style={{
                                    width: visible ? `${skill.percent}%` : "0%",
                                }}
                            />
                        </div>
                    </div>
                ))}

            </div>
            <div className="w-full flex flex-wrap justify-center gap-3 mt-15 cursor-pointer">
    <span className="hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] duration-300 ease-in-out border border-[#00D3F3] py-2 sm:py-3 px-4 sm:px-5 rounded-2xl text-[13px] sm:text-[15px] text-[#00D3F3] font-lato">
        Git & GitHub
    </span>

    <span className="hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] duration-300 ease-in-out border border-[#00D3F3] py-2 sm:py-3 px-4 sm:px-5 rounded-2xl text-[13px] sm:text-[15px] text-[#00D3F3] font-lato">
        Webpack & Vite
    </span>

    <span className="hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] duration-300 ease-in-out border border-[#00D3F3] py-2 sm:py-3 px-4 sm:px-5 rounded-2xl text-[13px] sm:text-[15px] text-[#00D3F3] font-lato">
        React Router
    </span>

    <span className="hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] duration-300 ease-in-out border border-[#00D3F3] py-2 sm:py-3 px-4 sm:px-5 rounded-2xl text-[13px] sm:text-[15px] text-[#00D3F3] font-lato">
        Redux & Context API
    </span>

    <span className="hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] duration-300 ease-in-out border border-[#00D3F3] py-2 sm:py-3 px-4 sm:px-5 rounded-2xl text-[13px] sm:text-[15px] text-[#00D3F3] font-lato">
        REST APIs
    </span>

    <span className="hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] duration-300 ease-in-out border border-[#00D3F3] py-2 sm:py-3 px-4 sm:px-5 rounded-2xl text-[13px] sm:text-[15px] text-[#00D3F3] font-lato">
        Jest & Testing Library
    </span>

    <span className="hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] duration-300 ease-in-out border border-[#00D3F3] py-2 sm:py-3 px-4 sm:px-5 rounded-2xl text-[13px] sm:text-[15px] text-[#00D3F3] font-lato">
        Figma
    </span>

    <span className="hover:shadow-[0_0_15px_rgba(255,255,255,0.6)] duration-300 ease-in-out border border-[#00D3F3] py-2 sm:py-3 px-4 sm:px-5 rounded-2xl text-[13px] sm:text-[15px] text-[#00D3F3] font-lato">
        npm & yarn
    </span>
</div>   
        </Container>
         </div>
        </section>
    )
}

export default Skills