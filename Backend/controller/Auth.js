import bcrypt from "bcrypt";
import {validationResult} from 'express-validator';

import ErrorHandler from "../middlewares/error.js";
import {User} from "../models/User.js";
import {sendCookie} from "../utils/features.js";

export const login = async (req, res, next) => {
  try {
    const {email, password} = req.body;

    // Working process done :-- commed due to testing phase

    // body('email', 'Enter a valid email').isEmail().run(req);
    // body('password', 'Password cannot be
    // blank').exists().normalizeEmail().run(req); const errorslog =
    // validationResult(req); if (!errorslog.isEmpty()) {
    //     return next(new ErrorHandler('Validation Error', 400,
    //     errorslog.array()));
    // }
    // console.log("req.body", email, password);
    const user = await User.findOne({email});
    // console.log("user", user);

    if (!user)
      return next(new ErrorHandler("Invalid Email or Password", 400));

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("decoded", email, isMatch);

    if (!isMatch)
      return next(new ErrorHandler("Invalid Email or Password", 400));

    sendCookie(user, res, `Welcome back, ${user.name}`, 200);
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res, next) => {
  try {
    const {
      username,
      password,
      firstName,
      lastName,
      mobileNumber,
      email,
    } = req.body;

    // validation of data---Working phase
    // Working process done :-- commed due to testing phase

    // body('firstName', 'Enter a valid name').isLength({ min: 1 }).run(req);
    // body('lastName', 'Enter a valid name').isLength({ min: 1 }).run(req);
    // body('email', 'Enter a valid email').isEmail();
    // body('password', 'Password must be at least 5 characters').isLength({
    // min: 5 }).run(req); body('phoneNumber', 'Enter a valid phone
    // number').isLength({ min: 10, max: 10 }).run(req); const errors =
    // validationResult(req); if (!errors.isEmpty()) {
    //     return next(new ErrorHandler('Validation Error', 400,
    //     errors.array()));
    // }

    let user = await User.findOne({email});

    if (user) {
      return next(new ErrorHandler("User Already Exist", 400));
    }

    const hashpassword = await bcrypt.hash(password, 10);

    // Create a new user object using array destructuring
    user = User.create({
      username : username,
      password : hashpassword,
      firstName : firstName,
      lastName : lastName,
      mobileNumber : mobileNumber,
      email : email,
    })

    success = true
    const authToken = sendCookie(user, res, "Registered Successfully", 201);
    if (user) {
      res.send("Registered Successfully", {success, authToken})
    }
  } catch (error) {
    res.status(400).json(error);
  }
};

export const logout = (req, res) => {
  res.status(200)
      .cookie("token", "", {
        expires : new Date(Date.now()),
      })
      .json({
        success : true,
        user : req.user,
      });
};

export const authval = 100
