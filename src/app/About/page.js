'use client'

import aboutImg from "@/app/assets/about-decorative.jpg"

import Image from "next/image";
import Button from "../components/Button";

// icons
import { Download } from "lucide-react";

// section
import MyJourney from "../section/MyJourney";
import TechnologyStack from "../section/TechnologyStack";

export default function About() {
    return (
        <>
            <section className="dark-bg">
                <div className="mt-20 two-col">
                    <div>
                        <p className="text-blue-600! text-xs! font-bold mb-1">ABOUT ME</p>

                        <h1>The Developer Behind the Code</h1>

                        <p className="mb-4">
                            {`I'm a passionate front-end developer with a keen eye for design and a love 
                            for creating seamless user experiences.`}
                        </p>

                        <p className="mb-8">
                            With over 2 years of experience in web development, 
                            I specialize in building modern, responsive applications using the latest technologies. 
                            I believe in writing clean, maintainable code and continuously learning to stay at 
                            the forefront of web development. I am also enthusiastic in the field of machine learning and 
                            other emerging technologies.
                        </p>

                        <Button type={"primary"}>
                            <div className="flex items-center justify-center gap-2">
                                <Download size={30} />
                                Download Resume
                            </div>
                        </Button>
                    </div>

                    <div className="rounded-lg overflow-hidden min-h-80 lg:min-h-[unset]">
                        <Image src={aboutImg} alt="" />
                    </div>
                </div>
            </section>

            <MyJourney />
            <TechnologyStack />
        </>
    )
}