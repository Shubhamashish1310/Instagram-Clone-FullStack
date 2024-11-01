import express from "express";
import { cloudinaryUpload, upload } from "../Config/multerConfig.js";
import { postscontroller } from "../Controller/postController.js";

const router = express.Router();

router.post("/upload", upload.single("image"), cloudinaryUpload, postscontroller);

export default router