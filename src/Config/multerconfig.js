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
            return res.status(400).json({ error: 'No file provided' });
        }

        const result = await cloudinary.uploader.upload_stream(
            { folder: 'uploads' }, // optional Cloudinary folder
            (error, result) => {
                if (error) {
                    return res.status(500).json({ error: 'Cloudinary upload failed' });
                }
                req.file.cloudinaryUrl = result.secure_url; // Attach the URL to req.file
                next(); // Continue to the next middleware (postscontroller)
            }
        );

        // Initiate the upload
        result.end(req.file.buffer);
    } catch (error) {
        console.error('Error in cloudinaryUpload:', error);
        res.status(500).json({ error: 'Failed to upload image' });
    }
};

