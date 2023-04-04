import { cloudinary } from "../storageConfig.js";

export const fileUpload = async (file) => {
  try {
    const upload = await cloudinary.uploader.upload(file, {
      upload_preset: "dev_setup",
    });
    
    console.log(upload)
    if (upload) {
      return {
        succes: true,
        data: upload,
      };
    }
  } catch (error) {
    console.log(error);
  }
};
