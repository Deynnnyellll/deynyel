export default function Banner({ customStyle, children }) {
    return (
        <div className={`mt-8 w-screen max-w-360 px-20 py-16 text-center ${customStyle}`}>
            {children}
        </div>
    )
}