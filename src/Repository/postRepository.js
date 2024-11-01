import post from "../Schema/post.js";



export async function createPost( image, caption) {
    try {
        const newpost = await post.create({ image, caption });
    return newpost;
    } catch (error) {
        console.log(`there is error in create post ${error}`)
    }
}

