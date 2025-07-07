import {useState, type FormEvent, type RefObject} from 'react'
import { Button } from '../../components/ui/Button'
import {Input} from '../../components/ui/Input'

interface AuthFormProps{
    btnText: string,
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    usernameRef: RefObject<HTMLInputElement | null>;
    passwordRef: RefObject<HTMLInputElement | null>;
}

export function AuthForm({btnText, handleSubmit, usernameRef, passwordRef}: AuthFormProps){
        const [isLoading, setIsLoading] = useState(false);

        return(
            <div className="w-screen h-screen flex justify-center items-center bg-gray-50">
                <form onSubmit={(e) => {
                    setIsLoading(true);
                    handleSubmit(e);
                }
                    } className="flex flex-col gap-4 border bg-white border-gray-300 shadow-md shadow-gray-100 rounded-lg p-6 w-80 ">
                    <Input placeholder={"Username"} reference={usernameRef}/>
                    <Input placeholder={"Password"} reference={passwordRef}/>
                    <Button variant={"primary"} size={"md"} text={btnText} fullWidth={true} loading={isLoading} type={"submit"}/>
                </form>
            </div>
        )
}