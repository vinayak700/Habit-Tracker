const mongoose = require('mongoose');

// storing the db on mongo atlas
const db = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/habit_Tracker');
        console.log('Mongodb connection established...');
    } catch (error) {
        console.log('Error connecting to Mongodb', error);
    }
}

module.exports = db;