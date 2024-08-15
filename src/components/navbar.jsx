import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { TbLetterX } from "react-icons/tb";
import { SiGithub } from "react-icons/si";
import { Link } from "react-scroll";
import logo from '/src/assets/images/D.png'

export const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [option, setOption] = useState(false);

  const controlNavBar = () => {
    // if scroll down, hide the navbar
    if (window.scrollY > lastScroll) {
      setShow(false);
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

  const toggleOption = () => {
    setOption(!option);
  };

  const optionAttribute = "md:hidden p-1 rounded-sm text-4xl top-[1%] left-2 fixed z-10";

  return (
    <>
    <div className={!show ? 
                    "hidden md:flex md:items-center top-[-10%] justify-between gap-[400px] px-6 md:h-16 w-full fixed bg-black bg-opacity-20 backdrop-blur-2xl z-10 ease-in-out duration-300" 
                    : 
                    "hidden md:flex md:items-center top-0 justify-between gap-[400px] px-6 md:h-16 w-full fixed bg-black bg-opacity-20 backdrop-blur-2xl z-10 ease-in-out duration-300"}>
      <img src={logo} alt="logo" className={show ? "w-[50px] duration-200" : "hidden"}/>
      <ul className=
      {show ? 
        "flex items-center justify-between text-center text-tight me-10 text-xl w-[30%] h-full font-semibold ease-in-out cursor-pointer" 
        : 
        "hidden"
      }
      >

          <li className="hover:text-slate-400"> 
            <Link to="home" duration={300} smooth={true}>
              Home
            </Link>
          </li>
          <li className="hover:text-slate-400"> 
            <Link to="about" duration={300} smooth={true}>
              About Me
            </Link>
          </li>
          <li className="hover:text-slate-400"> 
            <Link to="projects" duration={300} smooth={true}>
              Projects
            </Link>
          </li>
          <li className="hover:text-slate-400"> 
            <Link to="contact" duration={300} smooth={true}>
              Contact
            </Link>
          </li>
      </ul>
      {
        show &&
          <a className="px-3 py-1 bg-slate-50 rounded-2xl text-slate-800 flex items-center gap-2" target="_blank" href="https://github.com/Deynnnyellll">
            <SiGithub  className="text-2xl font"/>
            <p className="font-semibold"> Github </p>
          </a>
      }
    </div>

      {/* view for smaller device */}
      <div className={"md:hidden fixed bg-opacity-5 w-full bg-black backdrop-blur-md h-12 px-2 z-5 flex justify-end items-center"}>
        <img src={logo} alt="logo" className="w-[35px] h-[35px]"/>
      </div>
      {!option ? <CiMenuBurger onClick={toggleOption} className={optionAttribute} /> : <TbLetterX onClick={toggleOption} className={optionAttribute} />}

      <div className={option ? "md:hidden h-[100vh] w-[65%] fixed bg-black bg-opacity-95 duration-300 ease-in-out left-0 flex flex-col justify-center" 
                              : 
                                "md:hidden h-[100vh] w-[65%] fixed bg-black bg-opacity-95 duration-300 ease-in-out left-[-65%] flex flex-col justify-center"}>
            <ul className={!option ? "hidden" 
                              : 
                                "w-full h-[45%] font-semibold text-slate-100 flex justify-between  items-center flex-col text-2xl"}>
              <li className="hover:text-slate-400"> 
                <Link to="home" duration={300} smooth={true}>
                  Home
                </Link>
              </li>
              <li className="hover:text-slate-400"> 
                <Link to="about" duration={300} smooth={true}>
                  About Me
                </Link>
              </li>
              <li className="hover:text-slate-400"> 
                <Link to="projects" duration={300} smooth={true}>
                  Projects
                </Link>
              </li>
              <li className="hover:text-slate-400"> 
                <Link to="contact" duration={300} smooth={true}>
                  Contact
                </Link>
              </li>

              <a className="px-4 py-1 bg-slate-50 rounded-3xl text-slate-800 flex items-center gap-2" href="https://github.com/Deynnnyellll">
                <SiGithub  className="text-xl"/>
                <p className="font-semibold text-[16pt]"> Github </p>
              </a>
            </ul>
      </div>
    </>
  )
}
