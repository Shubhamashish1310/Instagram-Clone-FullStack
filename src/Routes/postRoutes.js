import express from 'express';
import v1Post from './v1/v1post.js'; 
import v1user from './v1/v1user.js';
import v1comment from './v1/v1comment.js';

const router = express.Router();

router.use('/v1', v1Post);

router.use('/v1/user',v1user)

router.use('/v1/comment',v1comment)


export default router
