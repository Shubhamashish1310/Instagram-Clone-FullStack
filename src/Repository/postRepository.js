import post from "../Schema/post.js";


//create post
export async function createPost(user,caption, image ) {
    try {
        const newpost = await post.create({ user, caption, image });
    return newpost;
    } catch (error) {
        console.log(`there is error in create post ${error}`)
    }
}

//-----------------------------------------------------------------Find all post---------------------------------------------------------------
export async function findAllPost(limit,offset) {
    try {
        const posts = await post.find().sort({ createdAt: -1 }).skip(offset).limit(limit).populate('user', 'username email id');
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

//---------------------------------------------------------------Update post---------------------------------------------------------------
//Model.findByIdAndUpdate(id, { name: 'jason bourne' }, options)
//A.findByIdAndUpdate(id, update, options)
export async function updatePostById(id , updateObject) {
    try {
        const posts = await post.findByIdAndUpdate(id,updateObject , {new: true});
        return posts;
    } catch (error) {
        console.log(`there is error in update post ${error}`)
    }
}

//---------------------------------------------------------------Find post by id---------------------------------------------------------------
export async function findPostById(id) {
    try {
        const posts = await post.findById(id)
        return posts;
    } catch (error) {
        console.log(`there is error in find post by id ${error}`)
    }
}
