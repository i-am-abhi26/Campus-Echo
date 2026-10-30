# Campus Echo

A student experience sharing platform where college students can share their real college experiences and help others understand what college life is actually like.

## 🌐 About the Project

Campus Echo allows students to:

- Read experiences shared by other students
- Share their own college experiences
- View information such as college, course, year, and student name
- Expand an experience to read the complete story
- Submit experiences through a simple form

The project was built to understand how a frontend communicates with a backend using HTTP requests and APIs, without relying on Express.

## ✨ Features

- 📖 Read student experiences
- ✍️ Share your own experience
- 🔍 Expand cards to read the full story
- 🌐 Custom Node.js HTTP server
- 🔄 REST-style API endpoints
- 💾 Persistent data storage using a JSON file
- 🛡️ Server-side HTML sanitization
- ⚡ Asynchronous request handling
- 📡 Event-driven functionality using Node.js EventEmitter
- 📱 Responsive frontend

## 🛠️ Tech Stack

### Frontend

- HTML
- CSS
- JavaScript

### Backend

- Node.js
- Node.js HTTP module
- Node.js File System API
- Node.js EventEmitter

### Security

- `sanitize-html`

### Storage

- JSON file

## 📁 Project Structure

```text
college-experience-platform/
│
├── frontend/
│   ├── index.html
│   ├── index.js
│   ├── style.css
│   └── 404.html
│
├── handlers/
│   └── routeHandler.js
│
├── utils/
│   ├── addNewExperience.js
│   ├── getContentType.js
│   ├── getData.js
│   ├── sendResponse.js
│   ├── serveStatic.js
│   └── experienceEvent.js
│
├── data/
│   └── data.json
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
