import { IoLogoJavascript, IoLogoPython, IoLogoHtml5, IoLogoCss3 } from "react-icons/io5";
import { SiScikitlearn, SiFlask } from "react-icons/si";
import { RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import { SiJupyter, SiTensorflow } from "react-icons/si";

// images
import illuscan from '/src/assets/images/illuscan.png';
import enrollment from '/src/assets/images/enrollment.png';
import ecommerce from '/src/assets/images/ecommerce.png';
import snakelet from '/src/assets/images/snakelet.png';
import tanglaw from '/src/assets/images/tanglaw.png';
import financialAdvisor from '/src/assets/images/financial advisor.png';
import allDay from '/src/assets/images/all day movers.png';
import dogBreedClassifier from '/src/assets/images/teachme.png';

    // Language Stacks used in Projects
    const illuscanTech = ["Python", "PyQT", "Jupyter"];
    const allDayMoversTech = ["HTML", "TailwindCSS", "Javascript"];
    const financialAdvisorTech = ["Python", "Jupyter", "Tkinter"];
    const tanglawTech = ["Java", "Java Swing", "MySQL"];
    const ecommerceTech = ["HTML", "CSS", "Javascript"];
    const enrollmentTech = ["Python", 'SQLite'];
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
        description: "Static website that showcase the logistic company named All Day Movers Inc.",
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
        name: "Inventory and Sales Management System for Tanglaw Clothing",
        source: tanglaw,
        description: "A desktop application system that is developed for inventory and sales management of Tanglaw Clothing. It has a CRUD function for the purpose of managing and tracking different entities, as well as handling sales of the company.",
        techStacks: tanglawTech
    },
    {
        id: 4,
        name: "Sho3we4r1st",
        source: ecommerce,
        description: "A simple and static e-commerce website of different sneakers developed through basic HTML, CSS and JavaScript.",
        techStacks: ecommerceTech
    },
    {
        id: 5,
        name: "CCIS Simple Enrollment Management System",
        source: enrollment,
        description: "A simple enrollment system made to record, update, remove and track the students of CCIS (College of Computer and Information Sciences) department.",
        techStacks: enrollmentTech
    },
    {
        id: 6,
        name: "Snakelet",
        source: snakelet,
        description: "A python-like programming language developed for novice programmer. Although inspired from python, its syntax is different as the words and rules are inclined to a snake.",
        techStacks: snakeletTech
    },
    {
        id: 7,
        name: "Teach Me 'Bout the Doggie",
        source: dogBreedClassifier,
        description: "A web-based machine learning system that is trained using CNN and transfer learning to classify different dog breeds. This application is implemented through a Flask framework, while the ML model is developed using Jupyter Notebook as a platform and Tensorflow library to build a CNN architecture.",
        techStacks: dogBreedTech
    },
]