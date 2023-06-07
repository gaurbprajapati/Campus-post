// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// import { dbconnet } from './app';
const mongoose = require('mongoose');
// import user from './models/user'

// Initialize the Express app
const app = express();
const port = 5000;

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));



//connecting db
// Set up MongoDB connection


mongoose.connect('mongodb://localhost/compus_post', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // dbName: user,
})
    .then(() => {
        console.log('Connected to the database');
    })
    .catch((err) => {
        console.log('Cannot connect to the database', err);
        process.exit();
    });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port} `);
});
