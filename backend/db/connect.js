const mongoose = require('mongoose');
const { MONGODB_URI } = require('./config');

const connectToDatabase = () => {
  mongoose.set('strictQuery', false);

  return mongoose
    .connect(MONGODB_URI, { family: 4 })
    .then(() => {
      console.log('connected to MongoDB');
    })
    .catch((error) => {
      console.log('Error connecting to MongoDB:', error.message);
    });
};

module.exports = connectToDatabase;