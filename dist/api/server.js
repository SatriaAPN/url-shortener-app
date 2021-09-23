require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.use(require('./routers.js'));

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
