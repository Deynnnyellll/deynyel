"use client"

import { GraduationCap, Briefcase, Building2 } from "lucide-react";

export default function MyJourney() {
    const journey = [
        {
            id: 1,
            career: {
                milestone: "Education",
                year: "2020 - 2024",
                role: "BS Computer Science",
                company: "Polytechnic University of the Philippines",
                description: "Graduated with Cum Laude, majoring in Computer Science with a focus on Web Development and Machine Learning."
            },
            icon: <GraduationCap size={50} />
        },
        {
            id: 2,
            career: {
                milestone: "Internship",
                year: "2022",
                role: "Front End Developer",
                company: "LexMeet Inc.",
                description: "As a Front End Developer, I worked on developing the user interface of the company's web portal for lawyers and their customers."
            },
            icon: <Briefcase  size={50} />
        },
        {
            id: 3,
            career: {
                milestone: "Current Role",
                year: "2024 - Present",
                role: "Junior Web Developer",
                company: "International Business Machine",
                description: "As a Junior Web Developer, my responsibility is to build internal web applications of the company."
            },
            icon: <Building2 size={50} />
        }
    ]
    return (
        <section className="mt-14 py-8 min-h-screen">
            <div>
                <p className="text-blue-600! text-xs! font-bold mb-1">CAREER PATH</p>
                <h1>My Journey</h1>

                <div className="mt-10 flex items-center justify-center flex-col">
                    {
                        journey.map((item, index) => (
                            <div key={item.id} className={`career-path relative flex items-center gap-32 ${ index === 1 && "flex-row-reverse"}`}>
                                <div className="w-[50%] p-14 pb-24">
                                    <p className="text-xs uppercase text-blue-900! font-semibold!">{item.career.milestone}</p>
                                    <h2>{item.career.role}</h2>
                                    <p className="text-sm mb-4 text-gray-700!">{item.career.year}</p>
                                    <p className="p-2 bg-blue-300/50 text-blue-800! rounded-lg inline">{item.career.company}</p>
                                    <p className="mt-4 text-gray-700!">{item.career.description}</p>

                                </div>

                                <div className="bg-blue-300/50 rounded-xl p-4 text-blue-800">{item.icon}</div>
                            </div>
                        ))  
                    }
                </div>
            </div>
        </section>
    )
}