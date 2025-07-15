import { useNavigate } from "react-router-dom";
import { LinkedinIcon } from "../../icons/LinkedinIcon";
import { TweetIcon } from "../../icons/TweetIcon";
import { XIcon } from "../../icons/XIcon";
import { GithubIcon } from "../../icons/GithubIcon";
// import { PrivacyPolicy } from "../../pages/PrivacyPolicy";

export function Footer() {
    const navigate = useNavigate();
    return (
        <footer className="flex flex-col border-t border-gray-300 py-10 px-20 text-md text-gray-900 ">    
        <div className="flex justify-between">
            <div className="flex flex-col">
                <p className="cursor-pointer hover:text-indigo-700 hover:font-medium" onClick={() => navigate('/privacy-policy')}>
                    Privacy Policy
                </p>
                <p className="cursor-pointer hover:text-indigo-700 hover:font-medium" onClick={() => navigate('/privacy-policy')}>Install Mindly Extention</p>
            </div>
            <div className="flex flex-col  gap-4">
               <div>Contact developer</div>
               <div className="flex gap-2 items-center justify-center">
                <a href="https://github.com/Dip-Bala" target="blank"><GithubIcon /></a>
                <a href="https://x.com/left_prof1le" target="blank"><XIcon /></a>
                <a href="https://www.linkedin.com/in/dipanwita-bala-21999c/" target="blank"> <LinkedinIcon/></a>
               </div>
            </div>
            </div>
            <p>&copy; 2025 Mindly. All rights reserved.</p>
        </footer>
    )
}