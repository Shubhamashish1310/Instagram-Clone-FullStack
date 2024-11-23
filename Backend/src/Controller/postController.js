import {
    createPostService,
    deletePostService,
    findAllPostService,
    findAllUserService,
    updatePostService,
    findUserProfileService,
} from "../Services/postService.js";

// Create a new post
export async function postscontroller(req, res) {
    try {
        const userId = req.user;
        console.log('User Details', userId.id);
        console.log('req.file:', req.file); // should now include `cloudinaryUrl`
        console.log('req.body:', req.body);

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: 'No file uploaded',
                data: null,
            });
        }

        const post = await createPostService({
            user: userId.id,
            caption: req.body.caption,
            image: req.file.cloudinaryUrl,
        });

        res.status(201).json({
            success: true,
            message: 'Image uploaded successfully',
            data: post,
        });
    } catch (error) {
        console.error(`Error in postscontroller: ${error.message}`);
        res.status(500).json({
            success: false,
            message: 'Failed to create post',
            data: error,
        });
    }
}

// Fetch all posts with pagination
export async function getAllPosts(req, res) {
    try {
        const limit = req.query.limit || 100;
        const offset = req.query.offset || 0;

        const paginatedPosts = await findAllPostService(limit, offset);
        res.status(200).json({
            success: true,
            message: 'Posts fetched successfully',
            data: paginatedPosts,
        });
    } catch (error) {
        console.error(`Error in getAllPosts: ${error.message}`);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch posts',
            data: error,
        });
    }
}

// Fetch all users
export async function getAllUser(req, res) {
    try {
        const User = await findAllUserService();
        res.status(200).json({
            success: true,
            message: "User fetched successfully",
            data: User,
        });
    } catch (error) {
        console.error(`Error in getAllUser: ${error.message}`);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch users',
            data: error,
        });
    }
}

// Delete a post
export async function deletePost(req, res) {
    try {
        const postId = req.params.id;
        console.log('Post ID:', postId);

        const deletedPost = await deletePostService(postId, req.user.id);
        if (!deletedPost) {
            return res.status(404).json({
                success: false,
                message: 'Post not found',
                data: null,
            });
        }

        res.status(200).json({
            success: true,
            message: 'Post deleted successfully',
            data: deletedPost,
        });
    } catch (error) {
        console.error(`Error in deletePost: ${error.message}`);
        res.status(500).json({
            success: false,
            message: 'Failed to delete post',
            data: error,
        });
    }
}

// Update a post
export async function updatePost(req, res) {
    try {
        const id = req.params.id;
        const updateObject = req.body;

        if (req.file) {
            updateObject.image = req.file.cloudinaryUrl;
        }

        const updatedPost = await updatePostService(id, updateObject);
        res.status(200).json({
            success: true,
            message: 'Post updated successfully',
            data: updatedPost,
        });
    } catch (error) {
        console.error(`Error in updatePost: ${error.message}`);
        res.status(500).json({
            success: false,
            message: 'Failed to update post',
            data: error,
        });
    }
}

// ** New Function: Get User Profile **
export async function getUserProfile(req, res) {
    try {
        const email = req.params.id; // Extracted from the route
        console.log('Fetching profile for user ID:', email);

        const profileData = await findUserProfileService(email);

        res.status(200).json({
            success: true,
            message: 'User profile fetched successfully',
            data: profileData,
        });
    } catch (error) {
        console.error(`Error in getUserProfile: ${error.message}`);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch user profile',
            data: error,
        });
    }
}
