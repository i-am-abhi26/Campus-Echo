# Campus Echo — Frontend

A responsive, pure HTML + CSS frontend for a college experience sharing platform.

## Tech

- HTML5
- CSS3
- No JavaScript
- No frontend framework
- No authentication

## Run

Open `index.html` directly in a browser.

For development, you can also use any static server.

## Pages / sections

The frontend is intentionally a single-page layout with three sections:

- `#home` — landing/home section
- `#read` — experience cards and sample full stories
- `#upload` — experience submission form

Navigation uses normal HTML anchors, so no JavaScript/router is required.

## Backend API contract

The upload form is already configured for:

`POST /api/experiences`

Form fields:

- `studentName`
- `college`
- `course`
- `year`
- `title`
- `experience`

Example Express route:

```js
app.post("/api/experiences", async (req, res) => {
  const { studentName, college, course, year, title, experience } = req.body;
  // save to MongoDB
});
```

Later, the Read section can be populated by the backend. Because the frontend is deliberately JS-free, the cleanest architecture is either:

1. Express server-side renders the experience cards, or
2. Express serves generated HTML using the same CSS.

If you later decide you want a React frontend, this design can be recreated as components without changing the backend API contract.
