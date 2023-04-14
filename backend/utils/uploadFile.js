import { cloudinary } from "../storageConfig.js";
import streamifier from "streamifier";

export const fileUpload = async (file, path) => {
  return new Promise((resolve, reject) => {
    let cld_upload_stream = cloudinary.uploader.upload_stream(
      {
        folder: `dev/${path}`,
        
      },
      function (error, result) {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
    let data = streamifier
      .createReadStream(file.buffer)
      .pipe(cld_upload_stream);
  });
};


