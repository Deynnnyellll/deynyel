'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "./Button";

import { Menu, PanelRightClose } from "lucide-react";

function Navbar() {
    const navigation = [
        { id: 1, name: "Home", link: "#" },
        { id: 2, name: "About", link: "#" },
        { id: 3, name: "Projects", link: "#" },
        { id: 4, name: "Contact", link: "#" }
    ]
    const [activeNav, setActiveNav] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();

    function handleNav(id, name) {
        setActiveNav(id);
        router.push(`/${name}`);
        setIsMobile(false)
    }

    return (
        <section className="fixed top-0 w-screen z-20 bg-gray-950/80 border-t border-b border-t-gray-400/50 border-b-gray-400/50 backdrop-blur-3xl">
            <div className="flex items-center justify-between px-4 lg:px-20">
                <h3 className="text-blue-600 mt-3">{"<Deynyel />"}</h3>

                <div className="gap-6 hidden lg:flex items-center justify-center">
                    {
                        navigation.map(item => (
                            <a onClick={() => handleNav(item.id, item.name == "Home" ? "/" : item.name)} key={item.id} className={`text-sm font-semibold ${item.id === activeNav ? "text-white" : "text-gray-400"} cursor-pointer hover:text-white/80 duration-200 ease-in-out`}>{item.name}</a>
                        ))
                    }
                </div>
                
                <div className="block lg:hidden">
                    <div className={`relative z-50 ${isMobile === true ?  "left-15" : "left-10"}`}>
                        <Button bgColor={"transparent"} textColor={"white"}  action={() => setIsMobile(prevState => !prevState)}>
                            {isMobile == false ? <Menu size={25} /> : <PanelRightClose size={25} /> }
                        </Button>
                    </div>
                </div>

                <div className={`h-screen flex items-center justify-center gap-10 flex-col w-[50%] absolute ${isMobile === true ? "right-0" : "right-[-200%]"} top-0 bg-gray-900 duration-400 ease-in-out`}>
                    {
                        navigation.map(item => (
                            <a onClick={() => handleNav(item.id, item.name == "Home" ? "/" : item.name)} key={item.id} className={`text-2xl font-semibold ${item.id === activeNav ? "text-white" : "text-gray-400"} cursor-pointer hover:text-white/80 duration-200 ease-in-out`}>{item.name}</a>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Navbar