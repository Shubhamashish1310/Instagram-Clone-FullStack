import {
    countAllPost,
    createPost,
    deletePostById,
    findAllPost,
    findAllUser,
    findPostById,
    findUserProfile,
    updatePostById,
} from "../Repository/postRepository.js";
import User from "../Schema/user.js";

export const createPostService = async (createPostObject) => {
    try {
        const user = createPostObject.user;
        const caption = createPostObject.caption?.trim();
        const image = createPostObject.image;

        if (!user || !caption || !image) {
            throw new Error("Missing required fields");
        }

        const post = await createPost(user, caption, image);
        return post;
    } catch (error) {
        console.error(`Error in createPostService: ${error.message}`);
        throw error;
    }
};

export const findAllPostService = async (limit = 10, offset = 0) => {
    try {
        if (limit < 1 || offset < 0) {
            throw new Error("Invalid pagination parameters");
        }

        const posts = await findAllPost(limit, offset);
        const totalDocuments = await countAllPost();
        const totalPages = Math.ceil(totalDocuments / limit);
        const currentPage = Math.ceil(offset / limit) + 1;

        return { posts, totalPages, totalDocuments, currentPage };
    } catch (error) {
        console.error(`Error in findAllPostService: ${error.message}`);
        throw error;
    }
};

export const findAllUserService = async () => {
    try {
        const users = await findAllUser();
        return users;
    } catch (error) {
        console.error(`Error in findAllUserService: ${error.message}`);
        throw error;
    }
};

export const deletePostService = async (id, user) => {
    try {
        const post = await findPostById(id);
        if (!post) throw new Error("Post not found");
        if (String(post.user._id.toString()) !== String(user)) {
            console.log("user", user);
            console.log("post user", post.user._id.toString());
            throw {
                status: 401,
                message: "Unauthorized: User does not have permission to delete this post",
            };
        }

        const response = await deletePostById(id);
        return response;
    } catch (error) {
        console.error(`Error in deletePostService: ${error.message}`);
        throw error;
    }
};

export async function updatePostService(id, updateObject) {
    try {
        if (!updateObject || Object.keys(updateObject).length === 0) {
            throw new Error("Update object is empty");
        }

        const response = await updatePostById(id, updateObject);
        if (!response) throw new Error("Post not found for update");
        return response;
    } catch (error) {
        console.error(`Error in updatePostService: ${error.message}`);
        throw error;
    }
}

// ** New Service: Find User Profile **
export const findUserProfileService = async (email) => {
    try {
        if (!email) {
            throw new Error("email is required");
        }

        const profileData = await findUserProfile(email);
        if (!profileData) {
            throw new Error("Profile not found");
        }

        return profileData;
    } catch (error) {
        console.error(`Error in findUserProfileService: ${error.message}`);
        throw error;
    }
};
