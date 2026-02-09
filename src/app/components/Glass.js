"use client"

export default function Glass( { theme } ) {
  return (
    <div className="w-full h-full relative z-100">
        <div className={`w-full h-full mx-auto bg-${theme === false  ? "white" : "black"}/15 backdrop-blur-3xl px-24 flex items-center justify-center`}>
            <div className="text-center">
                <p className="text-2xl font-medium uppercase">Hi, my name is</p>
                <h1 className="text-8xl uppercase font-bold">Danniel</h1>
                <h3 className={`text-4xl font-bold uppercase ${theme === false ? "text-gray-600" : "text-gray-400"} blur-transition`}>Web Developer</h3>

                <div className="flex items-center justify-center gap-8 mt-4">
                    <button className="bg-zinc-100 font-medium px-4 py-2 rounded-md">Explore more</button>
                    <button className="bg-gray-800 text-white px-6 py-2 rounded-md">Resume</button>
                </div>
            </div>
        </div>

        <div className="fromleftdiag top-0 z-[-1] absolute bg-orange-600 h-[200px] w-[200px] rounded-full"></div>
        <div className="fromtop top-[10%] z-[-1] absolute bg-blue-600 h-[200px] w-[200px] rounded-full"></div>
        <div className="fromtop left-[50%] top-[50%] z-[-1] absolute bg-violet-700 h-[200px] w-[200px] rounded-full"></div>
        <div className="fromrightdiag top-[90%] z-[-1] absolute bg-green-700 h-[200px] w-[200px] rounded-full"></div>
        <div className="fromleftdiag top-[20%] z-[-1] absolute bg-red-800 h-[200px] w-[200px] rounded-full"></div>
        
        <div className="fromleftdiag top-0 z-[-1] absolute bg-red-600 h-[200px] w-[200px] rounded-full"></div>
        <div className="fromrightdiag top-[10%] z-[-1] absolute bg-yellow-600 h-[200px] w-[200px] rounded-full"></div>
        <div className="fromright top-[50%] z-[-1] absolute bg-orange-700 h-[200px] w-[200px] rounded-full"></div>
        <div className="fromrightdiag top-[90%] z-[-1] absolute bg-green-700 h-[200px] w-[200px] rounded-full"></div>
        <div className="fromleft top-[20%] z-[-1] absolute bg-blue-800 h-[200px] w-[200px] rounded-full"></div>

        <div className="fromleftdiag top-0 z-[-1] absolute bg-red-600 h-[200px] w-[200px] rounded-full"></div>
        <div className="fromtop left-[20%] top-[30%] z-[-1] absolute bg-yellow-600 h-[200px] w-[200px] rounded-full"></div>
        <div className="fromrightdiag top-[70%] z-[-1] absolute bg-green-500 h-[200px] w-[200px] rounded-full"></div>
        <div className="fromleftdiag top-[50%] z-[-1] absolute bg-orange-700 h-[200px] w-[200px] rounded-full"></div>
        <div className="fromrightdiag top-[90%] z-[-1] absolute bg-green-700 h-[200px] w-[200px] rounded-full"></div>
        <div className="fromleftdiag top-[20%] z-[-1] absolute bg-blue-800 h-[200px] w-[200px] rounded-full"></div>

        <div className="fromtop left-[77%] top-0 z-[-1] absolute bg-orange-600 h-[200px] w-[200px] rounded-full"></div>
        <div className="fromleftdiag top-[10%] z-[-1] absolute bg-blue-600 h-[200px] w-[200px] rounded-full"></div>
        <div className="fromrightdiag top-[40%] z-[-1] absolute bg-yellow-500 h-[200px] w-[200px] rounded-full"></div>
        <div className="fromtop top-[35%] left-[70%] z-[-1] absolute bg-violet-700 h-[200px] w-[200px] rounded-full"></div>
        <div className="fromrightdiag top-[30%] z-[-1] absolute bg-green-700 h-[200px] w-[200px] rounded-full"></div>
    </div>
  )
}
