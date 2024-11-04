import { countAllPost, createPost, deletePostById, findAllPost, updatePostById } from "../Repository/postRepository.js";

export const createPostService = async (createPostObejct) => {
    const caption = createPostObejct.caption?.trim();
    const image = createPostObejct.image;
    // const user = createPostObejct.user; //later

    const post = await createPost( image,caption);

    return post;
}

export const findAllPostService = async (limit,offset) => {
    const posts = await findAllPost(limit,offset);
    
    //calculate total pages and and total posts
    const totaldocuments = await countAllPost();
    const totalpages = Math.ceil(totaldocuments / limit);
    const currentpage = Math.ceil(offset / limit) + 1;
    return {posts, totalpages, totaldocuments, currentpage};
}

export const deletePostService = async (id) => {
    const response = await deletePostById(id);
    return response;
}

export async function updatePostService(id,updateObject){
    const response = await updatePostById(id,updateObject);
    return response;
}