// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbconnet = require('./config')
const mongoose = require('mongoose');
const userRoue = require('./routes/userRoute')

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
dbconnet()

//apis 
app.use(userRoue)

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port} `);
});
