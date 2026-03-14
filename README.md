# 🚀 Code-ingify

**Code-ingify** is a professional-grade, responsive web-based code editor and compiler. It allows users to write, debug, and execute code in various programming languages directly from their browser, with a mobile-first approach that ensures a smooth coding experience on any device.

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Styling:** Tailwind CSS (Dark Theme)
* **State Management:** Redux Toolkit
* **Code Editor:** `@monaco-editor/react` (VS Code Engine)
* **Code Execution:** Judge0 API (Public Demo Instance)
* **Data Handling:** Base64 Encoding for secure transmission

---

## ✨ Key Features

* **📱 Mobile Optimized:** * No horizontal scrollbars in the editor.
    * Responsive grid layout (stacks on mobile, side-by-side on desktop).
    * Automatic Word Wrap enabled for small screens.
* **⚡ Real-Time Execution:** * Asynchronous token-based polling logic.
    * Instant feedback with a terminal-styled output console.
* **🎨 Professional UI:** * Modern dark-mode aesthetic.
    * Syntax highlighting for multiple languages.
    * Animated loading states and error highlighting.
* **🔒 Secure:** * All code is Base64 encoded before being sent to the server to handle special characters safely.

---

## 🏗️ Project Architecture

```text
src/
 ┣ components/
 ┃ ┣ Backyard.js       # Main Layout (Responsive Grid)
 ┃ ┣ EditorBox.js      # Monaco Editor with Mobile Optimizations
 ┃ ┣ LanguageButton.js # Environment & Language Selector
 ┃ ┣ RunButton.js      # Judge0 API Token & Polling Logic
 ┃ ┗ ResultBox.js      # Terminal Output & Error Handling
 ┣ createConext/       # Redux Slices (ApiData, LanguageData)
 ┗ Constants/          # Language IDs and Default Boilerplate Code

```
---

## 🔄 How It Works (The Execution Loop)
Code-ingify uses a Submit-Poll-Retrieve pattern to ensure stability:

Submit: The code is converted to a Base64 string and POSTed to Judge0.

Token: The API returns a unique execution token.

Poll: The app checks the status of that token every 1 second (Status 1: Queue, Status 2: Processing).

Result: Once finished (Status 3+), the app retrieves the stdout or stderr, decodes it, and updates the UI.
 
 ---
 
## 🚀 Getting Started
1. Installation
Bash
npm install
2. Run the App
Bash
npm start
3. API Configuration
By default, this project uses the public instance at https://ce.judge0.com.

Note: If you switch to the RapidAPI version, update the headers in RunButton.js with your x-rapidapi-key.

---

## 📝 Mobile-Specific Editor Settings
The editor is pre-configured with the following for the best mobile experience:

wordWrap: "on"

lineNumbersMinChars: 3

minimap: { enabled: false }

automaticLayout: true

🤝 Contributing
Feel free to fork this project, add new languages to the Constants.js, or improve the terminal UI!
