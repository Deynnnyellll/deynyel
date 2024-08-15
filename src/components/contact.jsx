import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi"
import { FaArrowRight, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa"
import { links } from "/src/backup/platforms/platforms.jsx";

export const Contact = () => {
    const arrow = "text-[15px]";
    const platforms = [
        {
            key: 0,
            item: <FaFacebook />,
            link: links[0]
        },
        {
            key: 1,
            item: <FaLinkedin />,
            link: links[1]
        },
        {
            key: 2,
            item: <FaInstagram />,
            link: links[2]
        }
    ]

    return (
        <div id="contact" className="w-full flex flex-col justify-center items-center gap-5">
            <h1 className="text-[50px] md:text-[60px] font-semibold text-center mt-10"> Contact </h1>
            <h4 className="w-[75%] md:w-full text-center mt-[-1.75%] font-thin mb-2"> If you have any inquiry, you can email me through this form</h4>
            <form method='POST' action="https://getform.io/f/1cf65667-2d94-4be1-92f9-e28afb33a240" className='flex flex-col text-center items-center h-[28rem] md:h-[32rem] w-[85%] md:w-[65%] lg:w-[40%] rounded-sm outline outline-2 outline-white text-slate-950 gap-4 p-4'>
                <input type="text" className="h-[10%] w-[100%] p-3" placeholder="Name" name="name" required/>
                <input type="email"  className="h-[10%] w-[100%] p-3" placeholder="Email" name="email" required/>
                <textarea name="message" id="" className="h-[80%] w-[100%] p-3" placeholder="Message" required></textarea>
                <button type="onSubmit" className="text-black rounded-md bg-white px-5 py-3 hover:translate-y-[-0.5px] hover:shadow-white shadow-xs ease-in-out duration-200">
                    <FaArrowRight className="text-[20px] md:text-[30px]"/>
                </button>
            </form>

            <div className="w-[6%] flex items-center justify-between my-8">
                <BiArrowFromLeft className={arrow}/>
                <h2 className="text-[30px] font-semibold"> OR </h2>
                <BiArrowFromRight className={arrow}/>
            </div>

            <div className="flex flex-col items-center gap-3 mb-8">
                <p className="w-[75%] text-center md:w-full font-thin"> You can message me through these platforms. Please feel free to connect with me. </p>
                <div className="flex items-center justify-center text-[30px] gap-4">
                {
                    platforms.map(platform => (
                        <a key={platform.key} href={platform.link} target="_blank">
                            {platform.item}
                        </a>
                    ))
                }
                </div>
            </div>
        </div>
    )
}
