// Importing Modules/Packages
const mongoose = require('mongoose');
require('dotenv').config();

// Connecting to Database
mongoose.connect(process.env.MONGODB_URI || process.env.MONGO_DB_CONNECTION);

// Exporting Module
module.exports = mongoose;

