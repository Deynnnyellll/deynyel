export default function Button({ bgColor, textColor, customStyle, border, type, children, action }) {
    return (
        <button 
            onClick={action}
            className={`px-4 py-2.5 rounded-xl font-medium ${type === "primary" ? "bg-blue-700 text-white" : type === "ghost" ? "bg-transparent border border-gray-400" : `bg-${bgColor}`} ${textColor ? `text-${textColor}` : "text-gray-800"} ${border} ${customStyle}`}
        >
            {children}
        </button>
    )
}