import express from "express";
import { cloudinaryUpload, upload } from "../../Config/multerConfig.js";
import { getAllPosts, postscontroller } from "../../Controller/postController.js";


const router = express.Router();

router.post("/post", upload.single("image"), cloudinaryUpload, postscontroller);
router.get("/post", getAllPosts);

export default router