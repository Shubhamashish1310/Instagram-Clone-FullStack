export async function postscontroller(req, res) {
    console.log('req.file:', req.file); // should now include `cloudinaryUrl`
    console.log('req.body:', req.body);

    // Respond with the Cloudinary URL
   res.json({ cloudinaryUrl: "image url here",
    caption: req.body.caption,});

}
