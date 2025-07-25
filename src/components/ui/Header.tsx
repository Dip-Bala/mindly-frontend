import { useNavigate } from 'react-router-dom';
import { Button } from "../../components/ui/Button";
import { BrainIcon } from "../../icons/BrainIcon";


export function Header() {
    const navigate = useNavigate();
    return (
        <div className="p-4 fixed w-full z-50">
            <div className="flex justify-between items-center p-4 shadow-md z-50 backdrop-blur-xs rounded-lg border-t border-gray-300/20">
                <div className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-200" onClick={() => navigate('/')}>
                    <BrainIcon className="w-10" />
                    <h1 className="text-xl font-bold">Mindly</h1>
                </div>
                <div className="sm:flex space-x-4 hidden">
                    <a href="https://chromewebstore.google.com/detail/mindly-extension/mkklknokfhkehkdfgcifjihcblknnokb"
                        target="_blank">
                    <button className="cursor-pointer text-gray-700 border-gray-100 rounded-md backdrop-blur-xs font-medium hover:outline-2 hover:outline-indigo-600 hover:bg-white p-2 hover:scale-105 ">Install Extention</button>

                    </a>
                    <Button text="Sign in" variant="primary" type="button" size="md" onClick={() => navigate('/signin')} />
                    <Button text="Get Started" variant="secondary" type="button" size="md" onClick={() => navigate('/signup')} />
                </div>
                <div className="flex sm:hidden gap-2">
                    <button className="cursor-pointer text-gray-700 rounded-md backdrop-blur-xs font-medium text-sm hover:outline hover:outline-indigo-600 hover:bg-white" onClick={() => navigate('/')} >Install Extention</button>
                    <Button text="Sign in" variant="primary" type="button" size="sm" onClick={() => navigate('/signin')} />
                    <Button text="Get Started" variant="secondary" type="button" size="sm" onClick={() => navigate('/signup')} />
                </div>
            </div>
        </div>
    )
}