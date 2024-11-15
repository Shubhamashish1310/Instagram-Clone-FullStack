import express from 'express';
import { createComment, getCommentById } from '../../Controller/commentController.js';
import { authMiddleware } from '../../Middlewares/authMiddleware.js';

const router = express.Router();

router.get('/:id',authMiddleware , getCommentById);

router.post('/',authMiddleware  ,  createComment);

export default router;