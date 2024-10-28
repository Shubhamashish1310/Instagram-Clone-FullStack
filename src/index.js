import express from 'express';
import { connectDB } from './Config/dbconfig.js';

import { v2 as cloudinary } from 'cloudinary'; // Corrected Cloudinary import

import { CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, Cloudinary_CLOUD_NAME } from './Config/service.js';
import { upload } from './Config/multerconfig.js';



const app = express();
const port = 3000;

// Cloudinary configuration
cloudinary.config({
    cloud_name: Cloudinary_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET,
});

// Sample middleware for logging purposes
function m1(req, res, next) {
    console.log("m1");
    next();
}
function m2(req, res, next) {
    console.log("m2");
    next();
}
function m3(req, res, next) {
    console.log("m3");
    console.log(CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET, Cloudinary_CLOUD_NAME);
    next();
}

// Apply middleware globally
app.use(m1, m2, m3);
app.use(express.json()); // To parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded data
app.use(express.text()); // To parse plain text






// Route to handle image upload via Cloudinary
app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        // Create a Cloudinary stream and upload the file from buffer
        const uploadStream = cloudinary.uploader.upload_stream(
            { folder: 'uploads' },  // Specify folder in Cloudinary
            (error, result) => {
                if (error) {
                    console.error('Cloudinary Upload Error:', error);
                    return res.status(500).json({ error: 'Error uploading image' });
                }
                // Respond with the uploaded image URL
                res.json({ imageUrl: result.secure_url });
            }
        );

        // Write the file buffer to the Cloudinary upload stream
        uploadStream.end(req.file.buffer);

    } catch (error) {
        console.error('Server Error:', error);
        res.status(500).json({ error: 'Error uploading image to Cloudinary' });
    }
});




// Start the Express server and connect to the database
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    connectDB(); // Call your database connection function
});
