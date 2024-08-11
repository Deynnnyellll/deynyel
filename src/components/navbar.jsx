import { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-scroll";

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

  return (
    <>
    <div className={!show ? 
                    "hidden md:block md:h-16 w-full fixed ease-in-out duration-300" 
                    : 
                    "hidden md:block md:h-16 w-full fixed bg-black bg-opacity-50 backdrop-blur-2xl z-10 ease-in-out duration-300"}>
      <ul className=
      {show ? 
        "flex items-center justify-center text-center text-tigh gap-5 float-right me-10 text-xl w-[25%] h-full font-semibold ease-in-out duration-300 cursor-pointer" 
        : 
        "flex items-center justify-center text-center text-tigh gap-5 float-right me-10 text-xl w-[25%] h-full font-semibold opacity-0 ease-in-out duration-300 cursor-pointer"
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
    </div>

      {/* view for smaller device */}
      <div className={"p-1 rounded-sm md:hidden fixed bg-opacity-60 left-3 top-5 text-3xl z-10"}>
        {!option ? <CiMenuBurger onClick={toggleOption}/> : <p onClick={toggleOption} className="font-thin"> X </p>}
      </div>

      <div className={option ? "md:hidden h-[100vh] w-[65%] fixed bg-black bg-opacity-100 duration-300 ease-in-out left-0" 
                              : 
                                "md:hidden left-[-10%]"}>
            <ul className={!option ? "hidden" 
                              : 
                                "w-full h-[90%] font-semibold text-slate-100 flex justify-center items-center flex-col text-3xl gap-5"}>
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
      </div>
    </>
  )
}
