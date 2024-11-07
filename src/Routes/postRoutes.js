import express from 'express';
import v1Post from './v1/v1post.js'; 
import v2user from './v2/v2User.js';
const router = express.Router();

router.use('/v1', v1Post);

router.use('/v2/user',v2user)


export default router
