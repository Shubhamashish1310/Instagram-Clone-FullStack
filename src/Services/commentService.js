import { findPostById } from "../Repository/postRepository.js";
import { createComment, findCommentById } from "../Repository/commentRepository.js";

export const createCommentService = async (content, userId, onModel, commentableId) => {
    try {
        let parent = await fetchCommentParent(onModel, commentableId);
        if(!parent) {
            throw {
                message: `${onModel} not found`,
                status: 404
            }
        }

        const newComment = await createComment(content, userId, onModel, commentableId);

        await addChildCommentToParent(onModel, newComment, parent, content);

        return newComment;
            
    } catch(error) {
        console.log(error);
    }

}

export const findCommentByIdService = async (id) => {
    try {
        const comment = await findCommentById(id);
        if(!comment) {
            throw {
                message: "Comment not found",
                status: 404
            }
        }
        return comment;
    } catch(error) {
        console.log(error);
    }
}

const addChildCommentToParent = async (onModel, comment, parent, content) => {
    try {
        if(onModel === "Post") {
            parent.comments.push(comment._id);
          
        } else if(onModel === "Comment") {
            parent.replies.push(comment._id);
        }
        await parent.save();
    } catch(error) {
        console.log(error);
    }
}

const fetchCommentParent = async (onModel, commentableId) => {
    try {
        let parent;
        if (onModel === "Post") {
            parent = await findPostById(commentableId);
        } else if (onModel === "Comment") {
            parent = await findCommentById(commentableId);
        }
        return parent;
    } catch(error) {
        console.log(error);
    }
}