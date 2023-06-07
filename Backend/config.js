// Set up MongoDB connection
const mongoose = require('mongoose');
const user = require('./models/user')

const connectToMongo = () => {
    mongoose.connect('mongodb://localhost/compus_post', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: user,
    })
        .then(() => {
            console.log('Connected to the database');
        })
        .catch((err) => {
            console.log('Cannot connect to the database', err);
            process.exit();
        });
}


module.exports = connectToMongo;