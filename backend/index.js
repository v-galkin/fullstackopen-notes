const express = require('express');
const app = express();

const connectToDatabase = require('./db/connect');
const notesRouter = require('./controllers/notes');

connectToDatabase();

app.use(express.json());
app.use(express.static('dist'));
app.use('/api/notes', notesRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
