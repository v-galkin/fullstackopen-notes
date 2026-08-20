# Notes Backend

FullStackOpen Part 3 exercise: an Express REST API for notes.

## Endpoints

- `GET /api/notes` — list all notes
- `GET /api/notes/:id` — get a single note
- `POST /api/notes` — create a note (`{ content, important }`)
- `DELETE /api/notes/:id` — delete a note

## Run

```
npm install
npm run dev
```

Server listens on port 3001.
