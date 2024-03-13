// Importing Module
const { Schema, model } = require('mongoose');

// Designing Schema
const postSchema = new Schema({
    UserID: String,
    Content: String
});

// Create Table/Collection
const post = model('Post', postSchema);

// Exporting Module
module.exports = post;