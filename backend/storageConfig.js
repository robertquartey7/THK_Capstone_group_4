import dotenv from "dotenv";
dotenv.config();
import storage from "cloudinary";

export const cloudinary = storage.v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUDINARY_ID,
  api_secret: process.env.CLOUDINARY_SECRET,
});

