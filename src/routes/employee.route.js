import express from "express";
import {
    addEmployee,
    getAllEmployee,
    getOneEmployee,
    updateEmployee,
    removeEmployee
} from "../controllers/employee.controller";

const router = express.Router();
router.post('/add-employee', addEmployee);
router.get('/employees', getAllEmployee);
router.get('/employees/:id', getOneEmployee);
router.put('/update-employees/:id', updateEmployee);
router.delete('/delete-employees/:id', removeEmployee);

export default router;