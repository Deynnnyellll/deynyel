import { Typer } from "./typer";
import CV from '/src/assets/docs/CV.pdf'

export const Landing = () => {


  return (
    <div id="home" className="h-[100vh] md:h-[115vh] bg-image flex items-center flex-col md:flex-row md:justify-end">
        <div className="h-[85%] md:h-auto flex items-center flex-col justify-end">
            <Typer />
            <button className="text-black rounded-3xl bg-white px-8 py-2 text-sm md:text-lg font-semibold mt-4 md:mt-8 shadow-md shadow-black hover:bg-slate-100 hover:bg-opacity-50 ease-in-out duration-200">
              <a href={CV} target="_blank" rel="noopener noreferrer"> Curriculum Vitae </a> 
            </button>
        </div>
    </div>
  )
}
