# 🎬 NetflixGPT – AI Movie Recommendation Web App

NetflixGPT is a Netflix-inspired AI-powered movie discovery web application built with React, Redux Toolkit, and Tailwind CSS.
The app allows users to authenticate, browse movies across categories, watch trailers, and get GPT-powered personalized movie recommendations.
Authentication is handled using Firebase, movie data is fetched from TMDB, and AI recommendations are powered by the OpenAI GPT API.

---

## 🚀 Live Demo

Note: This project is built for learning and portfolio purposes. It is a Netflix-inspired clone and not an official Netflix product.
🔗 https://netflixgpt-ec6a1.web.app/

---

## ✨ Features

- 🎥 Browse movies using TMDB data (Now Playing, Popular, Top Rated, Upcoming)
- ▶️ Watch trailers with immersive background playback
- 🤖 GPT-powered movie recommendations based on user prompts
- 🌍 Multi-language support for GPT search
- 🔍 AI-driven movie search experience
- 🔐 User authentication (Sign up / Sign in / Sign out) using Firebase
- 🧑 Profile management (display name & avatar)
- 🔁 Reusable movie lists and cards
- ⚡ Fast and optimized UI
- 📱 Fully responsive design
- 🧠 Centralized state management using Redux Toolkit
  
---

## 🛠️ Tech Stack

- **Frontend**: React + Vite
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Authentication**: Firebase Authentication
- **AI**: OpenAI GPT API
- **Movies API**: TMDB API
- **Build Tool**: Vite
- **Package Manager**: npm / yarn
- **Version Control**: Git & GitHub
- **Hosting**: Firebase Hosting

---

## 📂 Project Structure
```
.
├── public/
├── src/
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
├── tailwind.config.js
├── firebase.json
├── .env.example
└── README.md
```
---

## 🔧 Installation & Setup

### Pre-requisites:

- Node.js (v16 or higher)
- npm or Yarn
- Firebase account
- OpenAI API key
- TMDB API access token

### Clone the Repository

```bash
git clone https://github.com/venkateshmadupuru/netflix-gpt-app.git
cd netflix-gpt-app
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Environment Variables

Create a .env file in the project root:
```env
VITE_FIREBASE_API_KEY=your_key
VITE_OPENAI_API_KEY=your_key
VITE_TMDB_API_KEY=your_key
```

### Run the Application

```bash
npm run dev
```

### Open in Browser
Navigate to http://localhost:5173

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.


## 📄 License

This project is licensed under the MIT License.

- This project is created for learning and portfolio purposes only.
- Netflix is a registered trademark of Netflix, Inc.
- This project is not affiliated with or endorsed by Netflix.

---