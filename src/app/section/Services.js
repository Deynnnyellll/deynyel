"use client"

// components
import Card from "../components/Card";

// icons
import { Code, BrainCircuit, Accessibility, Palette, Ban } from "lucide-react";

export default function Services() {
    const services = [
        {id: 1, icon: <Code />, heading: "Clean Code", paragraph: "I write clean, maintainable, and scalable code by following industry best practices and modern web standards to ensure long-term reliability and performance."},
        {id: 2, icon: <BrainCircuit />, heading: "Machine Learning", paragraph: "I develop software solutions that integrate machine learning and artificial intelligence concepts to create smarter, data-driven web applications."},
        {id: 3, icon: <Accessibility />, heading: "Accessibility", paragraph: "I build inclusive web applications with accessibility in mind, ensuring usability for a diverse range of users, including people with disabilities."},
        {id: 4, icon: <Palette />, heading: "UI/UX Design", paragraph: "I design intuitive and visually appealing user interfaces that deliver seamless and engaging experiences across all devices."}
    ];

    return (
        <section>
            <div className="text-center px-20 mt-20 mb-20">
                <h2>What I Do</h2>

                <p className="mb-8 text-center!">
                    Blending technical expertise with creative thinking to build impactful digital experiences
                </p>

                <div className={`flex justify-center flex-col lg:flex-row gap-4 *:basis-1/${services.length}`}>
                    {
                        services.map(service => (
                            <Card 
                                key={service.id}
                                cardStyle={"bg-blue-100/75 rounded-lg text-left"}
                                iconColor={"blue-700"}
                                icon={service.icon} 
                                heading={service.heading} 
                                paragraph={service.paragraph} 
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}