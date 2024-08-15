import { skills } from "../assets/constants/constant";
import useIntersectionObserver from './CustomHook.jsx';

const Skills = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div ref={ref} className={isVisible ? 
                              "mt-20 md:w-[60%] w-[85%] md:h-[400px] relative z-50 left-[50%] translate-x-[-50%] ease-in-out duration-500" : "mt-20 md:w-[60%] w-[85%] md:h-[400px] relative z-50 left-[-50%] ease-in-out duration-500"
                            }>
        <div className="w-full h-full bg-blue-300 text-black py-10 px-6 rounded-xl flex flex-col items-center justify-between shadow-[#864AF9] shadow-lg"> 
          <h1 className="text-4xl md:text-5xl font-bold"> Expertise </h1>
          <div className="h-full w-full flex flex-col md:flex-row items-center md:mt-10 md:items-start justify-between">
            {
              skills.map(skill => (
                <div key={skill.id} className="mt-8 md:mt-0 flex flex-col items-center justify-center w-full md:w-[35%] text-center">
                  <div className=" text-[50pt] md:text-[60pt] md:mb-5"> {skill.icon} </div>
                  <h1 className="text-lg md:text-2xl font-bold"> {skill.name} </h1>
                  <p className="text-[8pt] md:text-[10pt] text-justify md:w-[90%]"> {skill.description} </p>
                </div>
              ))
            }
          </div> 
        </div>
    </div>
  )
}

export default Skills