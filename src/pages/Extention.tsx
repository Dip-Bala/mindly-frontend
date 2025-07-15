// components/ExtensionPromo.tsx
// import { DownloadIcon, ChromeIcon, ExtensionIcon } from './YourIcons'; // use your custom or lucide-react icons
// import mindlyExtensionGif from '../assets/mindly-extension-demo.gif'; // optional gif or screenshot demo

import { ExtensionIcon } from "../icons/ExtensionIcon";

export default function ExtensionPromo() {
  return (
    <section className="py-16 px-6 md:px-10 text-gray-800 backdrop-blur-md">
      <div className="max-w-5xl mx-auto text-center backdrop-blur-xs px-10 py-20 rounded-lg border border-gray-300 bg-white/80">
        <div className="flex gap-2">
        <ExtensionIcon />
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
           Supercharge Mindly with Our Chrome Extension
        </h2>

        </div>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Save tweets, YouTube videos, and links to your Mindly dashboard instantly — without opening the app.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img src={"/assets/extention.png"} alt="Mindly Extension Demo" className="w-full max-w-md rounded-xl shadow" />

          <div className="text-left max-w-md">
            <h3 className="text-xl font-semibold mb-4">✨ How to Use It:</h3>
            <ol className="list-decimal pl-5 text-gray-700 space-y-2">
              <li>Install the Mindly Chrome Extension from the Web Store.</li>
              <li>Login using your Mindly account credentials.</li>
              <li>While browsing, click the extension to save content instantly.</li>
              <li>Go to your Mindly Dashboard to see all saved content.</li>
            </ol>

            <a
              href="https://chrome.google.com/webstore/detail/mindly-extension-id" // replace with actual link
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
            >
              {/* <ChromeIcon className="w-5 h-5" /> */}
              Install Extension
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
