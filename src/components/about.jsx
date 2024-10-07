import developer from '/src/assets/gif/UI Developer.gif';
import { techStacks } from '../assets/constants/constant';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import Laptop from './Laptop';
import Mobile from './Mobile';
import { useEffect } from 'react';

export const About = () => {
    const iconHover = "text-[50pt] md:text-[70pt] text-slate-200 p-2 hover:shadow-lg hover:shadow-[#864AF9] hover:scale-110 duration-500";
    const [ref, inView] = useInView();
    const control = useAnimation();
    
    useEffect(() => {
        if(inView) {
            control.start('visible');
        }
        else {
            control.start('hidden')
        }
    })

    const variant1 = {
        visible: {opacity: 1},
        hidden: {opacity: 0}
    }

  return (
    <motion.div ref={ref} id="about" variants={variant1} initial="hidden" animate={control} transition={{duration: 0.3, delay: 0.2}}
        className="h-auto mt-5 md:mt-32 px-2 flex flex-col items-center"
    >
        <h1 className="text-[50px] md:text-[60px] font-semibold text-center mb-5 md:mb-0"> About Me </h1>
        <div className="flex justify-center flex-col md:flex-row items-center h-[75%] md:gap-14 lg:gap-24">
            <p className="w-[85%] md:w-[50%] lg:w-[40%] text-justify text-lg md:text-xl lg:text-2xl"> I recently studied at the <b> Polytechnic University of the Philippines </b> and graduated with a <b> Bachelor of Science in Computer Science</b>.
                My expertise align with <b>Web Development</b>, <b>Application Development,</b> and <b>Machine Learning</b>. Seeking an <b>entry-level</b> opportunity to apply my 
                technical skills for software development. 
            </p>

            <img loading="lazy" src={developer} alt="programmer"  className='w-[65%] md:w-[35%] mt-10 md:mt-0 mix-blend-screen'/>
        </div>


        <div className='flex justify-center items-center flex-col'>
            <h2 className='mt-10 text-[20px] md:text-[35px] text-slate-200 font-semibold mb-6 text-center'> Learned Languages and Technology Stacks </h2>
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

        {/* <Skills />   */}

        <Laptop />
        <Mobile />  
    </motion.div>
  )
}
