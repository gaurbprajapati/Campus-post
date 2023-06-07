// Set up MongoDB connection
const mongoose = require('mongoose');
import user from './models/user'

export const dbconnet = mongoose.connect('mongodb://localhost/compus_post', {
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