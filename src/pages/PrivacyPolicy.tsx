import { Footer } from "../components/ui/Footer";
import { Header } from "../components/ui/Header";
export function PrivacyPolicy() {
    return (
        <div>
            <Header />
            <div className="flex flex-col gap-8 text-lg font-normal text-gray-800 pt-30 p-20 md:p-40 text-center">
            <div className="flex flex-col gap-4 ">
                <h1 className="text-3xl sm:text-5xl font-medium">Mindly Extension Privacy Policy</h1>
                <p className="text-sm text-gray-500">Last Updated: July, 2025</p>
                <p>At Mindly, we value your privacy. This policy explains how the Mindly Chrome Extension handles your data.</p>
            </div>
            <div className="flex flex-col gap-4 ">
                <h2 className="text-xl font-medium bg-indigo-50">What Data We Collect</h2>
                <p><span className="font-medium">Saved Content Data: </span>The extension captures the URLs, titles, and tags of the content you choose to save.</p>
                <p><span className="font-medium">Authentication Token:</span>We store your authentication token locally on your device to keep you signed in. This token is never shared or transmitted elsewhere.</p>
            </div>
            <div className="flex flex-col gap-4 ">
                <h2 className="text-xl font-medium bg-indigo-50">What We Don’t Collect</h2>
                <ul>
                    <li>We do not collect your browsing history.</li>
                    <li>We do not track your activity on other websites.</li>
                    <li>
                        We do not access or store any personal data beyond what is necessary for the extension’s core functionality.</li>
                </ul>
            </div>
            <div className="flex flex-col gap-4 ">
                <h2 className="text-xl font-medium bg-indigo-50">How We Use the Data</h2>
                <ul>
                    <li>To allow you to save content directly to your Mindly Dashboard.
                    </li>
                    <li>
                        To authenticate your session securely.
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-4 ">
                <h2 className="text-xl font-medium bg-indigo-50">Data Sharing</h2>
                <p>We do not sell, share, or trade your data with third parties.</p>
            </div>
            <div className="flex flex-col gap-4 ">
                <h2 className="text-xl font-medium bg-indigo-50">Security</h2>
                <p>We use industry-standard security practices to protect your data. However, please note that no method of electronic storage is 100% secure.</p>
            </div>
            <div className="flex flex-col gap-4 ">
                <h2 className="text-xl font-medium bg-indigo-50">Contact Us</h2>
                <p>If you have questions about this policy, please contact us at <a className="text-blue-600 underline underline-offset-2" href="mailto:dipanwita.bala.02@gmail.com" target="blank">dipanwita.bala.02@gmail.com</a></p>
            </div>
            </div>
            <Footer/>
        </div>
    )
}