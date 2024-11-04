import post from "../Schema/post.js";


//create post
export async function createPost( image, caption) {
    try {
        const newpost = await post.create({ image, caption });
    return newpost;
    } catch (error) {
        console.log(`there is error in create post ${error}`)
    }
}

//-----------------------------------------------------------------Find all post---------------------------------------------------------------
export async function findAllPost(limit,offset) {
    try {
        const posts = await post.find().sort({ createdAt: -1 }).skip(offset).limit(limit);
        return posts;
    } catch (error) {
        console.log(`there is error in find post ${error}`)
    }
}

//---------------------------------------------------------------Count all post---------------------------------------------------------------
export async function countAllPost(){
    try {
        const count = await post.countDocuments();
        return count;
    } catch (error) {
        console.log(`there is error in count post ${error}`)
    }
}


//---------------------------------------------------------------Delete post---------------------------------------------------------------
export async function deletePostById(id) {
    try {
        const posts = await post.findByIdAndDelete(id);
        return posts;
    } catch (error) {
        console.log(`there is error in delete post ${error}`)
    }
}

