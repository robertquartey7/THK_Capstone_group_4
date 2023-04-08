import storage from 'cloudinary'

export const cloudinary = storage.v2


cloudinary.config({
    api_key: process.env.CLOUDINARY_ID,
    api_secret: process.env.CLOUDINARY_SECRET,
    cloud_name: process.env.CLOUD_NAME
})