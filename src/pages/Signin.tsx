import type { FormEvent } from 'react';
import {AuthForm} from '../components/ui/AuthForm'

export function SignIn(){
        function handleSubmit(e: FormEvent<HTMLFormElement>){
            e.preventDefault();
        }
        return(
            <AuthForm btnText={"Sign In"} handleSubmit={handleSubmit}/>
        )
}
