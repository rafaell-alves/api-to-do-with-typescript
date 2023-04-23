import { Request,Response } from 'express';
import Users from '../models/Users';
import { IUser } from '../interfaces/interfaces';
import bcrypt from 'bcrypt';
import Jwt  from 'jsonwebtoken';
class UserController {
    
    /**
     * name
        */
    public async store(req:Request,res:Response):Promise<Response>{
        const data: IUser = {
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            user_name:req.body.user_name,
            email :req.body.email,
           password_hash:await bcrypt.hash(req.body.password, 10),
           status:0
        };

        const result = await Users.create_users(data);
        if(result.success !== undefined){
           return res.json(result).status(result.status);
        }else{
           return res.json(result.error).status(result.status);
        }

    }

    public async list_users(req:Request,res:Response):Promise<Response>{
       
        const result = await Users.get_users();;
        if(result.success !== undefined){
           return res.json(result).status(result.status);
        }else{
           return res.json(result.error).status(result.status);
        }
    }

            
    public async login(req:Request,res:Response):Promise<any>{
        const data:IUser = req.body
        const result = await Users.get_user_by_user_name(data);
        if(result === undefined)
        {
            return res.json({error:'user not found'}).status(404);    
        }
        const match = await bcrypt.compare(req.body.password, result.password_hash);
        if(match) {
            var response = {
                "sucesso": "Logado com Sucesso Bem-Vindo "+result.first_name+" "+result.last_name,
                "token": Jwt.sign(
                    {user:result.user_name},
                    'secret',
                    {expiresIn:'1h'}
                    )
            };
            
            return res.json(response).status(200);
        }else{
            return res.json({error:'password is not compatible'}).status(500);
        }
    }
}

export default new UserController();