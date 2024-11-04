import express, { Router } from "express";
import { cloudinaryUpload, upload } from "../../Config/multerConfig.js";
import { deletePost, getAllPosts, postscontroller } from "../../Controller/postController.js";


const router = express.Router();

router.post("/post", upload.single("image"), cloudinaryUpload, postscontroller);
router.get("/post", getAllPosts);
router.delete("/post/:id", deletePost);
export default router