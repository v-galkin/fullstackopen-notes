import { useState } from 'react';
import Note from './components/Note/Note';
import Notification from './components/Note/Notification';
import Footer from './components/Note/Footer';
import useNotes from './hooks/useNotes';

const App = () => {
  const { notes, errorMessage, toggleImportanceOf, addNote } = useNotes();
  const [newNote, setNewNote] = useState('A new note');
  const [showAll, setShowAll] = useState(true);

  // ------------------------ Logic ------------------------

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addNote(newNote).then(() => setNewNote('A new note'));
  };

  const notesToShow = showAll
    ? notes
    : notes.filter((note) => note.important === true);

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          Show {showAll ? 'important' : 'all'}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Save</button>
      </form>
      <Footer />
    </div>
  );
};

export default App;
