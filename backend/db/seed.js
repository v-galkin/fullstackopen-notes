const mongoose = require('mongoose')
const connectToDatabase = require('./connect')
const Note = require('../models/note')

const initialNotes = [
    {
        content: 'HTML is easy',
        important: false,
    },
    {
        content: 'Browser can execute only JavaScript',
        important: true,
    },
    {
        content: 'GET and POST are the most important methods of HTTP protocol',
        important: true,
    },
    {
        content: 'Mongoose makes use of mongo easy',
        important: true,
    },
    {
        content: 'Callback-functions suck',
        important: true,
    },
]

const seedDatabase = async () => {
    try {
        await connectToDatabase()
        await Note.deleteMany({})
        console.log('Removed existing notes from the database')
        await Note.insertMany(initialNotes)
        console.log('Database seeded successfully')
    } catch (error) {
        console.error('Error seeding database:', error.message)
    } finally {
        await mongoose.connection.close()
    }
}

seedDatabase();