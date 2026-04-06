export default function Footer() {
    const links = [
        { id: 1, platform: "GitHub", link: "#"},
        {id: 2, platform: "LinkedIn", link: "#"},
        {id: 3, platform: "Instagram", link: "#"}
    ]

    return (
        <section className="w-screen bg-gray-950 py-14 *:text-white! [&_p]:text-white! border-t border-t-white/50">
            <div>
                <div className="flex flex-col lg:flex-row items-start justify-start gap-14">
                    <div className="basis-1/3 [&_p]:w-[90%] [&_p]:text-left!">
                        <h3>About</h3>

                        <p>
                            I craft beautiful, responsive, and user-friendly web experiences using modern technologies. 
                            Passionate about clean code and innovative design.
                        </p>
                    </div>


                    <div>
                        <h3 className="mb-3">Connect</h3>

                        <div className="flex flex-col *:cursor-pointer *:hover:text-gray-300 *:duration-300 *:ease-in-out">
                            {
                                links.map(item => (
                                        <a className="hover:text-blue-600! duration-300 ease-in-out" key={item.id} href={item.link}>{item.platform}</a>
                                    )
                                )
                            }
                        </div>
                        
                    </div>
                </div>

                <div className="bg-white/50 w-full h-[0.2px] mt-8 mb-8"></div>

                <p className="text-center! text-gray-400">&copy; {new Date().getFullYear()} Web Dev Portfolio - Danniel</p>
            </div>
        </section>
    )
}