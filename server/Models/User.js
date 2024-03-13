// Importing Modules/Packages
const { Schema, model } = require('mongoose');

// Designing Schema
const userSchema = new Schema({
    Username: String,
    Email: String,
    Password: String
});

// Creating Table/Collection in Database
const user = model('User', userSchema);

// Exporting Module
module.exports = user;