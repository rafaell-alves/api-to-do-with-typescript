import { Router } from "express";
import UserController from "../controllers/userController";
const userRoutes = Router();

userRoutes.post('/create-user',UserController.store);

userRoutes.post('/login',UserController.login);

userRoutes.get('/users',UserController.list_users);


export default userRoutes;