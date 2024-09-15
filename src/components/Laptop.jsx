import { SiWindows } from "react-icons/si";
import { GoSearch } from "react-icons/go";
import { FaEdge, FaOpera, FaWindowMaximize } from "react-icons/fa6";
import { SiTalenthouse } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import Skills from "./skills";
import useIntersectionObserver from "./CustomHook";
import { useState } from "react";


function Laptop() {
    const [ref, isVisible] = useIntersectionObserver();
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div ref={ref} className={`relative top-20 ${isVisible ? '' : 'translate-x-[-100%]'} duration-500 ease-in-out`}>
        <div className={`h-[260px] w-[280px] md:h-[600px] md:w-[900px] flex flex-col items-center animate-rotate3d hover:animate-none`}>
            {/* laptop */}
            <div className="h-[80%] w-full bg-zinc-600 rounded-t-lg p-3 shadow-inner shadow-slate-700">
                {/* laptop content */}
                <div className={`bg-laptop w-full h-full rounded-xs flex flex-col ${isOpen ? 'justify-end' : 'justify-between'} items-center`}>
                    {
                        !isOpen && 
                        <div className="w-[90%] md:w-[85%] h-[80%] bg-slate-900 mt-3 md:mt-8 bg-opacity-95 rounded-md">
                            <div className="w-full flex items-center justify-end gap-2 py-1 px-2 md:text-[0.5em] rounded-t-md bg-slate-800 h-[8%] text-[5px]">
                                <div className="w-[5px] md:w-[10px] h-[1.5px] md:h-[2px] bg-white hover:bg-gray-500 cursor-pointer" onClick={() => setIsOpen(!isOpen)}></div>
                                <FaWindowMaximize/>
                                <h1> X </h1>
                            </div>

                            <div className="h-[88%] flex items-center justify-center overflow-y-scroll">
                                <Skills />
                            </div>

                            <div className="w-full flex items-center justify-end gap-2 py-1 px-2 text-[0.5em] rounded-b-md bg-slate-800 h-[4%]">
                            </div> 
                        </div>
                    }

                    {/* tab */}
                    <div className="w-full h-[7%] bg-gray-800 flex items-center justify-center gap-2 py-[10px] md:py-2">
                        <SiWindows className="text-xs" />
                        <div className="bg-slate-600 rounded-full h-full w-[15%] md:w-[10%] flex items-center py-[6px] md:py-0 px-2 gap-1 font-extralight">
                            <GoSearch className="hidden md:block md:text-xs"/>
                            <p className="text-[0.3em] md:text-[0.5em]">Search</p>
                        </div>
                        <FaEdge className=" text-xs md:text-sm"/>
                        <FaOpera className="text-xs md:text-sm text-red-600" />
                        <DiVisualstudio className="text-blue-500 text-xs md:text-sm" />
                        <SiTalenthouse className='text-lg md:text-3xl bg-slate-700 bg-opacity-50 p-1 md:p-2 text-blue-100 hover:bg-slate-500 cursor-pointer' onClick={() => setIsOpen(!isOpen)}/>
                    </div>
                </div>
            </div>
            <div className="h-[3%] w-[110%] bg-zinc-400 rounded-2xl shadow-inner shadow-slate-700"></div>
        </div>
    </div>
  )
}

export default Laptop