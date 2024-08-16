import { useEffect, useState } from "react";
import hourglass from '/src/assets/images/hourglass.png';


export const LoadingScreen = ({count, isLoading}) => {
    const [progressWidth, setProgressWidth] = useState(count);

    useEffect(() => {
        setProgressWidth(count);
    }, [count])

  return (
    <div className={isLoading ? "bg-black absolute left-0 w-full h-[100vh] flex flex-col items-center justify-center gap-8" : "bg-black absolute left-[-100%] w-full h-[100vh] flex flex-col items-center justify-center gap-4 duration-700 ease-out"}>
        <img src={hourglass} alt="programmer" className="w-[55%] md:w-[20%] lg:w-[15%] invert animate-spin mb-4" />
        <div className="w-[70%] md:w-[25%] h-[5%] outline outline-4 rounded-sm flex items-center">
            <div className="h-[99%] bg-slate-300 rounded-sm" style={{width: `${progressWidth}%`}}>
            </div>
        </div>
        <p className="text-white text-3xl md:text-5xl font-semibold"> {count}% </p>
    </div>
  )
}

export default LoadingScreen