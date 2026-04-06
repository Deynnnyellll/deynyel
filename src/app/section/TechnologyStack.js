'use client'

import { RiNodejsLine, RiHtml5Line, RiCss3Line, RiNextjsLine, RiReactjsLine, RiTailwindCssLine, RiBootstrapLine, RiGithubLine } from "react-icons/ri";
import { TbBrandPython, TbBrandAdobeXd,TbBrandFigma, TbSquareLetterM, TbBrandFramerMotion, TbBrandVscode } from "react-icons/tb"; 
import { SiRedux, SiScikitlearn, SiJupyter, SiCssmodules, SiExpress } from "react-icons/si";
import { IoColorPaletteOutline, IoLogoSass } from "react-icons/io5";
import { GiNeedleJaws } from "react-icons/gi";
import { Code, Box, Palette, Wrench, Cloud, Server, TestTube } from "lucide-react";

export default function TechnologyStack() {
    const programmingLanguages = [
        { id: 1, name: "Javascript", logo: RiNodejsLine },
        { id: 2, name: "Python", logo: TbBrandPython },
        { id: 3, name: "HTML", logo: RiHtml5Line },
        { id: 4, name: "CSS", logo: RiCss3Line }
    ];
    
    const frameworks = [
        { id: 1, name: "React JS", logo: RiReactjsLine },
        { id: 2, name: "Next JS", logo: RiNextjsLine },
        { id: 3, name: "Framer Motion", logo: TbBrandFramerMotion },
        { id: 4, name: "Redux", logo: SiRedux },
        { id: 5, name: "Scikit-learn", logo: SiScikitlearn },
        { id: 6, name: "Jupyter Notebook", logo: SiJupyter }
    ]

    const styling = [
        { id: 1, name: "Tailwind CSS", logo: RiTailwindCssLine },
        { id: 2, name: "Bootstrap", logo: RiBootstrapLine },
        { id: 3, name: "SASS", logo: IoLogoSass },
        { id: 4, name: "CSS Modules", logo: SiCssmodules },
        { id: 5, name: "Material UI", logo: TbSquareLetterM }
    ]

    const platform = [
        { id: 1, name: "GitHub", logo: RiGithubLine },
        { id: 2, name: "VsCode", logo: TbBrandVscode },
        { id: 3, name: "Figma", logo: TbBrandFigma },
        { id: 4, name: "Adobe XD", logo: TbBrandAdobeXd }
    ]

    const backend = [
        { id: 1, name: "Node JS", logo: RiNodejsLine },
        { id: 2, name: "Express JS", logo: SiExpress },
        { id: 3, name: "REST API", logo: Cloud }
    ]

    const testing = [
        { id: 1, name: "WCAG Contrast", logo: IoColorPaletteOutline },
        { id: 2, name: "JAWS", logo: GiNeedleJaws }
    ]

    const technologyStack = [
        { tech: "Programming Languages", desc: "Core", logo: Code, stack: programmingLanguages, color: "bg-blue-900/50" },
        { tech: "Frameworks & Libraries", desc: "Core", logo: Box, stack:  frameworks, color: "bg-blue-900/50" },
        { tech: "Styling & Design", logo: Palette, stack: styling, color: "bg-pink-800/50" },
        { tech: "Platforms & Tools", logo: Wrench, stack: platform, color: "bg-indigo-900/50" },
        { tech: "Backend and APIs", logo: Server, stack: backend, color: "bg-yellow-700/50" },
        { tech: "Testing", logo: TestTube, stack: testing, color: "bg-amber-700/50" }
    ];
    
    return (
        <section className="dark-bg py-8">
            <div className="*:text-center! mb-8">
                <p className="text-blue-600! text-xs! font-bold mb-1">EXPERTISE</p>

                <h1>Technology Stack</h1>

                <p>My expertise across various front-end and web technologies</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 content-center justify-center gap-4 mb-4 *:border *:border-gray-400/15 *:min-h-75 *:rounded-2xl">
                {
                    technologyStack.map((item, index) => {
                        const IconComponent = item.logo

                        return (
                            <div key={index} className="px-8 py-4 bg-gray-900/25 backdrop-blur-3xl">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <p className={`${item.color} rounded-xl p-2 text-white!`}><IconComponent size={20} /></p>
                                        <p className="font-bold! text-white!">{item.tech}</p>
                                    </div>

                                    {item.desc && <p className="bg-blue-90 px-4 py-1 rounded-full text-xs!">{item.desc}</p> }
                                </div>

                                <div className="col-span-1 content-start gap-4 grid grid-cols-1 lg:grid-cols-2">
                                    {
                                        item.stack.map(item => {
                                            const IconComponent = item.logo;

                                            return (
                                                <div key={item.id} className="px-6 py-6 flex items-center justify-start gap-4 col-span-1 border border-gray-300/15 rounded-xl text-white! h-10">
                                                    <IconComponent size={30} className="border border-gray-300/15 bg-gray-800/50 p-0.5 rounded-lg" />
                                                    <p className="text-white!">{item.name}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}