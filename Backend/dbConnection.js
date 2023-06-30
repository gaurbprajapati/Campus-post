import mongoose from "mongoose";

export const dbconnet = () => {
    mongoose.connect(process.env.Mongodb_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "compus_post",
    })
        .then(() => {
            console.log('Connected to the database');
        })
        .catch((err) => {
            console.log('Cannot connect to the database', err);
            process.exit();
        });
}

