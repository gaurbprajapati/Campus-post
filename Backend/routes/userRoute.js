const express = require('express')
import { login, register, updateUser } from '../controller/userControler'
const router = express.Router();

router.post("/login", login());

router.post("/register", register());

router.post("/update", updateUser());

export default router;