import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRouter from './routes/userAuth.js'
import userProfile from './routes/userProfile.js'

export const app = express();


// Using Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser());
app.use(cors());



//api end points
app.use("/api/user", userRouter)
app.use("/api/user", userProfile)

app.get("/home", (req, res) => {
    res.send("Bro I am Skill , Help me to bult my resume ....");
});
