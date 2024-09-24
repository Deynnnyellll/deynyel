import { Typer } from "./typer";
import CV from '/src/assets/docs/Danniel Martinez- Resume.pdf';
import { useInView } from "react-intersection-observer";
import { Hero } from "../context/context";
import { useContext, useEffect } from "react";

export const Landing = () => {
  const {isView, setIsView} = useContext(Hero);
  const [ref, inView] = useInView();

  useEffect(() => {
    if(inView) {
      setIsView(false);
    }
    else {
      setIsView(true);
    }
  }, [inView])


  return (
    <div id="home" className="h-[100vh] lg:h-[115vh] bg-image flex items-center flex-col lg:flex-row lg:justify-end" ref={ref}>
        <div className="h-[75%] lg:h-auto flex items-center flex-col justify-end">
            <Typer />
            <button className="text-black rounded-3xl bg-lightOne px-8 py-2 text-sm md:text-lg font-semibold mt-4 md:mt-8 shadow-md shadow-black hover:bg-gray-500 hover:bg-opacity-50 ease-in-out duration-200">
              <a href={CV} target="_blank" rel="noopener noreferrer"> Curriculum Vitae </a> 
            </button>
        </div>
    </div>
  )
}
