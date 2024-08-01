import express from 'express';
import { employeeRegisterController } from '../Controllers/employeeRegister.js';
import {userRegisterController} from '../Controllers/userRegister.js'
import { loginController } from '../Controllers/login.js';
import { verifyToken } from '../Middleware/authMiddleware.js';
import { getUser } from '../Controllers/getUser.js';
import { getEmployee } from '../Controllers/getEmployee.js';

const router = express.Router();

router.post("/employeeregister", employeeRegisterController);
router.post("/userregister" , userRegisterController);
router.post("/login" , loginController)
router.get("/getuser"  , getUser);
router.get("/getemployee", getEmployee);


export default router;

