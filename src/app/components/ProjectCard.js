import Image from "next/image"

export default function ProjectCard({ img, title, caption, stacks }) {
    return (
        <div className="dark-bg border border-gray-700 overflow-hidden rounded-md">
            <div className="bg-placeholder h-60">
            </div>

            <div className="py-8 px-4 min-h-50 bg-gray-900/50">
                <div>
                    <div>
                        <h2>{title}</h2>
                        <p className="-mt-4 mb-4">{caption}</p>

                        <div className="flex items-center flex-wrap gap-2">
                            {
                                stacks.map(item => (
                                    <div className="px-4 py-1 border border-blue-400 text-blue-300 rounded-lg" key={item.id}>{item.name}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}