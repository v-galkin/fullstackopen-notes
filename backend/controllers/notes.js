const notesRouter = require('express').Router();
const Note = require('../models/note');

// Get all notes
notesRouter.get('/', (request, response) => {
  Note.find({}).then((notes) => {
    response.json(notes);
  });
});

// Get a note by id
notesRouter.get('/:id', (request, response) => {
  const id = request.params.id;
  Note.findById(id).then((note) => {
    if (note) {
      response.json(note);
    } else {
      response.status(404).end();
    }
  });
});

// Delete a note by id
notesRouter.delete('/:id', (request, response) => {
  const id = request.params.id;
  Note.findByIdAndDelete(id).then((result) => {
    response.status(204).end();
  })
});

// Create a new note
notesRouter.post('/', (request, response) => {
  const body = request.body;

  if (!body.content) {
    return response.status(400).json({
      error: 'Content missing',
    });
  }

  const note = new Note ({
    content: body.content,
    important: body.important || false,
  });

  note.save().then((savedNote) => {
    response.json(savedNote);
  })
});

module.exports = notesRouter;