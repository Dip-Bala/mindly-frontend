import {type ReactElement} from 'react'
type sizeType = "sm" | "md" | "lg";
type screenSizeType = "sm" | "md" | "lg";
interface SidebarItemProps{
    text?: string,
    icon: ReactElement,
    size?: sizeType,
    onClick?: () => void,
    active?: Boolean,
    screenSize?: screenSizeType;
    onmouseover? : () => void;
    onmouseleave?: () => void;
}
const defaultStyle = "text-gray-700 flex items-center justify-start gap-4 py-2 px-4 cursor-pointer"
const sizeStyle: Record<sizeType, string> = {
    "sm" : "text-md font-normal",
    "md" : "text-md font-normal",
    "lg" : "text-xl font-semibold "
}
const hoverStyles="outline-gray-600 hover:rounded-md hover:bg-gray-100 focus:bg-gray-200"
const activeStyle = "bg-purple-300 rounded-md";

// const screenSizeStyle = ""
export default function SidebarItem({text, icon, size, onClick, active=false, screenSize, onmouseover, onmouseleave}: SidebarItemProps){
    return(
        <div 
        onClick={onClick}
        onMouseOver={onmouseover}
        onMouseLeave={onmouseleave}
        className={`${defaultStyle} ${sizeStyle[size || "md"]} ${hoverStyles} ${active && activeStyle}`}
        >
            {icon}{screenSize !== "sm" && text}
        </div>
    )
}