import multer from "multer";
import { v2 as cloudinary } from 'cloudinary';
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, Cloudinary_CLOUD_NAME } from "./serverConfig.js";

const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });

cloudinary.config({
    cloud_name: Cloudinary_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
});

export const cloudinaryUpload = async (req, res, next) => {
    try {
        if (!req.file) {
            return next();
        }
        const uploadStream = cloudinary.uploader.upload_stream(
            { folder: 'uploads' }, // Optional Cloudinary folder
            (error, result) => {
                if (error) {
                    return res.status(500).json({ error: 'Cloudinary upload failed' });
                }
                req.file.cloudinaryUrl = result.secure_url; // Attach the URL to req.file
                next(); // Continue to the next middleware (postscontroller)
            }
        );

        uploadStream.end(req.file.buffer);
    } catch (error) {
        console.error('Error in Cloudinary upload:', error);
        res.status(500).json({ error: 'Server error during Cloudinary upload' });
    }
};
