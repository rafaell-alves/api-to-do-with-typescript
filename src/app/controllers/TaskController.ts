import { Request,Response } from "express";
import { ITask } from "../interfaces/interfaces";
import Tasks from "../models/Tasks";

class TaskController{
    public async store(req:Request,res:Response) {
        const data: ITask = {
            task_name:req.body.task_name,
            description:req.body.description,
            deadline:req.body.deadline,
            user_id:req.body.user_id,
            status:0
        };

        const result = await Tasks.create_tasks(data);
        if(result.success !== undefined){
           return res.json(result).status(result.status);
        }else{
           return res.json(result.error).status(result.status);
        }

    }

    /**
     * get_all_tasks
     */
    public async get_all_tasks(req:Request,res:Response) {
        
        const result = await Tasks.get_tasks_by_id(parseInt(req.params['user_id']));
        if(result.success !== undefined){
           return res.json(result).status(result.status);
        }else{
           return res.json(result.error).status(result.status);
        }   
    }

    public async update_task_by_id(req:Request,res:Response){
        const data:ITask = {
            task_name:req.body.task_name,
            description:req.body.description,
            deadline:req.body.deadline,
            status:0
        };
        const result = await Tasks.update(data,parseInt(req.params['id']));
        if(result.success !== undefined){
            return res.json(result).status(result.status);
         }else{
            return res.json(result.error).status(result.status);
         }   
    }
}

export default new TaskController();