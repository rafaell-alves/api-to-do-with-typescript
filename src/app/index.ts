import { App } from "./app"
import dotenv from 'dotenv';
dotenv.config();

new App().application.listen(process.env.PORT,()=>{
    console.log("is on application in Port:"+process.env.PORT);
});