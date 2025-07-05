import {useState, type FormEvent, useRef} from 'react'
import { Button } from '../../components/ui/Button'
import {Input} from '../../components/ui/Input'
import { useAuthFormRefs } from '../../hooks/useAuthFormRefs'; 

export function AuthForm({btnText, handleSubmit} : {btnText: string, handleSubmit: (e: FormEvent<HTMLFormElement>) => void}){
        const [isLoading, setIsLoading] = useState(false);
        const { usernameRef, passwordRef } = useAuthFormRefs();

        return(
            <div className="w-screen h-screen flex justify-center items-center bg-gray-50">
                <form onSubmit={(e) => {
                    setIsLoading(true);
                    handleSubmit(e);
                }
                    } className="flex flex-col gap-4 border bg-white border-gray-300 shadow-md shadow-gray-100 rounded-lg p-6 w-80 ">
                    <Input placeholder={"Username"} reference={usernameRef}/>
                    <Input placeholder={"Password"} reference={passwordRef}/>
                    <Button variant={"primary"} size={"md"} text={btnText} fullWidth={true} loading={isLoading}/>
                </form>
            </div>
        )
}