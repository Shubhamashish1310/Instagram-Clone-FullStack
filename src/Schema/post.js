import mongoose from "mongoose";

const postschema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    caption:{
        type:String,
        required:true,
        maxlength:200
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
},{timestamps:true});

const Post = mongoose.model("Post",postschema);

export default Post;
