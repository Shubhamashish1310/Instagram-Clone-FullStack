import { createPostService, deletePostService, findAllPostService } from "../Services/postService.js";

export async function postscontroller(req, res) {
    console.log('req.file:', req.file); // should now include `cloudinaryUrl`
    console.log('req.body:', req.body);
    const post = await createPostService({
        caption: req.body.caption,
        image: req.file.cloudinaryUrl,
    });
    // Respond with the Cloudinary URL
   res.status(201).json({ 
    success: true,
    message: 'Image uploaded successfully',
    data: post
    });
}

export async function getAllPosts(req, res) {
    const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;

    const paginatedPosts = await findAllPostService(limit, offset);
    res.status(200).json({
        success: true,
        message: 'Posts fetched successfully',
        data: paginatedPosts
    });
}

export async function deletePost(req, res) {
    
        const postId = req.params.id;
        console.log('Post ID:', postId);
    const deletedPost = await deletePostService(postId);
    res.status(200).json({
        success: true,
        message: 'Post deleted successfully',
        data: deletedPost
    });
  
    }

