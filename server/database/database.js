// Importing Modules/Packages
const mongoose = require('mongoose');

// Connecting to Database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/OpenChat');

// Exporting Module
module.exports = mongoose;

