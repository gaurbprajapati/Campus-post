

import { login, register, updateUser } from '../controller/userControler'

app.post("/login", login());

app.post("/register", register());

app.post("/update", updateUser());

