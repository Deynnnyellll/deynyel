import { skills } from "../assets/constants/constant";
import useIntersectionObserver from './CustomHook.jsx';

const Skills = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div ref={ref} className={isVisible ? 
                              "mt-20 md:w-[90%] lg:w-[65%] w-[85%] lg:h-[475px] relative z-50 left-[50%] translate-x-[-50%] ease-in-out duration-500" : "mt-20 md:w-[60%] w-[85%] md:h-[400px] relative z-50 left-[-60%] ease-in-out duration-500"
                            }>
        <div className="w-full h-full outline outline-3 outline-[#864AF9] text-white py-8 px-6 rounded-xl flex flex-col items-center justify-between shadow-[#372e49] shadow-md"> 
          <h1 className="bg-[#4E4FEB] w-[100%] rounded-lg py-5 text-4xl md:text-5xl font-bold text-center"> Expertise </h1>
          <div className="h-full w-full flex flex-col md:flex-row items-center md:mt-10 md:items-start justify-between">
            {
              skills.map(skill => (
                <div key={skill.id} className="bg-[#068FFF] mt-8 md:mt-[-2%] flex flex-col items-center justify-center w-full py-4 px-8 rounded-lg md:h-[95%] md:w-[30%] text-center">
                  <div className=" text-[50pt] md:text-[75pt] md:mb-3"> {skill.icon} </div>
                  <h1 className="text-lg md:text-2xl font-bold"> {skill.name} </h1>
                  <p className="md:mt-1 text-[8pt] md:text-[10pt] text-justify md:w-[90%]"> {skill.description} </p>
                </div>
              ))
            }
          </div> 
        </div>
    </div>
  )
}

export default Skills