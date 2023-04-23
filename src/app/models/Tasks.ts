import database from "../../config/database"
import { IResponse, IUser, ITask } from '../interfaces/interfaces';
import { Response } from "express";

class Users {
    //public readonly users : Array<User>;
    
    /**
     * create_users
     */
    public async create_tasks(task:ITask):Promise<IResponse> {
        try {
            await database.insert(task).into('tasks');
            const response:IResponse = {success:"task create",status:202};
            return response;
        } catch (error) {
            const response:IResponse = {error:"error in database",status:501};
            return response;
        }
      
        
    }

         /**
     * create_users
     */
         public async get_tasks_by_id(id:number):Promise<IResponse> {
            try {
               const tasks:Array<ITask> = await database.select('*').where({
                user_id:id
               }).into('tasks');
               
               const response:IResponse = {success:'success',data:tasks,status:202};
                return response;
            } catch (error) {
                const response:IResponse = {error:"error in database",status:501};
                return response;
            }
        }

              /**
             * create_users
             */
        public async update(update_object:ITask,id:number):Promise<IResponse> {
            try {
                await database.update(update_object).where({
                id:id
                }).into('tasks');
                
                const response:IResponse = {success:'success',data:[update_object],status:202};
                return response;
            } catch (error) {
                console.log(error);
                const response:IResponse = {error:"error in database",status:501};
                return response;
            }
        }

}

export default new Users();