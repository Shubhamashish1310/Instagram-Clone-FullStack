import express from "express";
import { cloudinaryUpload, upload } from "../../Config/multerConfig.js";
import { deletePost, getAllPosts, postscontroller, updatePost } from "../../Controller/postController.js";
import { zodPostSchema } from '../../validator/zodPostSchema.js';
import {validate} from "../../validator/zodValidator.js";
import { authMiddleware, isAdminMiddleware } from "../../Middlewares/authMiddleware.js";

const router = express.Router(); 

router.post("/post",authMiddleware, upload.single("image"), cloudinaryUpload,validate(zodPostSchema), postscontroller);

router.get("/post", getAllPosts);

router.delete("/post/:id",authMiddleware,deletePost);

router.put("/post/:id",authMiddleware,isAdminMiddleware, upload.single("image"), cloudinaryUpload, updatePost);

export default router