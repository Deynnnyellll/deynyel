'use client'

import Tabs from "../components/Tabs";
import ProjectCard from "../components/ProjectCard";
import placeholderImage from "@/app/assets/placeholder-img.jpg";

export default function RecentProject() {
    const tabControl = [
        { id: 1, name: "All" },
        { id: 2, name: "Front End" },
        { id: 3, name: "Full Stack" },
        { id: 4, name: "Terminal" },
        { id: 5, name: "Machine Learning" }
    ];

    const recentProjects = [
        {   
            id: 1,
            name: "Bill Splitter", 
            caption: "This is a placeholder caption", 
            img: placeholderImage, 
            stacks: [
                {id: 1, name: "Next"},
                {id: 2, name: "Tailwind CSS"},
                {id: 3, name: "Tesseract JS"}
            ],
            span: "col-span-3"
        },
        {   
            id: 2,
            name: "Illuscan", 
            caption: "This is a placeholder caption", 
            img: placeholderImage, 
            stacks: [
                {id: 1, name: "Python"},
                {id: 2, name: "Scikit-learn"},
                {id: 3, name: "Jupyter Notebook"}
            ],
            span: "col-span-2"
        },
        {   
            id: 3,
            name: "Digital Portfolio", 
            caption: "This is a placeholder caption", 
            img: placeholderImage, 
            stacks: [
                {id: 1, name: "Next"},
                {id: 2, name: "Tailwind CSS"},
            ],
            span: "col-span-2"
        },
        {   
            id: 4,
            name: "Teach Me 'Bout the Doggie", 
            caption: "This is a placeholder caption", 
            img: placeholderImage, 
            stacks: [
                {id: 1, name: "Python"},
                {id: 2, name: "Jupyter Notebook"},
                {id: 3, name: "Tensorflow"},
                {id: 4, name: "Flask"}
            ],
            span: "col-span-3"
        },
         {   
            id: 5,
            name: "Snakelet", 
            caption: "This is a placeholder caption", 
            img: placeholderImage, 
            stacks: [
                {id: 1, name: "Python"}
            ],
            span: "col-span-1"
        },
    ]

    return (
        <section className="dark-bg">
            <div className="mb-8">
                <Tabs tabControls={tabControl}>
                    <div className={`grid grid-cols-5 gap-4`}>
                        {
                            recentProjects.map(item => (
                                <div key={item.id} className={item.span}>
                                    <ProjectCard 
                                    title={item.name} 
                                    caption={item.caption} 
                                    img={item.img} 
                                    stacks={item.stacks}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </Tabs>
            </div>
        </section>
    )
}