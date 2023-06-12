import express from "express";

import { authval, login, register, logout } from "../controller/Auth.js";
import { userprofile } from "../controller/userprofile.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { User } from "../models/User.js";
export const router = express.Router();

router.post("/login", login);
router.get("/logout", logout);
router.post("/register", register);

router.get("/userbyif", isAuthenticated, userprofile);

router.get("/demo", (req, res) => {
  res.send("I am user ");
});

router.post("/userupdate", isAuthenticated);
