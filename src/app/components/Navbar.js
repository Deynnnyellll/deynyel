'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

import Button from "./Button";

import { Menu } from "lucide-react";

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
    }

    return (
        <div className="fixed top-0 w-screen max-w-360 z-20 bg-gray-950/80 border-t border-b border-t-gray-400/50 border-b-gray-400/50 backdrop-blur-3xl flex items-center justify-between px-4 lg:px-20">
            <h3 className="text-blue-600 mt-3">{"<Deynyel />"}</h3>

            <div className="gap-6 hidden lg:flex items-center justify-center">
                {
                    navigation.map(item => (
                        <a onClick={() => handleNav(item.id, item.name == "Home" ? "/" : item.name)} key={item.id} className={`text-sm font-semibold ${item.id === activeNav ? "text-white" : "text-gray-400"} cursor-pointer hover:text-white/80 duration-200 ease-in-out`}>{item.name}</a>
                    ))
                }
            </div>
            
            <div className="block lg:hidden" onClick={() => setIsMobile(prevState => !prevState)}>
                <Button bgColor={"transparent"} textColor={"white"}>
                    <Menu size={25} />
                </Button>

                <div className={`h-screen flex items-center justify-center gap-14 flex-col w-[50%] fixed ${isMobile === true ? "right-0" : "-right-full"} top-0 bg-gray-900 duration-300 ease-in-out`}>
                    {
                        navigation.map(item => (
                            <a onClick={() => handleNav(item.id, item.name)} key={item.id} className={`text-sm font-semibold ${item.id === activeNav ? "text-white" : "text-gray-400"} cursor-pointer hover:text-white/80 duration-200 ease-in-out`}>{item.name}</a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar