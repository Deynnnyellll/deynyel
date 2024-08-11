import developer from '/src/assets/gif/UI Developer.gif';
import { techStacks } from '../assets/constants/constant';

export const About = () => {
    const iconHover = "text-[50pt] md:text-[80pt] text-slate-200 p-2 hover:shadow-lg hover:shadow-[#864AF9] hover:scale-110 duration-500";
  return (
    <div id="about" className="h-auto mt-10 px-2">
        <h1 className="text-[50px] md:text-[60px] font-semibold text-center"> About Me </h1>
        <div className="flex justify-center flex-col md:flex-row items-center h-[75%] md:gap-24">
            <p className="w-[85%] md:w-[40%] text-justify text-lg md:text-2xl"> I am a front-end web developer, python developer and a machine learning engineer who
                studied at Polytechnic University of the Philippines and obtained a degree of Bachelor of Science in Computer Science.
                As a front-end web developer, I focused on developing a user-friendly, aestethically pleasing and responsive web design.
                In my years studying, I also have gained knowledge and expertise in data science such as data analytics and machine learning model development. 
                Given that, I have developed several AI/ML models that solves different real-world problems.
            </p>

            <img src={developer} alt="programmer"  className='w-[65%] md:w-[35%]'/>
        </div>


        <div className='flex justify-center items-center flex-col'>
            <h2 className='mt-10 md:mt-0 text-[20px] md:text-[35px] text-slate-200 font-semibold mb-6 text-center'> Learned Languages and Technology Stacks </h2>
            <div className='flex flex-wrap justify-center gap-10 md:gap-20 w-[80%] md:w-[55%]'>
            {
                techStacks.map(tech => (
                    <div key={tech.id} className={iconHover}> 
                        {tech.logo} 
                    </div> 
                ))
            }
            </div>
        </div>        
    </div>
  )
}
