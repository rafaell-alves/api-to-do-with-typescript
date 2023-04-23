import express from "express";
import UserRoutes  from "./routes/UserRoutes";
import bodyParser from "body-parser";
import TaskRoutes from "./routes/TaskRoutes";

export class App{
  public application: express.Application;

  constructor(){
    this.application = express();
    
  this.application.use(bodyParser.json());
   this.middleware();
    this.router();
  }

  private middleware(){
    this.application.use(express.json());
  }

  private router(){
    this.application.use('/api/user',UserRoutes);
    this.application.use('/api/task',TaskRoutes);
  }
}