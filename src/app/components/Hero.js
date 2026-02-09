"use client"

import Glass from "./Glass";
import { useSelector } from "react-redux";


export default function Hero() {
  const themeValue = useSelector((state) => state.theme.value);

  return (
    <div className="hero h-screen w-screen">
        <div className="w-[95%] h-[95%] mx-auto relative overflow-hidden rounded-md">
          <Glass theme={themeValue}/>
        </div>
    </div>
  )
}
