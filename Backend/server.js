
import { dbconnet } from "./config.js";
import { app } from './app.js'
import dotenv from 'dotenv';
dotenv.config();

const port = 5000;

//data base connection
dbconnet();



app.listen(port, () => {
  console.log(
    `Server is running at port:${port}`, data
  )
});
