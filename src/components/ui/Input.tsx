interface InputProps{
    placeholder: string,
    value: "string" | "number"
}
export function Input({placeholder, value}: InputProps){
    return(
        <input placeholder={placeholder} value={value}/>
    )
}
