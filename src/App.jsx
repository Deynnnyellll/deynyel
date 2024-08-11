import { Navbar } from "./components/navbar"
import { Landing } from "./components/landing"
import { About } from "./components/about"
import { Projects } from "./components/projects"
import { Contact } from "./components/contact"

function App() {
  return (
    <div className="text-white w-full">
      <Navbar />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  ) 
}

export default App
