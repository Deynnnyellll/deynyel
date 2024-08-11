import { Typewriter } from 'react-simple-typewriter'

export const Typer = () => {
  return (
      <div className='flex flex-col items-center me-0 md:me-20'>
          <h1 className='text-[40px] md:text-[80px] font-bold md:font-normal'> Hi, I am Danniel </h1>
          <h4 className='text-3xl md:text-5xl'>
               &#123; <span className='text-gray-400 font-bold text-3xl md:text-5xl'>
                      <Typewriter words={['Web Developer', 'Python Developer', 'AI/ML Engineer']} loop={true} cursor typeSpeed={100}>
                          {({ currentWord }) => <>{currentWord}</>}
                      </Typewriter>
                </span> &#125;
          </h4>
      </div>
  )
}
