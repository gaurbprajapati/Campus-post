export const file = "Hello I am router files"

import express from "express";
import jwt from 'jsonwebtoken'
import {fun, data} from './Resume_Auto_generator/check.js'
import mongoose from "mongoose";
import {User} from './models/User.js'
import cookieParser from 'cookie-parser'

const hello = mongoose.Schema({
  name : String,
  email : String,
});
const Userdemi = mongoose.model('Userdemi', hello);

// middleware to parse url-encoded data in req.body and populate it
app.use(express.urlencoded({extended : true}))
app.use(cookieParser())
app.use(express.json());

app.post("/save", (req, res) => {
  const {name, email} = req.body;

  // console.log(name, email);
  let user = Userdemi.create({name, email});
})

app.get("/user", (req, res) => {
  User.create({
        username : "ramu",
        password : "abf",
        firstName : "Hello",
        lastName : "jjel",
        mobileNumber : "hell",
        email : "ganfn",
      })
      .then(() => {
        res.send("Data saved successfully");
        console.log("Success");
      })
      .catch((error) => {
        res.send("Failed to save data");
        console.log("Error:", error);
      });
});

app.get("/save", (req, res) => {
  Userdemi.create({name : "rahul", email : "Gaurav@gamil.com"})
      .then(() => {
        res.send("Data saved successfully");
        console.log("Success");
      })
      .catch((error) => {
        res.send("Failed to save data");
        console.log("Error:", error);
      });
});