import dotenv from 'dotenv';

dotenv.config();
//db
export const DB_URL = process.env.DB_URL;

//cloudinary
export const CLOUDINARY_API_KEY = process.env.CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = process.env.CLOUDINARY_API_SECRET;
export const Cloudinary_CLOUD_NAME = process.env.CLOUDINARY_CLOUD_NAME;


//jwt
export const JWT_SECRET = process.env.JWT_SECRET;