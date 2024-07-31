import express from 'express';
import { premiumController } from '../Controllers/premium.js';

const router = express.Router();

router.post('/get' , premiumController);

export default router;