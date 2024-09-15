// tech stacks
import { IoLogoJavascript, IoLogoPython, IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import { SiScikitlearn, SiFlask } from "react-icons/si";
import { RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import { SiJupyter, SiTensorflow } from "react-icons/si";

// skills
import { TbWorldWww } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";
import { BiDesktop } from "react-icons/bi";

// images
import illuscan from '/src/assets/images/illuscan.png';
import snakelet from '/src/assets/images/snakelet.png';
import financialAdvisor from '/src/assets/images/financial.png';
import allDay from '/src/assets/images/allday.png';
import dogBreedClassifier from '/src/assets/images/dogbreed.png';

    // Language Stacks used in Projects
    const illuscanTech = ["Python", "PyQT", "Jupyter"];
    const allDayMoversTech = ["HTML", "TailwindCSS", "Javascript"];
    const financialAdvisorTech = ["Python", "Jupyter", "Tkinter"];
    const snakeletTech = ["Python"];
    const dogBreedTech = ["Python", "HTML", "CSS", "Javascript", "Flask", "Tensorflow"];

export const techStacks = [
    {
        id: 0,
        logo: <IoLogoPython />
    },
    {
        id: 1,
        logo: <IoLogoJavascript />
    },
    {
        id: 2,
        logo: <IoLogoHtml5 />
    },
    {
        id: 3,
        logo: <IoLogoCss3 />
    },
    {
        id: 4,
        logo: <RiTailwindCssFill />
    },
    {
        id: 5,
        logo: <RiReactjsFill />
    },
    {
        id: 6,
        logo: <SiFlask />
    },
    {
        id: 7,
        logo: <SiJupyter />
    },
    {
        id: 8,
        logo: <SiTensorflow />
    },
    {
        id: 9,
        logo: <SiScikitlearn />
    },
]

export const projectList = [
    {
        id: 0,
        name: "Illuscan - AI-Generated Images Detector",
        source: illuscan,
        description: "A machine learning system developed to detect AI-generated images made by GAN (Generated Adversarial Network) technologies. This system employed the Spatial-Frequency Domain Fusion Data as input to the Support Vector Machine classifier for the purpose of distinguishing real and synthetic images.",
        techStacks: illuscanTech,
    },
    {
        id: 1,
        name: "All Day Movers",
        source: allDay,
        description: "A static website designed to showcase the services and offerings of All Day Movers Inc., a logistics company. This website provides users with essential information about the company's operations, fleet details, and services such as freight shipping, warehousing, and transportation solutions. Built with a focus on simplicity and clarity, the website is optimized for fast loading times and easy navigation, ensuring a smooth user experience.",
        techStacks: allDayMoversTech
    },
    {
        id: 2,
        name: "AI-Driven Financial Advisor",
        source: financialAdvisor,
        description: "An AI-driven financial advisor that is trained to evaluate the financial health score of the user based on weighted income and expenses. This system is employed with a random forest regression algorithm to handle the numerical input variables used for model prediction. As an additional feature, it integrates intent-based chatbot to provide some queries or advice related to finance.",
        techStacks: financialAdvisorTech
    },
    {
        id: 3,
        name: "Snakelet",
        source: snakelet,
        description: "A python-like programming language developed for novice programmer. Although inspired from python, its syntax is different as the words and rules are inclined to a snake.",
        techStacks: snakeletTech
    },
    {
        id: 4,
        name: "Teach Me 'Bout the Doggie",
        source: dogBreedClassifier,
        description: "A web-based machine learning system that is trained using CNN and transfer learning to classify different dog breeds. This application is implemented through a Flask framework, while the ML model is developed using Jupyter Notebook as a platform and Tensorflow library to build a CNN architecture.",
        techStacks: dogBreedTech
    },
]

export const skills = [
    {
        id: 0,
        name: "Web Development",
        icon: <TbWorldWww />,
        description: "Creating a user-friendly, aestethically pleasing, and responsive web application using popular libraries and frameworks including React JS, TailwindCSS, and Flask"
    },
    {
        id: 1,
        name: "Machine Learning",
        icon: <GiArtificialIntelligence />,
        description: "Creating various machine learning models that can potentially solve real-world problems through Python and popular libraries such as Sci-kit learn and Tensorflow "
    },
    {
        id: 2,
        name: "Application Development",
        icon: <BiDesktop />,
        description: "Developing software applications using Python"
    }
]