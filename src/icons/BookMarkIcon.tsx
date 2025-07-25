import { type IconProps, IconSizeVariants } from './index'

export const BookMarkIcon = ({ size }: IconProps) => {
    return (

        <svg xmlns="http://www.w3.org/2000/svg" 
        fill="#5046e4" 
        viewBox="0 0 24 24"
        stroke-width="1.5" 
        stroke="currentColor" 
        className={`${IconSizeVariants[size]} cursor-pointer hover:text-purple-600 text-purple-600`}>

            <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
        </svg>

    )
}






