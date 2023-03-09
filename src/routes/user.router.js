import express from 'express';

import { getOneUser, getAllUser } from '../controllers/user.controller'

const router=express.Router();
router.get("/users/:id",getOneUser);
router.get('/users', getAllUser)

export default router;
