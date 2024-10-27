import express from 'express';
import { connectDB } from './Config/dbconfig.js';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary'; // Corrected Cloudinary import
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();
const port = 3000;

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dd0topxow",
    api_key: process.env.CLOUDINARY_API_KEY || "164726986941791",
    api_secret: process.env.CLOUDINARY_API_SECRET || "UCcigLPcnJqWyToX_GfIXlA4yA4",
});

// Middleware functions
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
    next();
}

// Multer setup for handling file uploads
const storage = multer.memoryStorage(); // Store image in memory
const upload = multer({ storage: storage });

// Apply middleware
app.use(m1, m2, m3);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());

// Sample route for testing
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Test route to view query and body data
app.get('/test', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.json({
        name: 'test',
        age: 18,
        sex: 'male',
        address: 'beijing',
        hobby: ['a', 'b', 'c'],
        info: {
            name: 'test',
            age: 18
        }
    });
});

// Image upload route
app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        // Create a Cloudinary stream and upload the file from buffer
        const uploadStream = cloudinary.uploader.upload_stream(
            { folder: 'uploads' },
            (error, result) => {
                if (error) {
                    console.error('Cloudinary Upload Error:', error);
                    return res.status(500).json({ error: 'Error uploading image' });
                }
                // Return the uploaded image URL in the response
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

// Start the server and connect to the database
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    connectDB();
});
