import { countAllPost, createPost, deletePostById, findAllPost, findPostById, updatePostById } from "../Repository/postRepository.js";

export const createPostService = async (createPostObejct) => {
    const user = createPostObejct.user;
    const caption = createPostObejct.caption?.trim();
    const image = createPostObejct.image;
   
    // const user = createPostObejct.user; //later

    const post = await createPost( user,caption,image);

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

export const deletePostService = async (id, user) => {

    const  post = await findPostById(id);
    if(post.user != user){
        console.log("Unauthorized not match");
        throw{

            status: 401,
            message: "Unauthorized"
        }
    }
    const response = await deletePostById(id);
    return response;
}

export async function updatePostService(id,updateObject){
    const response = await updatePostById(id,updateObject);
    return response;
}