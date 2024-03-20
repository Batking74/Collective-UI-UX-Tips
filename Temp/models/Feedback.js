// Importing Modules/Packages
const { Schema, model } = require('mongoose');

// Defining Database Schema
const feedbackSchema = new Schema({
    Username: String,
    Message: String
});

// Creating the Feedback Table/Collection in MongoDB
const feedback = model('Feedback', feedbackSchema);

// Exporting Module
module.exports = feedback;