import Post from "../Schema/postSchema";

export async function createpost( image, caption, user) {
    try {
        const newpost = await Post.create({ image, caption, user });
    return create;
    } catch (error) {
        console.log(`there is error in create post ${error}`)
    }
}

export async function findallpost() {
    try {
        const post = await Post.find();
        return post;
    } catch (error) {
        console.log(`there is error in findallpost ${error}`)
    }
}

export async function findpostbyid(id) {
    try {
        const post = await Post.findById(id);
        return post;
    } catch (error) {
        console.log(`there is error in findpostbyid ${error}`)
    }
}