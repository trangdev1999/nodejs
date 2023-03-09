import express from 'express';
import { signUp, signIn, getAllUser, remove } from '../controllers/auth.controller';


const router=express.Router();
router.post("/sign-up", signUp)
router.post("/sign-in", signIn);
router.get("/users", getAllUser);
router.delete("/users/:id", remove)


export default router;
