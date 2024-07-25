import express from 'express';
import { employeeRegisterController } from '../Controllers/employeeRegister.js';
import {userRegisterController} from '../Controllers/userRegister.js'

const router = express.Router();

router.post("/employeeregister", employeeRegisterController);
router.post("/userregister" , userRegisterController);

export default router;

