import { Navbar } from "./components/navbar"
import { Landing } from "./components/landing"
import { About } from "./components/about"
import { Projects } from "./components/projects"
import { Contact } from "./components/contact"
import  LoadingScreen  from "./components/loadingScreen"
import { useEffect, useState } from "react"

function App() {
  const [showLoading, setShowLoading] = useState(true);
  const [count, setCount] = useState(0)


  useEffect(() => {
    if(count < 100) {
      const timer = setTimeout(() => 
      {
        setCount(count + 1)
      }, 30);

      console.log(count)

      return () => clearTimeout(timer);
    }
    else {
      setShowLoading(false)
    }
  },[count])


  return (
    <div className="text-white w-full font-roboto">
      <LoadingScreen count={count} isLoading={showLoading}/>
      <div className={showLoading ? "hidden" : "block"}>
        <Navbar />
        <Landing />
        <About />
        <Projects />
        <Contact />
      </div>
  </div>
  ) 
}

export default App
