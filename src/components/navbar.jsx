import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { TbSquareLetterXFilled } from "react-icons/tb";
import { SiGithub } from "react-icons/si";

import { Link } from "react-scroll";
import logo from '/src/assets/images/D.png';

export const Navbar = () => {
  const [option, setOption] = useState(false);

  const toggleOption = () => {
    setOption(!option);
  };

  const optionAttribute = "md:hidden p-1 rounded-sm text-4xl top-[1%] left-2 fixed z-30";

  return (
    <>
    <div className="hidden md:flex md:items-center top-0 justify-between gap-[20%] px-6 md:h-16 w-full absolute z-10 ease-in-out duration-300">
      <img src={logo} alt="logo" className="w-[50px] duration-200" />
      <ul 
        className="flex items-center justify-between text-center text-tight me-10 md:text-md gap-4 text-xl w-[30%] h-full font-semibold ease-in-out cursor-pointer" 
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
      <a className="px-3 py-2 bg-darkTwo hover:py-[4.5px] hover:bg-gray-900 duration-200 ease-in-out rounded-2xl text-lightOne flex items-center gap-2" target="_blank" href="https://github.com/Deynnnyellll">
        <SiGithub  className="text-2xl"/>
        <p className="font-semibold"> GitHub </p>
      </a>
    </div>

      {/* view for smaller device */}
      <div className={"md:hidden fixed bg-opacity-5 w-full bg-[#0F0F0F] backdrop-blur-md h-12 px-2 z-20 flex justify-end items-center"}>
        <img src={logo} alt="logo" className="w-[35px] h-[35px]"/>
      </div>
      {!option ? <CiMenuBurger onClick={toggleOption} className={optionAttribute} /> : <TbSquareLetterXFilled onClick={toggleOption} className="md:hidden rounded-sm text-4xl top-[1%] left-2 fixed z-40" />}
      <div className={`w-full h-[100vh] bg-black opacity-80 fixed ${option ? 'duration-200' : 'duration-500'} z-20 ${option ? 'left-0' : 'left-[-100%]'}`}>
      </div>
      <div className={`md:hidden h-[100vh] w-full fixed bg-[#0F0F0F] ${!option ? 'duration-200' : 'duration-700'} ease-in-out ${option ? 'left-0' : 'left-[-100%]'} flex flex-col justify-center z-30`}>
            <ul className={!option ? "hidden" : "w-full h-[60%] font-semibold text-slate-100 flex justify-center items-center gap-20 flex-col text-3xl"}>
              <li className="hover:text-slate-400"> 
                <Link to="home" duration={1100} smooth={true} onClick={() => setOption(prevState => !prevState)}>
                  Home
                </Link>
              </li>
              <li className="hover:text-slate-400"> 
                <Link to="about" duration={1100} smooth={true} onClick={() => setOption(prevState => !prevState)}>
                  About Me
                </Link>
              </li>
              <li className="hover:text-slate-400"> 
                <Link to="projects" duration={1100} smooth={true} onClick={() => setOption(prevState => !prevState)}>
                  Projects
                </Link>
              </li>
              <li className="hover:text-slate-400"> 
                <Link to="contact" duration={1100} smooth={true} onClick={() => setOption(prevState => !prevState)}>
                  Contact
                </Link>
              </li>

              <a className="px-4 py-[2px] bg-slate-50 hover:bg-slate-200 rounded-2xl text-slate-800 flex items-center gap-2" href="https://github.com/Deynnnyellll">
                <SiGithub  className="text-xl"/>
                <p className="font-semibold text-[16pt]"> GitHub </p>
              </a>
            </ul>
      </div>
    </>
  )
}
