// Importing Modules/Packages
const mongoose = require('mongoose');
require('dotenv').config();

// Connecting to Database
mongoose.connect('mongodb://localhost:27017/collectiveUiUxTips');

// Exporting Module
module.exports = mongoose;