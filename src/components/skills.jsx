import { skills } from "../assets/constants/constant";

const Skills = () => {
  return (

      <div className="w-[85%] md:w-[95%] outline outline-[#864AF9] h-auto rounded-lg p-3 mt-[540px] mb-4 md:mt-36 md:mb-4">
        <h1 className="bg-[#4E4FEB] w-[100%] rounded-lg py-2 md:py-5 text-xl md:text-3xl font-bold text-center"> Expertise </h1>
        <div className="min-h-[100px] h-auto w-full flex flex-col mt-4 md:mt-8 items-start justify-center gap-4 md:gap-8">
             {
               skills.map(skill => (
                 <div key={skill.id} className="outline outline-[#068FFF] mt-[-2%] gap-2 md:gap-4 flex flex-col md:flex-row items-center justify-center w-full py-4 px-6 md:px-8 rounded-lg text-center">
                   <div className="md:block text-[25pt] md:text-[35pt]"> {skill.icon} </div>
                   <h1 className="text-xs md:text-lg font-bold"> {skill.name} </h1>
                   <p className="text-[7pt] md:text-[8pt] text-justify w-full"> {skill.description} </p>
                 </div>
               ))
             }
          </div> 
    </div>
  )
}

export default Skills