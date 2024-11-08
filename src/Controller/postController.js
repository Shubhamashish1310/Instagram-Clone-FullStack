
import { createPostService, deletePostService, findAllPostService, updatePostService } from "../Services/postService.js";


export async function postscontroller(req, res) {
    const userId = req.user;
    console.log('usser Details',userId.id);
    console.log('req.file:', req.file); // should now include `cloudinaryUrl`
    console.log('req.body:', req.body);
    if(!req.file) {
        return res.status(400).json({
            success: false,
            message: 'No file uploaded',
            data: null
        });
    }
    const post = await createPostService({
        user: userId.id,
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

    if (!deletedPost) {
        return res.status(404).json({
            success: false,
            message: 'Post not found',
            data: null
        });
    }
    res.status(200).json({
        success: true,
        message: 'Post deleted successfully',
        data: deletedPost
    });
  
    }


export async function updatePost(req, res) {
    try {
        const id = req.params.id;
        const updateObject = req.body;
        if (req.file) {
            updateObject.image = req.file.cloudinaryUrl;
        }
        const updatedPost = await updatePostService(id, updateObject);
        return res.status(200).json({
            success: true,
            message: 'Post updated successfully',
            data: updatedPost
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Failed to update post',
            data: error
        });
    }
}
