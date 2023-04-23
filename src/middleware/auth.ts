import Jwt from 'jsonwebtoken';
import {Request,Response,NextFunction} from 'express';
const auth= (req:Request,res:Response,next:NextFunction) =>{ 
    if(!req.headers.authorization){
        res.status(401).json({
            'error':'Acesso não autorizado'
        })
    };
    //console.log(req.headers.authorization?.split(" "));
    if(req.headers.authorization === undefined){
        return  res.status(401).json({ error: 'Acesso não autorizado!' })   
    }
    const token:string = req.headers.authorization?.split(" ")[1];
    try {
        Jwt.verify(token, 'secret')
        next();
    } catch (err) {
        res.status(401).json({ error: 'Acesso não autorizado!' })
    }
}

export default auth;