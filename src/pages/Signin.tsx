import { type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { AuthForm } from "../components/ui/AuthForm";
import { useAuthFormRefs } from "../hooks/useAuthFormRefs";
import { useSigninMutation } from "../hooks/useAuthMutation";

export function SignIn() {
    const navigate = useNavigate();
    const { usernameRef, passwordRef } = useAuthFormRefs();
    const signinMutation = useSigninMutation(
        (data) => {
            const jwt_token = data.data.jwt;
            console.log(jwt_token);
            localStorage.setItem("authorization", jwt_token);
            navigate("/dashboard");
        },
        (err) => {
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
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        signinMutation.mutate({
            username: username ?? "",
            password: password ?? "",
        });
    }

    return (
        <AuthForm
            btnText="Sign In"
            handleSubmit={handleSubmit}
            usernameRef={usernameRef}
            passwordRef={passwordRef}
        />
    );
}
