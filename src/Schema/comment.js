import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        minLength: 5
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    onModel: {
        type: String,
        required: true,
        enum: ['Post', 'Comment']
    },
    commentableID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        refPath: 'onModel'
    },
    replies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],//nested reply
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like"
    }]
}, { timestamps: true });

const comment = mongoose.model("Comment", commentSchema); // comment collection

export default comment;