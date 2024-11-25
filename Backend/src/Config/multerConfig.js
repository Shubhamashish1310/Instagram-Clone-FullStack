import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, Cloudinary_CLOUD_NAME } from "./serverConfig.js";

// Configure Cloudinary
cloudinary.config({
    cloud_name: Cloudinary_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
});

// Multer configuration
const storage = multer.memoryStorage();

export const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const allowedMimeTypes = ["image/jpeg", "image/png", "image/gif", "video/mp4", "video/avi"];
        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true); // Accept the file
        } else {
            cb(new Error("Invalid file type. Only images and videos are allowed.")); // Reject the file
        }
    },
});

// Middleware for Cloudinary upload
export const cloudinaryUpload = async (req, res, next) => {
    try {
        if (!req.file) {
            return next(); // If no file is uploaded, continue to the next middleware
        }

        // Check if the uploaded file is a video or image
        const isVideo = req.file.mimetype.startsWith("video/");
        const resourceType = isVideo ? "video" : "image";

        // Upload to Cloudinary
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder: "uploads", // Optional Cloudinary folder for organization
                resource_type: resourceType, // Dynamically set as 'image' or 'video'
            },
            (error, result) => {
                if (error) {
                    console.error("Error during Cloudinary upload:", error);
                    return res.status(500).json({ error: "Cloudinary upload failed" });
                }
                req.file.cloudinaryUrl = result.secure_url; // Attach the Cloudinary URL to req.file
                next(); // Continue to the next middleware (e.g., postsController)
            }
        );

        uploadStream.end(req.file.buffer); // Send file buffer to Cloudinary
    } catch (error) {
        console.error("Error in Cloudinary upload middleware:", error);
        res.status(500).json({ error: "Server error during file upload" });
    }
};
