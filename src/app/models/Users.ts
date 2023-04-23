import database from "../../config/database"
import { IResponse, IUser } from '../interfaces/interfaces';
import { Response } from "express";

class Users {
    //public readonly users : Array<User>;
    
    /**
     * create_users
     */
    public async create_users(user:IUser):Promise<IResponse> {
        try {
            await database.insert(user).into('users');
            const response:IResponse = {success:"user create",status:202};
            return response;
        } catch (error) {
            const response:IResponse = {error:"error in database",status:501};
            return response;
        }
      
        
    }

        /**
     * create_users
     */
        public async get_users():Promise<IResponse> {
            try {
               const users:Array<IUser> = await database.select('*').into('users');
               
               const response:IResponse = {success:'success',data:users,status:202};
                return response;
            } catch (error) {
                const response:IResponse = {error:"error in database",status:501};
                return response;
            }
        }

        
        /**
     * create_users
     */
        public async get_user_by_user_name(user_name:IUser):Promise<IUser> {
         
               const data:IUser = await database.select('*').where({
                user_name:user_name.user_name
               }).into('users').first();
                return data;
            
              
        }
}

export default new Users();