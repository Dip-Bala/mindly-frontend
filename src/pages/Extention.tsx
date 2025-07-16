
export default function ExtensionPromo() {
  return (
    <section className="px-6 md:px-20 py-20 text-gray-800 relative z-10">
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur rounded-3xl shadow-lg px-10 py-16 text-center hover:shadow-2xl transition duration-300">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-20">
          <img
            src={"/assets/extention.png"}
            alt="Mindly Extension Demo"
            className="w-full max-w-sm rounded-xl shadow-md hover:shadow-lg transition duration-300 hover:scale-105"
          />

          <div className="text-left max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Supercharge Mindly with Our Chrome Extension
              </h2>
            </div>

            <p className="text-gray-600 mb-6">
              Save tweets, YouTube videos, articles, or any links straight to your Mindly dashboard — no switching tabs needed.
            </p>

            <h3 className="text-2xl font-semibold mb-3 text-gray-900">How It Works:</h3>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Install the Mindly Chrome Extension from the Web Store.</li>
              <li>Login with your Mindly account.</li>
              <li>Click the extension while browsing to save instantly.</li>
              <li>View everything later in your Mindly Dashboard.</li>
            </ul>

            <a
              href="https://chrome.google.com/webstore/detail/mindly-extension-id"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition hover:scale-105"
            >
              Install Extension
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
