export default function Banner({ bannerBgColor, customStyle, children }) {
    return (
        <section className={bannerBgColor}>
            <div className={`mt-8 w-screen px-20 py-16 ${customStyle}`}>
                {children}
            </div>
        </section>
    )
}