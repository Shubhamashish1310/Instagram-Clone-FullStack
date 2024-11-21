import express from "express";
import { cloudinaryUpload, upload } from "../../Config/multerconfig.js";
import { deletePost, getAllPosts, getAllUser, getUserProfile, postscontroller, updatePost } from "../../Controller/postController.js";
import { zodPostSchema } from '../../validator/zodPostSchema.js';
import { validate } from "../../validator/zodValidator.js";
import { authMiddleware, isAdminMiddleware } from "../../Middlewares/authMiddleware.js";

const router = express.Router();

/**
 * @swagger
 * /post:
 *  post:
 *      summary: Create new post
 *      tags: [Post]
 *      requestBody:
 *          required: true
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          caption:
 *                              type: string
 *                          image:
 *                              type: string
 *                              format: binary
 *      responses:
 *          200:
 *              description: Successful operation
 *          400:
 *              description: Bad request
 *          500:
 *              description: Internal server error
 */

router.post("/post", authMiddleware, upload.single("image"), cloudinaryUpload, validate(zodPostSchema), postscontroller);

router.get("/post", getAllPosts);
router.get("/userDetail",getAllUser)
router.get("/profile/:id",authMiddleware,getUserProfile)
router.delete("/post/:id",authMiddleware, deletePost);

router.put("/post/:id", authMiddleware, upload.single("image"), cloudinaryUpload, updatePost);

export default router;
