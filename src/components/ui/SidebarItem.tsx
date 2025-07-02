import {type ReactElement} from 'react'
type sizeType = "sm" | "md" | "lg";

interface SidebarItemProps{
    text: string,
    icon: ReactElement,
    size?: sizeType,
    onClick?: () => void
}
const defaultStyle = "text-gray-700 flex items-center justify-start gap-4 py-2 px-4"
const sizeStyle: Record<sizeType, string> = {
    "sm" : "text-md font-normal",
    "md" : "text-md font-normal",
    "lg" : "text-xl font-semibold "
}
const hoverStyles="outline-gray-600 hover:rounded-md hover:bg-gray-100 focus:bg-gray-200"
export default function SidebarItem({text, icon, size, onClick}: SidebarItemProps){
    return(
        <div 
        onClick={onClick}
        className={`${defaultStyle} ${sizeStyle[size || "md"]} ${hoverStyles}`}
        >
            {icon}{text}
        </div>
    )
}