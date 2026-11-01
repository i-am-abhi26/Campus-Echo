# Campus Echo 🎓

<p align="center">
  <strong>A platform where students share real college experiences and help others make informed decisions.</strong>
  <br />
  <br />
  🌐 <a href="https://campus-echo-1.onrender.com">Live Demo — Campus Echo</a>
  &nbsp; | &nbsp;
  💻 <a href="https://github.com/i-am-abhi26/Campus-Echo">GitHub Repository</a>
</p>

---

## 📖 About the Project

Choosing a college is one of the most important decisions in a student's life. However, official college websites and brochures don't always provide an accurate picture of everyday student life.

**Campus Echo** aims to bridge this gap by providing a platform where students can share their genuine college experiences and help prospective students make better-informed decisions.

Students can submit their experiences, explore stories shared by others, and learn about college life through real student perspectives.

🔗 **Explore the platform:** https://campus-echo-1.onrender.com

---

## ✨ Features

- **Share Experiences:** Students can submit their college experiences through an interactive form.
- **Read Experiences:** Browse experiences shared by other students.
- **Experience Details:** View submitted experiences and their complete content.
- **Input Validation:** Backend validation prevents missing and whitespace-only submissions.
- **HTML Sanitization:** User-submitted content is sanitized before being stored.
- **Persistent Storage:** Experiences are stored in MongoDB Atlas and remain available after refreshing the website.
- **Responsive Interface:** A clean interface designed for easy interaction.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | HTML5, CSS3, JavaScript |
| Backend | Node.js |
| Server | Native Node.js HTTP module |
| Database | MongoDB Atlas |
| Database Driver | MongoDB Node.js Driver |
| Sanitization | sanitize-html |
| Environment Variables | dotenv |
| Hosting | Render |
| Version Control | Git & GitHub |

---

## 🏗️ Architecture

Campus Echo follows a simple client-server architecture.

```text
                 User
                  |
                  v
          Frontend Interface
          HTML, CSS, JavaScript
                  |
                  v
             HTTP Requests
                  |
                  v
          Node.js HTTP Server
                  |
          +-------+-------+
          |               |
          v               v
      GET /api         POST /api
          |               |
          v               v
      Fetch Data     Validate Input
          |               |
          |          Sanitize Content
          |               |
          |               v
          |          Insert Document
          |               |
          +-------+-------+
                  |
                  v
             MongoDB Atlas
```

### How it works

1. The frontend sends HTTP requests to the Node.js backend.
2. The backend handles API requests using native Node.js HTTP functionality.
3. GET requests retrieve experiences from MongoDB Atlas.
4. POST requests validate and sanitize submitted data before inserting it into MongoDB.
5. The frontend displays the retrieved experiences.

---

## 📂 Project Structure

```text
college-experience-platform/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── index.js
│
├── handlers/
│   └── routeHandler.js
│
├── utils/
│   ├── db.js
│   ├── getData.js
│   ├── addNewExperience.js
│   ├── sendResponse.js
│   ├── serveStatic.js
│   └── ...
│
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── .env
```

---

## 🚀 Getting Started

Follow these steps to run Campus Echo locally.

### 1. Clone the repository

```bash
git clone https://github.com/i-am-abhi26/Campus-Echo.git
```

### 2. Navigate to the project directory

```bash
cd Campus-Echo
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project root directory.

Add your MongoDB Atlas connection string:

```env
MONGODB_URI=your_mongodb_connection_string
```

Replace the placeholder with your actual MongoDB Atlas connection string.

**Important:** Never commit your `.env` file or expose your database credentials publicly.

### 5. Start the server

```bash
node server.js
```

The server will start on the configured port (3000 by default when running locally).

### 6. Open the application

Visit:

```text
http://localhost:3000
```

---

## 🔌 API Documentation

Campus Echo currently exposes the following API endpoints:

### 1. Get All Experiences

**Endpoint:** `GET /api`

Retrieves all experiences stored in MongoDB Atlas.

Example:

```bash
GET http://localhost:3000/api
```

**Successful Response:** `200 OK`

Returns an array of experience objects.

### 2. Submit a New Experience

**Endpoint:** `POST /api`

Accepts a new experience and stores it in MongoDB Atlas.

Example request body:

```json
{
  "title": "My College Experience",
  "studentName": "Student Name",
  "experience": "Sharing my experience of college life..."
}
```

**Successful Response:** `201 Created`

Returns the newly submitted experience.

### Validation

The backend checks that:

- All required fields are strings.
- Required fields are not empty.
- Fields containing only whitespace are rejected.
- User-submitted HTML is sanitized before storage.

Invalid submissions receive:

```text
400 Bad Request
```

---

## ☁️ Deployment

Campus Echo is deployed using Render, with MongoDB Atlas providing persistent database storage.

| Component | Platform |
|---|---|
| Web Application & Backend | Render |
| Database | MongoDB Atlas |
| Source Code | GitHub |

🌐 **Live Application:** https://campus-echo-1.onrender.com

The application uses environment variables on Render to securely configure the MongoDB connection.

---

## 🔮 Future Improvements

Some improvements planned for future versions:

- Search and filter experiences by college, course, and other attributes.
- User authentication and student profiles.
- Edit and delete submitted experiences.
- Like and comment functionality.
- Pagination and improved experience discovery.
- Improved error handling and request validation.
- Better moderation and spam prevention.

---

## 🎯 Learning Outcomes

Building Campus Echo helped me explore and understand:

- How HTTP servers and request-response cycles work.
- Handling HTTP requests using Node.js without Express.
- Asynchronous programming using Promises and async/await.
- Implementing REST-style API endpoints.
- Connecting Node.js applications to MongoDB Atlas.
- Performing database operations using the MongoDB Node.js Driver.
- Input validation and HTML sanitization.
- Environment variables and deployment.
- Git, GitHub, and production deployment workflows.

---

## 👨‍💻 Author

**Abhishek**

Mathematics & Computing Undergraduate  
NIT Kurukshetra

- GitHub: [i-am-abhi26](https://github.com/i-am-abhi26)
- Project: [Campus Echo](https://github.com/i-am-abhi26/Campus-Echo)
- Live Website: [campus-echo-1.onrender.com](https://campus-echo-1.onrender.com)

---

<p align="center">
  <strong>Built with curiosity, learning, and a passion for web development. 🚀</strong>
</p>
