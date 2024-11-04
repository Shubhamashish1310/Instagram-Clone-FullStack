import express from "express";
import { cloudinaryUpload, upload } from "../../Config/multerConfig.js";
import { deletePost, getAllPosts, postscontroller, updatePost } from "../../Controller/postController.js";


const router = express.Router();

router.post("/post", upload.single("image"), cloudinaryUpload, postscontroller);
router.get("/post", getAllPosts);
router.delete("/post/:id", deletePost);
router.put("/post/:id", upload.single("image"), cloudinaryUpload, updatePost);
export default router