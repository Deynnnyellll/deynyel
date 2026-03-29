"use client"

// images
import vsCode from "@/app/assets/vscode.jpg";
import Image from "next/image";

// components
import Button from "../components/Button";


// icons
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative bg-linear-to-r from-gray-950 via-gray-900 to-gray-950 dark-bg">
            <div className="hero-bg absolute inset-0 opacity-[0.05] h-full"></div>
            <div className="relative mt-14 two-col">
                <div className="">
                    <h1>Hi, I'm <span className="text-blue-600">Danniel</span></h1>
                    <h3 className="text-gray-400">Web Developer</h3>

                    <p className="mb-6 w-[95%]">
                        I craft beautiful, responsive, and user-friendly web experiences using modern technologies. 
                        Passionate about clean code and innovative design.
                    </p>

                    <div className="flex items-center gap-4">
                        <Button type={"primary"}>
                            <div className="flex items-center justify-center gap-2">
                                View My Work
                                <ArrowRight size={20} />
                            </div>
                        </Button>
                        <Button type={"ghost"} textColor={"gray-400"}>Get in Touch</Button>
                    </div> 
                </div>

                <div className="bg-white shadow-2xl pl-20 pt-20 rounded-xl min-h-80 lg:min-h-[unset] overflow-hidden ">
                    <Image className="min-h-87.5 rounded-l-sm" src={vsCode} alt="" />
                </div>
            </div>
        </section>
    )
}