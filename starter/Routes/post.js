import express from 'express';
import { postController } from '../Controllers/post.js';
import { verifyToken } from '../Middleware/authMiddleware.js';
import { getJobsController } from '../Controllers/getJobs.js';

const router = express.Router();

router.post("/post-a-job" , verifyToken , postController)
router.get("/get-all-jobs" , verifyToken , getJobsController)

export default router;