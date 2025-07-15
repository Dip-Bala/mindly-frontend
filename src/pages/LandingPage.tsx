import { useNavigate } from 'react-router-dom';
import { BookMarkIcon } from "../icons/BookMarkIcon";
import ExtensionPromo from "./Extention";
import { Header } from '../components/ui/Header';
import { Footer } from '../components/ui/Footer';
import { Button } from '../components/ui/Button';


export default function LandingPage() {
    return (
        <div className="font-sans text-gray-800 bg-linear-to-r from-indigo-200/80 to-white/100 bg-radial">
            <Header />
            <Hero />
            <DashboardPreview />
            <Features />
            <ExtensionPromo />
            <FinalCall />
            <Footer />
        </div>
    );
}


function Hero() {
    const navigate = useNavigate();
    return (
        <div className="pt-40 pb-8 px-6 md:px-20 flex justify-center ">
            <div  className="flex flex-col gap-6 items-center text-center backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 ">Your Second Brain for the Web</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
                Save videos, tweets, links, articles & documents — all in one beautifully organized space.
            </p>
            <Button text={"Get Started"} type="button" variant="secondary" size="lg" onClick={() => navigate('/signup')} />
            </div>
        </div>
    );
}

function Features() {
    return (
        <div className="flex flex-col justify-center text-center md:px-20 px-6 py-20 backdrop-blur-xs">
            <div className="flex justify-center">
                {/* <BookMarkIcon size="lg" /> */}
            </div>
            <h3 className="text-4xl font-bold mb-4 text-gray-900">Your Mind, Visualized</h3>
            <p className="text-gray-600 max-w-xl mx-auto mb-10">
                A distraction-free dashboard where all your saved content lives. Tag it, search it, revisit it.
            </p>
        <div className="grid md:grid-cols-3 gap-6 text-slate-700 backdrop-blur-xs md:px-20 sm:px-10">
            {[
                {
                    title: "Save Anything",
                    desc: "YouTube videos, tweets, blog posts, or PDFs – just one click and it's in your mind.",
                    bg: "bg-white"
                },
                {
                    title: "Organize Effortlessly",
                    desc: "Add titles, tags, and smart filters so your ideas are always easy to find.",
                    bg: "bg-white"
                },
                {
                    title: "Browser Extension",
                    desc: "Install the Mindly Chrome extension and save directly from the web.",
                    bg: "bg-white"
                }
            ].map((feature, idx) => (
                <div
                    key={idx}
                    className={`flex flex-col items-center p-8 rounded-lg shadow-md gap-4 max-w-80 mx-auto hover:scale-105 hover:shadow-lg transition-transform duration-300 ${feature.bg} `}
                >
                    <BookMarkIcon size="lg" />
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p>{feature.desc}</p>
                </div>
            ))}
        </div>
        </div>
    );
}

function DashboardPreview() {
    return (
        <div className="px-6 md:px-20 text-center">
            {/* <div className="flex justify-center mb-6">
                <BookMarkIcon size="lg" />
            </div>
            <h3 className="text-4xl font-bold mb-4 text-gray-900">Your Mind, Visualized</h3>
            <p className="text-gray-600 max-w-xl mx-auto mb-10">
                A distraction-free dashboard where all your saved content lives. Tag it, search it, revisit it.
            </p> */}
            <img
                src="/assets/dashboard-preview.png"
                alt="Mindly Dashboard Preview"
                className="rounded-lg mx-auto shadow-xl w-full max-w-4xl hover:shadow-2xl transition-shadow duration-300"
            />
        </div>
    )
}

function FinalCall() {
    const navigate = useNavigate();
    return (
        <div className="text-center py-20 px-6 md:px-20">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Start Saving Your Digital Mind Today</h3>
            <p className="text-gray-600 mb-8">Mindly is free to use. No credit card required.</p>
            <button onClick={() => navigate('/signup')} className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition">
                Sign Up Now
            </button>
        </div>
    )
}


