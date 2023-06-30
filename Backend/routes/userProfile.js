import express from "express";



import { isAuthenticated } from '../middlewares/auth.js'

import { userprofile, updateUser } from "../controller/userprofile.js";

const router = express.Router()


router.get("/:id", isAuthenticated, userprofile);

router.put("/update", isAuthenticated, updateUser);




export default router;
