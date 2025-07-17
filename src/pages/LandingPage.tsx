import { useNavigate } from 'react-router-dom';
import ExtensionPromo from "./Extention";
import { Header } from '../components/ui/Header';
import { Footer } from '../components/ui/Footer';
import { Button } from '../components/ui/Button';
import { ClipIcon } from '../icons/ClipIcon';
import { QuickSearchIcon } from '../icons/QuickSearchIcon';
import { ClockIcon } from '../icons/ClockIcon';
import { StackIcon } from '../icons/StackIcon';


export default function LandingPage() {
    return (
        <div className="font-sans text-gray-800 bg-linear-to-r from-indigo-200/80 to-white/100 bg-radial -z-10">
            <div className="w-screen h-screen bg-[url('/assets/bg.png')] bg-no-repeat bg-cover  absolute inset-0 bg-[url('/assets/bg.png')] opacity-60 -z-10"></div>
            <Header />
            <Hero />
            <DashboardPreview />
            <Features />
            <ExtensionPromo />
            <UpcomingAISection />
            <Footer />
        </div>
    );
}


function Hero() {
    const navigate = useNavigate();
    return (
        <div className="pt-50 pb-8 px-6 md:px-20 flex justify-center z-100">
            <div className="flex flex-col gap-8 items-center text-center ">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 ">Your Second Brain for the Web</h2>
                <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
                    Save videos, tweets, links, articles & documents — all in one beautifully organized space.
                </p>
                <div className="flex gap-8 pt-10">
                    <Button text={"Get Started"} type="button" variant="secondary" size="lg" onClick={() => navigate('/signup')} />
                    <a
                        href="https://chromewebstore.google.com/detail/mindly-extension/mkklknokfhkehkdfgcifjihcblknnokb"
                        target="_blank"
                    >
                        <Button text={"Install Extension"} type="button" variant="primary" size="lg" />
                    </a>
                </div>
            </div>
        </div>
    );
}

function Features() {
    const features = [
        {
            title: "Clip Anything, Anytime",
            desc: "Save articles, videos, tweets, or documents directly with a single click using our extension.",
            icon: <ClipIcon size="lg" />
        },
        {
            title: "Smart Collections",
            desc: "Organize your saved content into collections and categories that make sense to you.",
            icon: <StackIcon size="lg" />
        },
        {
            title: "Quick Search & Tags",
            desc: "Find anything instantly with powerful search and custom tags for every saved item.",
            icon: <QuickSearchIcon size="lg" />
        },
        {
            title: "Access Anywhere",
            desc: "Your knowledge base is always available on the web, synced in real-time.",
            icon: <ClockIcon size="lg" />
        },
    ];

    return (
        <div className="flex flex-col justify-center text-center md:px-40 px-8 py-20 relative z-10 bg-white/60">
            <h3 className="text-4xl font-bold mb-4 text-gray-900">Built to Empower Your Workflow</h3>
            <p className="text-gray-600 max-w-xl mx-auto mb-10">
                Simplify how you save, manage, and access your personal web library.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center text-center p-6 rounded-xl shadow hover:shadow-lg transition duration-300 hover:scale-[1.03] bg-white"
                    >
                        <div className="mb-4 text-indigo-500 bg-gray-50 p-4 rounded-lg">{feature.icon}</div>
                        <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                        <p className="text-gray-600">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function DashboardPreview() {
    return (
        <div className="px-6 md:px-20 text-center relative z-10 py-20">
            {/* <h3 className="text-4xl font-bold mb-4 text-gray-900"></h3> */}
            <p className="text-2xl text-gray-600 max-w-xl mx-auto mb-10">
                Visualize everything you save with intuitive filters and a focused dashboard.
            </p>
            <img
                src="/assets/dashboard-preview.png"
                alt="Mindly Dashboard Preview"
                className="rounded-lg mx-auto shadow-xl w-full max-w-4xl hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            />
        </div>
    );
}

function UpcomingAISection() {
    return (
        <div className="text-center py-20 px-6 md:px-20 relative z-10">
            <div className="inline-block p-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-3xl shadow-lg">
                <div className="bg-white rounded-3xl py-12 px-8 md:px-16 backdrop-blur-md shadow-inner">
                    <h3 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text animate-gradient-x">
                        Coming Soon: Mindly AI Assistant
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                        Query AI with context from your saved content — search, summarize, and unlock insights like never before.
                    </p>
                    <span className="inline-block  text-indigo-700 px-4 py-2 rounded-full font-semibold shadow animate-bounce">
                        AI Support Coming Soon
                    </span>
                </div>
            </div>
        </div>
    );
} 