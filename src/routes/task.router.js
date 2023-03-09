import express from "express";
import {
    addTask,
    getAllTask,
    removeTask,
    getOneTask,
    updateTask
} from "../controllers/task.controller";

const router = express.Router();
router.post('/add-task', addTask);
router.get('/tasks', getAllTask);
router.delete("/delete-task/:id", removeTask);
router.get("/tasks/:id", getOneTask);
router.put("/tasks/:id", updateTask);

export default router;