export default function Card({ icon, iconColor, heading, paragraph, cardStyle, headingAlignment }) {
    return (
        <div className={`p-4 ${cardStyle} w-full hover:shadow-lg duration-300 ease-in-out`}>
            <div className={headingAlignment}>
                { icon && 
                    <div className={`bg-${iconColor} p-1.5 w-10 mb-8 *:text-white flex items-center justify-center rounded-md`}>
                        {icon}
                    </div>
                }

                <h3 className="w-[90%]">{heading}</h3>
            </div>

            <p className="mb-2 text-sm">{paragraph}</p>
        </div>
    )
}