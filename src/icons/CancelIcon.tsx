import { type IconProps, IconSizeVariants } from './index'

export const CancelIcon = ({ size }: IconProps) => {
    return (
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth="1.5" 
        stroke="currentColor"             
        className={`${IconSizeVariants[size]}`}>
        <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        d="M6 18 18 6M6 6l12 12" />
      </svg>
      
    )
}



