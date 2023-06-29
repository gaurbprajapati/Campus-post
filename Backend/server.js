import { dbconnet } from "./dbConnection.js";
import { app } from './app.js'
import dotenv from 'dotenv';


dotenv.config();




//data base connection
dbconnet();



app.listen(process.env.port, () => {
  console.log(
    `Server is running at port:${process.env.port}`
  )
});
