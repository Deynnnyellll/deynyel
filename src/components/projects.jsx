import { projectList } from '../assets/constants/constant';
import ProjectContainer from '/src/components/projectContainer.jsx';


export const Projects = () => {
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
                        />
                    </div>
                ))
            }
        </div>
    </div>
  )
}
