import { type FormEvent, type RefObject } from 'react'
import { Button } from '../../components/ui/Button'
import { Input } from '../../components/ui/Input'
import { useNavigate } from "react-router-dom";

interface AuthFormProps {
    btnText: string,
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    usernameRef: RefObject<HTMLInputElement | null>;
    passwordRef: RefObject<HTMLInputElement | null>;
    isLoading: boolean;
}

export function AuthForm({ btnText, handleSubmit, usernameRef, passwordRef, isLoading }: AuthFormProps) {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col border bg-white border-gray-300 shadow-md shadow-gray-100 rounded-lg p-6 w-80 ">
            <div className="flex justify-center text-md font-medium">
            <p>{btnText}</p>
            </div>
            <form onSubmit={(e) => {
                handleSubmit(e);
            }
            } className="flex flex-col gap-4 ">
                <div className="flex flex-col gap-2">
                    <label className="text-purple-600 font-medium">Username</label>
                    <Input placeholder={"Username"} reference={usernameRef} />
                </div>
                <div className="flex flex-col gap-2 pb-2">
                    <label className="text-purple-600 font-medium">Password</label>
                    <Input placeholder={"Password"} reference={passwordRef} />
                </div>
                <Button variant={"secondary"} size={"md"} text={btnText} fullWidth={true} loading={isLoading} type={"submit"} />
            </form>
            <div className="pt-4 text-center">
                {
                    btnText === "Sign Up" && <p>Already have an account? <span className="text-purple-600 border-b cursor-pointer text-md font-medium" onClick={() => navigate('/signin')}>Sign in</span></p>
                } 
                {
                    btnText === "Sign In" &&  <p>Don't have an account? <span className="text-purple-600 border-b cursor-pointer text-md font-medium" onClick={() => navigate('/signup')}>Sign up</span></p>
                }
            </div>
        </div>
    )
}