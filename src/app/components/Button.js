export default function Button({ bgColor, textColor, border, type, children }) {
    return (
        <button 
            className={`px-4 py-2.5 rounded-xl font-medium ${type === "primary" ? "bg-blue-700 text-white" : type === "ghost" ? "bg-transparent border border-gray-400" : `bg-${bgColor}`} ${textColor ? `text-${textColor}` : "text-gray-800"} ${border}`}
        >
            {children}
        </button>
    )
}