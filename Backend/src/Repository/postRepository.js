import post from "../Schema/post.js";
import user from "../Schema/user.js";

// Create post
export async function createPost(user, caption, image) {
    try {
        if (!user || !caption || !image) {
            throw new Error("Missing required fields in createPost");
        }
        const newPost = await post.create({ user, caption, image });
        return newPost;
    } catch (error) {
        console.error(`Error in createPost: ${error.message}`);
        throw error;
    }
}

// Find all posts
export async function findAllPost(limit = 10, offset = 0) {
    try {
        if (typeof limit !== 'number' || typeof offset !== 'number') {
            throw new Error("Invalid pagination parameters");
        }
        const posts = await post
            .find()
            .sort({ createdAt: -1 })
            .skip(offset)
            .limit(limit)
            .populate('user', 'username email id');
        return posts;
    } catch (error) {
        console.error(`Error in findAllPost: ${error.message}`);
        throw error;
    }
}

// Find all users
export async function findAllUser() {
    try {
        const users = await user.find().sort({ createdAt: -1 });
        return users;
    } catch (error) {
        console.error(`Error in findAllUser: ${error.message}`);
        throw error;
    }
}

// Count all posts
export async function countAllPost() {
    try {
        const count = await post.countDocuments();
        return count;
    } catch (error) {
        console.error(`Error in countAllPost: ${error.message}`);
        throw error;
    }
}

// Delete post by ID
export async function deletePostById(id) {
    try {
        if (!id) throw new Error("Missing post ID");
        const deletedPost = await post.findByIdAndDelete(id);
        return deletedPost;
    } catch (error) {
        console.error(`Error in deletePostById: ${error.message}`);
        throw error;
    }
}

// Update post by ID
export async function updatePostById(id, updateObject) {
    try {
        if (!id || !updateObject) throw new Error("Missing parameters in updatePostById");
        const updatedPost = await post.findByIdAndUpdate(id, updateObject, { new: true });
        return updatedPost;
    } catch (error) {
        console.error(`Error in updatePostById: ${error.message}`);
        throw error;
    }
}

// Find post by ID
export async function findPostById(id) {
    try {
        if (!id) throw new Error("Missing post ID");
        const postById = await post.findById(id).populate('user', 'username email id', 'comment');
        return postById;
    } catch (error) {
        console.error(`Error in findPostById: ${error.message}`);
        throw error;
    }
}

// ** New Method: Find user profile and posts **
export async function findUserProfile(email) {
    try {
        if (!email) throw new Error("Missing user ID");
        
        // Fetch user details
        const userDetails = await user.findById(email).select("username email avatar");

        if (!userDetails) throw new Error("User not found");

        // Fetch posts created by the user
        const userPosts = await post
            .find({ user: email, isDeleted: false })
            .populate("user", "username email")
            .select("caption image likes comments likeCount commentCount createdAt");

        return { userDetails, userPosts };
    } catch (error) {
        console.error(`Error in findUserProfile: ${error.message}`);
        throw error;
    }
}
