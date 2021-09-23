require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

// Basic Configuration
const port = process.env.PORT || 3000;

// Parser Middleware
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

// Set Static File
app.use(express.static(path.join(__dirname, '../../views/public/asset/css')));
app.use('/asset', express.static(path.join(__dirname, '../../views/public/asset')));

// Import the Router
app.use(require('./routers'));

// Initialize the Database
require('../config/database');

// Start the Server Listening
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
