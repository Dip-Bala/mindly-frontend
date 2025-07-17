# 🧠 Mindly — Your Second Brain for the Web

**Mindly** is a productivity web app built with **React, TypeScript, TailwindCSS**, allowing users to capture, organize, and revisit their favorite web content.

This repository contains only the **Frontend Client** of Mindly — featuring a responsive dashboard, smart content organization, and seamless integration with the Chrome Extension.

---

## ✨ Features

* 🔗 Save videos, tweets, links, articles, documents
* 🏷️ Add tags, titles & organize content smartly
* 🔐 Secure user authentication flow (JWT)
* 🧩 Chrome Extension support for one-click saves
* 🖥️ Clean, responsive UI built with TailwindCSS
* 📖 Typed API calls & state management with custom hooks

---

## 🛠️ Tech Stack

* **React.js** with **TypeScript**
* **TailwindCSS** for UI
* **Axios** for API Calls
* **React Query** for server side state management
* **Vite** as build tool
* **Hero Icons** for icons

---

## 📁 Project Directory

```
.
├── public
│   └── assets                # Static images & favicons
└── src
    ├── assets                # Component-level assets
    ├── authentication        # Auth pages & logic (login/signup)
    ├── components
    │   └── ui                # Reusable UI Components
    │       ├── createContent # Create content modals/forms
    │       └── linkUrls      # UI for linked content blocks
    ├── hooks                 # Custom React Hooks
    ├── icons                 # Icon Components (Lucide/Custom)
    ├── interfaces            # TypeScript Interfaces/Types
    ├── pages                 # Main page components (Dashboard, Home, etc.)
    └── types                 # Shared Type Definitions
```

---

## 🧩 Chrome Extension

Save content directly while browsing using the **Mindly Chrome Extension**

🛒 **[Available on Chrome Web Store](https://chromewebstore.google.com/detail/mindly-extension/mkklknokfhkehkdfgcifjihcblknnokb)**

> Integrates seamlessly with your saved content on the Mindly Dashboard.

---

## 📄 API Reference

The frontend interacts with the **Mindly Backend API** for authentication and content management.
Full API Documentation available here:

📖 **[Mindly API Docs](https://github.com/Dip-Bala/mindly-second-brain)**

---

## 📝 Environment Variables

Copy `.env.example` as `.env` in the root directory and use it in the `config.ts` file:

```env
VITE_API_BASE_URL=http://localhost:5000
```

---

## 🚀 Deployment

* **Frontend Live:** [https://www.appmindly.live/](https://www.appmindly.live/)
* **Backend & API:** [Mindly API Repository](https://github.com/Dip-Bala/mindly-second-brain)
* **Chrome Extension:** [Web Store Listing](https://chromewebstore.google.com/detail/mindly-extension/mkklknokfhkehkdfgcifjihcblknnokb)

---

## 🤝 Contributing

We welcome feature requests, bug reports, and contributions.
Feel free to fork the repo and submit a PR.

---

## 📜 License

[MIT License](LICENSE)
