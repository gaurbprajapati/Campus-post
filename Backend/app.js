import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

import { data } from './Resume_Auto_generator/check.js'
import { file } from './routes/hell.js'
// import { router } from './routes/userRoute.js'

import { hellval, router } from './routes/userAuth.js'

export const app = express();

// Using Middlewares
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cookieParser());
app.use(cors());

console.log(data);
console.log(file);

//api end points

app.use("/api/user", router)

app.get("/", (req, res) => {
    res.send("Bro I am Skill , Help me to bult my resume ....");
});
