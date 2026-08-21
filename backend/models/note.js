const mongoos = require('mongoose')

const noteSchema = new mongoos.Schema({
    content: String,
    date: {
        type: Date,
        default: Date.now
    },
    important: Boolean,
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Note = mongoos.model('Note', noteSchema)  

module.exports = Note;