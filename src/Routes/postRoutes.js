import express from 'express';
import v1Post from './v1/v1post.js'; 
import v2Post from './v2/v2Post.js';
const router = express.Router();

router.use('/v1', v1Post);
router.use('/v2', v2Post);

export default router
