import { type FormEvent} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { AuthForm } from "../components/ui/AuthForm";
import { useAuthFormRefs } from "../hooks/useAuthFormRefs";
import { useSigninMutation } from "../hooks/useAuthMutation";
import { BrainIcon } from "../icons/BrainIcon";
import { useLoading } from "../hooks/useLoadingProvider";

export function SignIn() {
    const navigate = useNavigate();
    const { usernameRef, passwordRef } = useAuthFormRefs();
    const {show, hide} = useLoading();
    
    const signinMutation = useSigninMutation(
        (data) => {
            const jwt_token = data.data.jwt;
            hide();
            localStorage.setItem("authorization", jwt_token);
            toast.success('You are Signin in to your second brain')
            navigate("/dashboard", {replace : true});
        },
        (err) => {
            hide();
            const message = err.response?.data;
            toast.error(message, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 1,
                theme: "colored"
            })

        }
    );

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        show();
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        signinMutation.mutate({
            username: username ?? "",
            password: password ?? "",
        });
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center gap-6 bg-linear-to-b to-white from-indigo-100/100 bg-radial">
            <div className="flex gap-4 text-3xl font-bold items-center text-slate-700 font-stretch-90%">
                <BrainIcon className="w-15" />
                <h1>Mindly</h1>
            </div>
            <AuthForm
                btnText="Sign In"
                handleSubmit={handleSubmit}
                usernameRef={usernameRef}
                passwordRef={passwordRef}
            />
        </div>
    );
}


