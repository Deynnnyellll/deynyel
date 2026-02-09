"use client"

import Hero from "./components/Hero";
import About from "./components/About";
import { useSelector } from "react-redux";


export default function Home() {
  const themeValue = useSelector((state) => state.theme.value);

  return (
    <div className={`${themeValue === false ? "bg-white text-black" : "bg-black text-white"} p-6`}>
      <Hero />
      <About />
    </div>
  );
}
