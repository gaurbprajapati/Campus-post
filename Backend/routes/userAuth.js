import express from "express";


import { login, register, logout } from "../controller/Auth.js";
import { userprofile } from '../controller/userprofile.js'
import { isAuthenticated } from '../middlewares/auth.js'
const router = express.Router()

router.post("/login", login);
router.get("/logout", logout);
router.post("/register", register);

router.get("/userbyif", isAuthenticated, userprofile)


router.get("/demo", (req, res) => {
    res.send('I am user ')
})

router.post("/userupdate", isAuthenticated);

export default router;
