import express from 'express';
import { postController } from '../Controllers/post.js';
import { verifyToken } from '../Middleware/authMiddleware.js';
import { getJobsController } from '../Controllers/getJobs.js';
import { myPostController } from '../Controllers/getMyPosts.js';
import { updatePostController } from '../Controllers/updatePost.js';

const router = express.Router();

router.post("/post-a-job" , postController)
router.get("/get-all-jobs" , getJobsController)
router.get("/get-my-posts" , verifyToken , myPostController);
router.post("/update-post", updatePostController);


export default router;
