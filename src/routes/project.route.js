import express from "express";
import { addProject, getAllProject, removeProject, getOneProject, updateProject } from "../controllers/project.controller";

const router = express.Router();
router.post('/add-project', addProject);
router.get('/projects', getAllProject);
router.delete("/delete-project/:id", removeProject);
router.get("/projects/:id", getOneProject);
router.put("/projects/:id", updateProject);

export default router;
