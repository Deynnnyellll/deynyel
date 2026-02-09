"use client"

import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/themes/themeSlice";
import { FaSun, FaMoon } from "react-icons/fa"

export default function Navbar() {
  const themeValue = useSelector((state) => state.theme.value);
  const dispatch = useDispatch();

  const navigations = ["Home", "About", "Projects", "Contacts"]

  return (
    <div className={`w-full py-2 px-6 flex items-center justify-between ${themeValue === false ? "text-black bg-white" : "text-white bg-black"}`}>
        <h2 className="text-2xl font-bold uppercase">Danniel</h2>

       <ul className="flex items-center justify-center no-underline gap-6 font-medium font-xl">
            {
              navigations.map((item, index) => (
                <li key={index} className="font-medium">{item}</li>
              ))
            }
       </ul>

       <button onClick={() => dispatch(toggleTheme())} 
        className={`border-2 py-2 mb-2 px-6 rounded-full ${themeValue !== false ? "bg-black text-white" : "bg-white text-black"} duration-300`}>
          <div className={`flex items-center justify-center gap-3 ${themeValue === false ? "flex-row" : "flex-row-reverse"} duration-200 ease-in`}>
              {
                themeValue === false ?
                <>
                  <FaSun size={25} />
                  <p>Light</p>
                </> :
                <>
                  <FaMoon size={25} />
                  <p>Light</p>
                </>
              }
            </div>
       </button>
    </div>
  )
}
