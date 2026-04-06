'use client'

export default function Project() {
    const summary = [
        { id: 1, name: "Featured Projects", num: "3+" },
        { id: 2, name: "Technologies Used", num: "10+" },
        { id: 3, name: "Open Source", num: "100%" }
    ];

    return (
        <section className="dark-bg">
            <div className="mt-20">
                <div className="*:text-center! border-b border-b-white/15 relative pt-20 pb-8">
                    <div className="hero-bg absolute inset-0 opacity-[0.05] h-full"></div>
                    <p className="text-blue-600! text-xs! font-bold mb-1">ABOUT ME</p>

                    <h1>My Projects</h1>

                    <p className="mb-4">
                        A curated collection of my recent work.
                    </p>
                </div>

                <div className="flex items-center justify-center gap-8 mt-8 mb-8">
                    {
                        summary.map(item => (
                            <div key={item.id} className="*:text-center!">
                                <h3 className="font-thin!">{item.num}</h3>
                                <p className="-mt-4 text-sm!">{item.name}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}