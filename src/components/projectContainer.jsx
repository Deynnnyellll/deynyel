import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const ProjectContainer = ({source, name, description, projects, index}) => {
  const colors = ["bg-red-600", "bg-green-400", "bg-green-500"];
  let techStacksAttribute = "text-[0.8em] md:text-[1.3em] bg-primary font-roboto py-2 px-4 rounded-md shadow-lightOne shadow-md cursor-pointer";
  const techRef = useRef([]); 
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    }
    else {
      control.start('hidden')
    }
  }, [control, inView])



    const handleMouseEnter = (index) => {
      if(techRef.current[index]) {
        techRef.current[index].style = "transform:scale(1.05); transition: 0.1s ease-in"
        console.log(techStacksAttribute)
      }
    }

    const handleMouseLeave = (index) => {
      if(techRef.current[index]) {
        techRef.current[index].style = "transform:scale(1); transition: 0.1s ease-out"
      }
    }

    const variant = {
      visible: {x: 0, opacity: 1},
      hidden: {x: -200, opacity: 0}
    }
  
  return (
    <motion.div 
      className="flex flex-col md:flex-row justify-center items-center outline outline-darkTwo shadow-lg shadow-darkTwo rounded-md px-4 py-8 w-[88vw] md:w-[95vw] relative" 
      variants={variant} initial="hidden" animate={control} ref={ref} transition={{duration: 0.3, delay: 0.2}}
    >
      {/* top container */}
      <div className="flex flex-col items-center overflow-hidden w-[250px] md:w-[40%] md:ml-[-5%]">
        <div className="bg-zinc-200 w-[250px] md:w-[350px] flex items-center flex-start gap-1 p-2 rounded-t-md z-10">
          {
            colors.map((item, index) => (
              <div className={`w-[12px] h-[12px] ${item} rounded-full`} key={index}></div>
            ))
          }
        </div>
          {/* image container */}
          <div className="md:w-[350px] overflow-hidden object-cover">
            <img src={source} alt="project" className="h-[235px] md:h-[250px] hover:scale-105 duration-200 ease-in-out object-cover"/>
          </div>
          {/* bottom container */}
          <div className="bg-zinc-300 w-[250px] md:w-[350px] flex items-center flex-start gap-1 p-2 rounded-b-md z-10">
            <p className="text-darkTwo font-semibold text-sm text-center w-full"> {name} </p>
          </div>
      </div>
      
      {/* description */}
      <div className="mt-8 md:mt-0 w-[95%] md:w-[60%] h-auto text-white flex flex-col gap-4 md:gap-14 items-center md:items-start">
        <h1 className="text-[0.8em] md:text-[1.3em] text-justify"> {description} </h1>
        <ul className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
          {
            projects[index].techStacks.map((item, index1) => (
              <li key={index1} className={techStacksAttribute}
                  onMouseEnter={() => handleMouseEnter(index1)} 
                  onMouseLeave={() => handleMouseLeave(index1)} 
                  ref={(el) => techRef.current[index1] = el}> {item} 
              </li>
            ))
          }
        </ul>
      </div>
    </motion.div>
  )
}

export default ProjectContainer