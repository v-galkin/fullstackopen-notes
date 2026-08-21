# Notes

A full-stack notes application built while working through [Full Stack Open](https://fullstackopen.com/). A React frontend talks to an Express REST API backend, which also serves the built frontend as static files in production.

**Live app:** https://fullstackopen-notes-rb4g.onrender.com/

## Tech stack

- **Frontend:** React 19, Vite, Axios
- **Backend:** Node.js, Express
- **Deployment:** Render (single Express app serving the built React app + API)

## Project structure

```
backend/    Express REST API, and (in production) the built frontend
frontend/   React app (Vite)
```

## API

| Method | Route              | Description                              |
| ------ | ------------------ | ----------------------------------------- |
| GET    | `/api/notes`        | List all notes                            |
| GET    | `/api/notes/:id`    | Get a single note                         |
| POST   | `/api/notes`        | Create a note (`{ content, important }`)  |
| DELETE | `/api/notes/:id`    | Delete a note                             |

## Running locally

The frontend's dev server proxies `/api` requests to the backend (see `frontend/vite.config.js`), so run both at once, in two terminals:

```bash
# terminal 1 - backend (http://localhost:3001)
cd backend
npm install
npm run dev

# terminal 2 - frontend (http://localhost:5173)
cd frontend
npm install
npm run dev
```

Then open the frontend dev server URL in your browser.

## Production build

The backend serves the frontend's built assets from `backend/dist`. To build the frontend and copy it into the backend:

```bash
cd backend
npm run build:ui
```

Then start the backend as usual (`npm start`) and it serves both the app and the API on the same port.
