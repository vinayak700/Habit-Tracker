const mongoose = require('mongoose');

// Storing the DB on MongoDB Atlas
const db = async () => {
    try {
        await mongoose.connect('mongodb+srv://vgupta:ZiVi5EWMQtKxiJo6@cluster0.khgpbvj.mongodb.net/test', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connection established...');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
}

module.exports = db;
