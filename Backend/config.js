import mongoose from "mongoose";

export const dbconnet = () => {
  mongoose
    .connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "compus_post",
    })
    .then(() => {
      console.log("Connected to the database");
    })
    .catch((err) => {
      console.log("Cannot connect to the database", err);
      process.exit();
    });
};
