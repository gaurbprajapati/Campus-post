import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRouter from './routes/userAuth.js'


export const app = express();


// Using Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser());
app.use(cors());



//api end points
app.use("/api/user", userRouter)

app.get("/", (req, res) => {
    res.send("Bro I am Skill , Help me to bult my resume ....");
});
