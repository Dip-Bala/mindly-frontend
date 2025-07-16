import { type RefObject } from "react";
interface InputProps{
    placeholder: string,
    reference?: RefObject<HTMLInputElement | null>;
}
export function Input({placeholder, reference}: InputProps){
    return(
        <input placeholder={placeholder} ref={reference} type="text" className="p-2 border border-gray-300 rounded-md focus:border-0 focus:outline-2 focus:outline-indigo-500 hover:bg-gray-50"/>
    )
}



// The ref prop in React is a special prop that allows you to get a reference to a DOM element or a React component instance directly. It's commonly used when you need to:

// Focus an input programmatically

// Read the value of an input or measure DOM nodes (e.g., width, height)

// Scroll to an element

// Integrate with third-party libraries that require direct DOM access
