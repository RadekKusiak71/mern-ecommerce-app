const mongoose = require('mongoose');
const dotenv = require('dotenv').config()

const connectDB = async () => {
    try {
        await mongoose.connect(String(process.env.MONGO_URI), {
            serverSelectionTimeoutMS: 5000,
        });
        console.log(`MongoDB connected`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

module.exports = connectDB;