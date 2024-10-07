import dotenv from 'dotenv';
dotenv.config();

import cloudinary from 'cloudinary';
const { v2: cloudinaryV2 } = cloudinary;

import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Use cloudinaryV2 for configuration
cloudinaryV2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinaryV2, // Use cloudinaryV2 here
    params: {
        folder: 'twitter_DEV',
        allowed_formats: ["png", "jpg", "jpeg"], // This property is lowercase
    },
});

export { cloudinaryV2 as cloudinary, storage }; // Export cloudinaryV2 as cloudinary
