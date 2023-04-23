import { Router } from "express";
import TaskController from "../controllers/TaskController";
import auth from '../../middleware/auth';
const TaskRoutes = Router();

TaskRoutes.post('/create-task',auth,TaskController.store);

TaskRoutes.post('/update-task/:id',auth,TaskController.update_task_by_id);

TaskRoutes.get('/get-tasks/:user_id',auth,TaskController.get_all_tasks);


export default TaskRoutes;