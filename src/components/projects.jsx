import illuscan from '/src/assets/images/illuscan.png';
import enrollment from '/src/assets/images/enrollment.png';
import ecommerce from '/src/assets/images/ecommerce.png';
import snakelet from '/src/assets/images/snakelet.png';
import tanglaw from '/src/assets/images/tanglaw.png';
import financialAdvisor from '/src/assets/images/financial advisor.png';
import allDay from '/src/assets/images/all day movers.png';
import dogBreedClassifier from '/src/assets/images/teachme.png';
import ToggleValue from './toggleValue';


export const Projects = () => {
    const cardOne = "border-2 border-[#4E4FEB] w-[80%] md:w-[47%] md:h-[400px] mt-10 p-4 hover:translate-y-[-3%] hover:shadow-lg hover:shadow-[#864AF9] duration-300 flex flex-col";
    const cardTwo = "border-2 border-[#068FFF] w-[80%] md:w-[47%] md:h-[400px] mt-10 p-4 hover:translate-y-[-3%] hover:shadow-lg hover:shadow-[#864AF9] duration-300 flex flex-col";
    const projectText = "text-[20px] md:text-[25px] text-center font-medium mb-[-40px]";
    const imageAlignment = "w-full h-full flex items-center justify-center gap-8";
    const imageAttribute = "mt-14 md:mt-10 w-[78%] h-[150px] md:h-[270px] shadow-[#864AF9] shadow-sm";
    const textAttribute = "mt-12 md:mt-0 w-full md:w-[55%] text-justify";
    const itemAttribute = "bg-[#864AF9] bg-opacity-50  h-[30px] w-[100px] md:h-[45px] md:w-[200px] flex justify-center items-center rounded-[30px]"
    const itemAttributeDog = "bg-[#864AF9] bg-opacity-50 h-[30px] w-[100px] md:h-[45px] md:w-[120px] flex justify-center items-center rounded-[30px]"

    const containerRender = 'flex items-center flex-col md:flex-row justify-between w-[85%]';
    const containerDogRender = 'flex items-center flex-col md:flex-row justify-between w-[95%]';
    const techStacksContainer = 'mt-4 md:mt-0 flex items-center flex-row md:flex-col flex-wrap justify-center gap-4 md:gap-5';
    const techStacksContainerDog = 'mt-4 md:mt-0 flex flex-row justify-center items-center gap-4 md:gap-5 md:w-[45%] flex-wrap md:h-[200px]';

    // Language Stacks used in Projects
    const illuscanTech = ["Python", "PyQT", "Jupyter"];
    const allDayMoversTech = ["HTML", "TailwindCSS", "Javascript"];
    const financialAdvisorTech = ["Python", "Jupyter", "Tkinter"];
    const tanglawTech = ["Java", "Java Swing", "MySQL"];
    const ecommerceTech = ["HTML", "CSS", "Javascript"];
    const enrollmentTech = ["Python", 'SQLite'];
    const snakeletTech = ["Python"];
    const dogBreedTech = ["Python", "HTML", "CSS", "Javascript", "Flask", "Tensorflow"];

    // states
    const [container1, handleContainer1] = ToggleValue(false);
    const [container2, handleContainer2] = ToggleValue(false);
    const [container3, handleContainer3] = ToggleValue(false);
    const [container4, handleContainer4] = ToggleValue(false);
    const [container5, handleContainer5] = ToggleValue(false);
    const [container6, handleContainer6] = ToggleValue(false);
    const [container7, handleContainer7] = ToggleValue(false);
    const [container8, handleContainer8] = ToggleValue(false);

  return (
    <div id="projects" className="h-auto mt-20">
        <h1 className="text-[50px] md:text-[60px] font-semibold text-center mt-10"> Projects </h1>
        <div className="flex flex-col md:flex-row items-center flex-wrap justify-center text-slate-300">
            <div className={cardOne} onClick={handleContainer1}>
                <h4 className={projectText}> Illuscan - AI-Generated Images Detector </h4>
                <div className={imageAlignment}>
                    {
                        !container1 ? 
                            <img src={illuscan} alt="" className={imageAttribute}/>
                            :
                            <div className={containerRender}>
                                <p className={textAttribute}> A machine learning system developed to detect AI-generated images made by GAN (Generated Adversarial Network) technologies.
                                                    This system employed the Spatial-Frequency Domain Fusion Data as input to the Support Vector Machine classifier for the purpose
                                                    of distinguishing real and synthetic images.
                                </p>
                                <div className={techStacksContainer}>
                                    {
                                        illuscanTech.map((item, index) => (
                                            <div key={index} className={itemAttribute}>
                                                {item}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>    
                    }
                </div>
            </div>
            
            <div className={cardTwo} onClick={handleContainer2}>
                <h4 className={projectText}> All Days Movers </h4>
                <div className={imageAlignment}>
                    {
                        !container2 ? 
                            <img src={allDay} alt="" className={imageAttribute}/>
                            :
                            <div className={containerRender}>
                                <p className={textAttribute}> Static website that showcase the logistic company named All Day Movers Inc </p>
                                <div className={techStacksContainer}>
                                    {
                                        allDayMoversTech.map((item, index) => (
                                            <div key={index} className={itemAttribute}>
                                                {item}
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>    
                    }
                </div>
            </div>

            <div className={cardTwo} onClick={handleContainer3}>
                <h4 className={projectText}> AI-Driven Financial Advisor </h4>
                <div className={imageAlignment}>
                    {
                            !container3 ? 
                                <img src={financialAdvisor} alt="" className={imageAttribute}/>
                                :
                                <div className={containerRender}>
                                    <p className={textAttribute}> An AI-driven financial advisor that is trained to evaluate the financial health score of the user based on weighted income and expenses.
                                                    This system is employed with a random forest regression algorithm to handle the numerical input variables used for model prediction.
                                                    As an additional feature, it integrates intent-based chatbot to provide some queries or advice related to finance.
                                    </p>
                                    <div className={techStacksContainer}>
                                        {
                                            financialAdvisorTech.map((item, index) => (
                                                <div key={index} className={itemAttribute}>
                                                    {item}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>    
                        }
                </div>
            </div>

            <div className={cardOne} onClick={handleContainer4}>
                <h4 className={projectText}> Inventory and Sales Management System for Tanglaw Clothing </h4>
                <div className={imageAlignment}>
                {
                            !container4 ? 
                                <img src={tanglaw} alt="" className={imageAttribute}/>
                                :
                                <div className={containerRender}>
                                    <p className={textAttribute}> A system developed to manage and track the products of Tanglaw Clothing, as well as
                                                    handling sales of the said company.
                                    </p>
                                    <div className={techStacksContainer}>
                                        {
                                            tanglawTech.map((item, index) => (
                                                <div key={index} className={itemAttribute}>
                                                    {item}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>    
                        }
                </div>
            </div>

            <div className={cardOne} onClick={handleContainer5}>
                <h4 className={projectText}> Sho3we4rist </h4>
                <div className={imageAlignment}>
                {
                            !container5 ? 
                                <img src={ecommerce} alt="" className={imageAttribute}/>
                                :
                                <div className={containerRender}>
                                    <p className={textAttribute}> A simple and static e-commerce website about different sneakers </p>
                                    <div className={techStacksContainer}>
                                        {
                                            ecommerceTech.map((item, index) => (
                                                <div key={index} className={itemAttribute}>
                                                    {item}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>    
                        }
                </div>
            </div>
            
            <div className={cardTwo} onClick={handleContainer6}>
                <h4 className={projectText}> CCIS Simple Enrollment Management System </h4>
                <div className={imageAlignment}>
                {
                            !container6 ? 
                                <img src={enrollment} alt="" className={imageAttribute}/>
                                :
                                <div className={containerRender}>
                                    <p className={textAttribute}> A simple enrollment system made to record, update, remove and track the students of CCIS
                                                (College of Computer and Information Sciences) department.
                                    </p>
                                    <div className={techStacksContainer}>
                                        {
                                            enrollmentTech.map((item, index) => (
                                                <div key={index} className={itemAttribute}>
                                                    {item}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>    
                        }
                </div>
            </div>

            <div className={cardTwo} onClick={handleContainer7}>
                <h4 className={projectText}> Snakelet </h4>
                <div className={imageAlignment}>
                {
                            !container7 ? 
                                <img src={snakelet} alt="" className={imageAttribute}/>
                                :
                                <div className={containerRender}>
                                    <p className={textAttribute}> A python-like programming language developed for novice programmer.
                                                Although inspired from python, its syntax is different as the words and rules are inclined
                                                to a snake.
                                    </p>
                                    <div className={techStacksContainer}>
                                        {
                                            snakeletTech.map((item, index) => (
                                                <div key={index} className={itemAttribute}>
                                                    {item}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>    
                        }
                </div>
            </div>

            <div className={cardOne} onClick={handleContainer8}>
                <h4 className={projectText}> Teach Me Bout the Doggie </h4>
                <div className={imageAlignment}>
                {
                            !container8 ? 
                                <img src={dogBreedClassifier} alt="" className={imageAttribute}/>
                                :
                                <div className={containerDogRender}>
                                    <p className={textAttribute}> A web-based machine learning system that is trained using CNN and transfer learning to classify different breeds of dog.
                                                            This application is implemented through a Jupyter Notebook and Tensorflow library for computer vision and deep learning task.
                                    </p>
                                    <div className={techStacksContainerDog}>
                                        {
                                            dogBreedTech.map((item, index) => (
                                                <div key={index} className={itemAttributeDog}>
                                                    {item}
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>    
                        }
                </div>
            </div>
            
        </div>
    </div>
  )
}
