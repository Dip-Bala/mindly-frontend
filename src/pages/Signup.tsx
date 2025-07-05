import type { FormEvent } from 'react';
import {AuthForm} from '../components/ui/AuthForm'
import {useAuthFormRefs} from '../hooks/useAuthFormRefs'

export function SignUp(){
    const {usernameRef, passwordRef} = useAuthFormRefs();
    
    function handleSubmit(e: FormEvent<HTMLFormElement>){
        e.preventDefault();
        const username = usernameRef.current?.value;
        const password = usernameRef.current?.value;
        console.log(username)
    }
    return(
        <AuthForm btnText={"Sign Up"} handleSubmit={handleSubmit}/>
    )
}

// onClick set loading true --------------------**************