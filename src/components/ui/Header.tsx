import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/ui/Button";
// import { BookMarkIcon } from "../../icons/BookMarkIcon";
import { BrainIcon } from "../../icons/BrainIcon";
// import ExtensionPromo from "./Extention";

export function Header() {
    const navigate = useNavigate();
    return (
        <div className="p-4 fixed w-full z-50">
            <div className="flex justify-between items-center p-4 shadow-md z-50 backdrop-blur-xs rounded-lg ">
                <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-200" onClick={() => navigate('/')}>
                    <BrainIcon className="w-10" />
                    <h1 className="text-xl font-bold">Mindly</h1>
                </div>
                <div className="flex space-x-4">
                    <button className="cursor-pointer text-gray-700 border-gray-100 rounded-md backdrop-blur-xs transition-transform duration-300 hover:text-shadow-sm hover:text-shadow-indigo-400/40" onClick={() => navigate('/')} >Install Extention</button>
                    <Button text="Sign in" variant="primary" type="button" size="md" onClick={() => navigate('/signin')} />
                    <Button text="Get Started" variant="secondary" type="button" size="md" onClick={() => navigate('/signup')} />
                </div>
            </div>
        </div>
    )
}