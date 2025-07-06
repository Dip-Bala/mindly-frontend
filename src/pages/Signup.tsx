import { type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import { AuthForm } from "../components/ui/AuthForm";
import { useAuthFormRefs } from "../hooks/useAuthFormRefs";
import { useSignupMutation } from "../hooks/useAuthMutation";

export function SignUp() {
    const navigate = useNavigate();
    const { usernameRef, passwordRef } = useAuthFormRefs();
    const signupMutation = useSignupMutation(
        (data) => {
            const message = data?.data;
            toast.success(message)
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

            // alert(message);
        }
    );

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        signupMutation.mutate({
            username: username ?? "",
            password: password ?? "",
        });
    }

    return (
        <AuthForm
            btnText="Sign Up"
            handleSubmit={handleSubmit}
            usernameRef={usernameRef}
            passwordRef={passwordRef}
        />
    );
}
