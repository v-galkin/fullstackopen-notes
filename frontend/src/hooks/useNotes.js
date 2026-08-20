import { useState, useEffect } from 'react';
import noteService from '../services/noteService';

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  // Get all Notes
  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  // Toggle "important"
  const toggleImportanceOf = (id) => {
    const currentNote = notes.find((note) => note.id === id);
    const updatedNote = { ...currentNote, important: !currentNote.important };

    noteService
      .update(id, updatedNote)
      .then((returnedNote) => {
        setNotes(notes.map((note) => (note.id === id ? returnedNote : note)));
      })
      .catch((error) => {
        setErrorMessage(
          `Note '${currentNote.content}' was already removed from server`
        );
        setTimeout(() => setErrorMessage(null), 5000);
        setNotes(notes.filter((note) => note.id !== id));
      });
  };

  // Create a new Note
  const addNote = (content) => {
    const noteObject = {
      content,
      important: Math.random() < 0.5,
    };

    return noteService.create(noteObject).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
    });
  };

  return {
    notes,
    errorMessage,
    toggleImportanceOf,
    addNote,
  };
};

export default useNotes;
