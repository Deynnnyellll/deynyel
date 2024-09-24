import { Navbar } from "./components/navbar"
import { Landing } from "./components/landing"
import { About } from "./components/about"
import { Projects } from "./components/projects"
import { Contact } from "./components/contact"
import  LoadingScreen  from "./components/loadingScreen"
import SeparateNav from "./components/SeparateNav"
import { useEffect, useState } from "react"

import { Hero } from "./context/context"

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [count, setCount] = useState(0);
  const [isView, setIsView] = useState(true);


  useEffect(() => {
    if(count < 5) {
      const timer = setTimeout(() => 
      {
        setCount(count + 1);
      }, 300);
      return () => clearTimeout(timer);
    }
    else if(count > 4 && count < 50) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 50)
      return () => clearTimeout(timer);
    }
    else if(count > 49 && count < 100) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 20)
      return () => clearTimeout(timer);
    }
    else {
      setShowLoading(false)
    }
  },[count])


  return (
    <Hero.Provider value={{isView, setIsView}}>
      <div className="text-white w-full font-roboto overflow-x-hidden">
            <LoadingScreen count={count} isLoading={showLoading}/>
            <div className={showLoading ? "hidden" : "block"}>
              <Navbar />
              <Landing />
              <SeparateNav />
              <About />
              <Projects />
              <Contact />
            </div>
      </div>
    </Hero.Provider>
  ) 
}

export default App
