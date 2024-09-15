import { projectList } from '../assets/constants/constant';
import { useEffect, useState, useRef } from 'react';
import ProjectContainer from '/src/components/projectContainer.jsx';


export const Projects = () => {
    // card container
    const cardOne = "border-2 border-[#4E4FEB] w-[80%] md:w-[47%] md:h-[400px] mt-10 p-4 hover:translate-y-[-3%] hover:shadow-lg hover:shadow-[#864AF9] duration-300 flex flex-col cursor-pointer";
    const cardTwo = "border-2 border-[#068FFF] w-[80%] md:w-[47%] md:h-[400px] mt-10 p-4 hover:translate-y-[-3%] hover:shadow-lg hover:shadow-[#864AF9] duration-300 flex flex-col cursor-pointer";
    const projectText = "text-[20px] lg:text-[25px] text-center font-medium mb-[-40px]";
    
    // image and text
    const imageAlignment = "w-full h-full flex items-center justify-center gap-8";
    const imageAttribute = "mt-14 md:mt-10 w-[78%] h-[150px] md:h-[270px] shadow-[#864AF9] shadow-sm";
    const textAttribute = "md:text-sm lg:text-md mt-12 lg:mt-0 w-full lg:w-[55%] text-justify";
    const itemAttribute = "bg-[#864AF9] bg-opacity-50 h-[30px] w-[100px] lg:h-[45px] lg:w-[200px] flex justify-center items-center rounded-[30px]"
    const itemAttributeDog = "bg-[#864AF9] bg-opacity-50 h-[30px] w-[100px] lg:h-[45px] lg:w-[120px] flex justify-center items-center rounded-[30px]"
    
    // container render
    const containerRender = 'flex items-center flex-col lg:flex-row justify-between w-[85%]';
    const containerDogRender = 'flex items-center flex-col lg:flex-row justify-between w-[95%]';
    const techStacksContainer = 'mt-4 lg:mt-0 flex items-center flex-row lg:flex-col flex-wrap justify-center gap-4 lg:gap-5';
    const techStacksContainerDog = 'mt-4 lg:mt-0 flex flex-row justify-center items-center gap-4 lg:gap-5 lg:w-[45%] flex-wrap md:h-[200px]';

    // toggle state of cards
    const [toggleContainers, setToggleContainers] = useState([]);

    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setToggleContainers(projectList.map(() => false));
    }, [])

    const handleToggleContainer = (index) => {
        setToggleContainers(toggleContainers.map((container, i) =>
                        (i === index ? !container : container)
        ))
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => setIsVisible(entry.isIntersecting),
          { threshold: 0.005 }
        );
    
        const currentContainer = containerRef.current;
    
        if (currentContainer) {
          observer.observe(currentContainer);
          console.log(observer)
        }
    
        return () => {
          if (currentContainer) {
            observer.unobserve(currentContainer);
          }
        };
      }, []);  
  

  return (
    <div id="projects" className="h-auto mt-20 w-full flex flex-col items-center">
        <h1 className="text-[50px] md:text-[60px] font-semibold text-center mt-10"> Projects </h1>
        <div className='mt-10 flex flex-col justify-center items-start gap-10 mr-auto ml-auto'>
            {
                projectList.map((item, index) => (
                    <div key={item.id}>
                        <ProjectContainer 
                            source={item.source} 
                            name={item.name} 
                            description={item.description} 
                            projects={projectList} index={index}
                            ref={containerRef}
                        />
                    </div>
                ))
            }
        </div>
        {/* <div className="flex flex-col md:flex-row items-center flex-wrap justify-center text-slate-300">
            {
                projectList.map(project => (
                    <div key={project.id} className={project.id % 4 === 0 || project.id % 4 === 1 ? cardOne : cardTwo} onClick={() => handleToggleContainer(project.id)}>
                        <h4 className={projectText}> {project.name} </h4>
                        <div className={imageAlignment}>
                            {
                                !toggleContainers[project.id] ?
                                    <img src={project.source} alt="Dog Breed Classifier" className={imageAttribute} />
                                    :
                                    <div className={project.name === "Teach Me 'Bout the Doggie " ? containerDogRender : containerRender}>
                                        <p className={textAttribute}> {project.description} </p>
                                        <div className={project.name === "Teach Me 'Bout the Doggie " ? techStacksContainerDog : techStacksContainer}>
                                            {
                                                project.techStacks.map((item, index) => (
                                                    <div key={index} className={project.name === "Teach Me 'Bout the Doggie " ? itemAttributeDog : itemAttribute}> 
                                                        {item}
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>   
                ))
            }
        </div> */}
    </div>
  )
}
