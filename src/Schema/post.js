import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        caption: {
            type: String,
            required: true,
            minLength: 5,
            maxLength: 300, // Optional max length
        },
        image: {
            type: String,
            required: true,
            validate: {
                validator: function (url) {
                    return /^(http|https):\/\/[^\s$.?#].[^\s]*$/gm.test(url);
                },
                message: "Invalid image URL",
            },
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Comment",
            },
        ],
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Like",
            },
        ],
        tags: [
            {
                type: String,
                trim: true,
            },
        ],
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

// Virtual fields
postSchema.virtual("likeCount").get(function () {
    return this.likes.length;
});

postSchema.virtual("commentCount").get(function () {
    return this.comments.length;
});

// Include virtuals in output
postSchema.set("toObject", { virtuals: true });
postSchema.set("toJSON", { virtuals: true });

// Indexes for performance
postSchema.index({ user: 1 });
postSchema.index({ createdAt: -1 });

const Post = mongoose.model("Post", postSchema); // post collection

export default Post;
