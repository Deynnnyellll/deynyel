import { GiHamburgerMenu } from "react-icons/gi";
import { GiSkills } from "react-icons/gi";
import { skills } from "../assets/constants/constant";
import { useState } from "react";

function Mobile() {
    const [content, setContent] = useState(null);

    function handleContent() {
        if(content === null) {
            setContent(0);
        }
        else {
            if(content !== (skills.length-1)) {
                setContent(prevState => prevState + 1);
            }
        }
    }

    function handleContentDecrement() {
        if(content > 0) {
            setContent(prevState => prevState - 1);
        }
        else if(content === 0) {
            setContent(null);
        }
    }

  return (
    <div className='md:hidden w-full flex justify-center items-center'>
        <div className='bg-slate-900 w-[4px] h-[120px] rounded-l-lg mt-[-35%] shadow-slate-800 shadow-inner'>

        </div>

        <div className='w-[65%] h-[570px] bg-slate-900 mt-20 rounded-2xl z-10 p-3 shadow-slate-700 shadow-inner'>
            <div className='bg-slate-800 w-full h-full rounded-2xl flex flex-col items-center'>
                <div className='bg-slate-900 h-[1%] w-[50%] rounded-b-md z-10'></div>
                <div className='h-full w-full mt-[-2%] z-1 p-4 flex flex-col justify-between'>
                    <GiHamburgerMenu className="text-3xl text-blue-400"/>
                    {
                        content === null ?
                        <div className="w-full text-center mt-24">
                            <GiSkills  className="text-[9em] mx-auto"/>
                            <h1 className="text-blue-400 text-[2.5em] font-semibold">Expertise</h1>
                        </div> :
                        
                        <SkillContent index={content}/>
                    }

                    <div className="flex flex-row-reverse justify-center items-center gap-4">
                        {
                            content !== (skills.length-1) &&
                            <button 
                            className={`${content === null ? 'w-full' : 'w-[45%]'} bg-blue-600 p-2 rounded-md mt-10 mb-10`}
                            onClick={handleContent}
                            // disabled={content === (parseInt(skills.length) - 1) ? true : false}
                            > {content === null ? "Get Started" : "Next"} </button>
                        }
                        
                        {
                            content !== null &&
                            <button 
                            className={`${content !== (parseInt(skills.length)-1) ? 'w-[45%]' : 'w-full'} bg-blue-600 p-2 rounded-md mt-10 mb-10`}
                            onClick={handleContentDecrement}
                            // disabled={content === (parseInt(skills.length) - 1) ? true : false}
                            > Back </button>
                        }
                    </div>
                </div>
            </div>
        </div>

        <div className='bg-slate-900 w-[4px] h-[90px] rounded-r-lg mb-[-90px] shadow-slate-800 shadow-inner'>

        </div>

    </div>
  )
}

function SkillContent({index}) {
    return (
        <div className="mt-10 flex flex-col items-center justify-center gap-2 p-2">
            <h1 className="text-[1.8em] font-bold text-center"> {skills[index].name} </h1>
            <h2 className="text-[5em]"> {skills[index].icon} </h2>
            <p className="text-justify p-2"> {skills[index].description} </p>
        </div>
    )
}

export default Mobile