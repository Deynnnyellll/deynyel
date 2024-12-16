import { useEffect, useState } from "react";
import { SiGithub } from "react-icons/si";

import { Link } from "react-scroll";
import logo from '/src/assets/images/D.png'
import { useContext } from "react";
import { Hero } from "../context/context";

function SeparateNav() {
    const [show, setShow] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
    const {isView} = useContext(Hero);

    const controlNavBar = () => {
        // if scroll down, hide the navbar
        if (window.scrollY > lastScroll) {
        setShow(true);
        }
        else {
        // navbar will show if scroll up
        setShow(true);
        }

        setLastScroll(window.scrollY)
    };


    useEffect(() => {
        window.addEventListener('scroll', controlNavBar);

        return () => {
        window.removeEventListener('scroll', controlNavBar);
        }
    });

  return (
    <div 
        className={`hidden md:flex md:items-center justify-between gap-[20%] px-6 md:h-20 w-full bg-opacity-20 backdrop-blur-2xl z-10 ease-in-out duration-500 ${isView === true ? 'fixed top-0 bg-darkOne': 'absolute bg-darkTwo shadow-black'}`}>
        <img src={logo} alt="logo" className={show ? "w-[50px] duration-200" : "hidden"}/>
        <ul className=
        {show ? 
        "flex items-center justify-between text-center text-tight me-10 md:text-md gap-4 text-xl w-[30%] h-full font-semibold ease-in-out cursor-pointer" 
        : 
        "hidden"
        }
        >

            <li className="hover:text-slate-400"> 
                <Link to="home" duration={1100} smooth={true}>
                Home
                </Link>
            </li>
            <li className="hover:text-slate-400"> 
                <Link to="about" duration={1100} smooth={true}>
                About Me
                </Link>
            </li>
            <li className="hover:text-slate-400"> 
                <Link to="projects" duration={1100} smooth={true}>
                Projects
                </Link>
            </li>
            <li className="hover:text-slate-400"> 
                <Link to="contact" duration={1100} smooth={true}>
                Contact
                </Link>
            </li>
        </ul>
        {
            show &&
            <a className="px-3 py-2 bg-darkTwo hover:py-[4.5px] hover:bg-gray-900 duration-200 ease-in-out rounded-2xl text-lightOne shadow-sm shadow-darkOne flex items-center gap-2" target="_blank" href="https://github.com/Deynnnyellll">
                <SiGithub  className="text-2xl"/>
                <p className="font-semibold"> GitHub </p>
            </a>
        }
    </div>
  )
}

export default SeparateNav