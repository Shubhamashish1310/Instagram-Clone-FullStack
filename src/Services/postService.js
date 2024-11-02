import { createPost } from "../Repository/postRepository.js";

export const createPostService = async (createPostObejct) => {
    const caption = createPostObejct.caption?.trim();
    const image = createPostObejct.image;
    // const user = createPostObejct.user; //later

    const post = await createPost( image,caption);

    return post;
}