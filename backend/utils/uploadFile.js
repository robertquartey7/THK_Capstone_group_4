import { cloudinary } from "../storageConfig.js"
import streamifier from 'streamifier'


export const fileUpload = async (file)=>{


    let cld_upload_stream = cloudinary.uploader.upload_stream(
        {
          folder: "dev",

        },
        function(error, result) {
            console.log(error, result);
        }
    );
    
    let data = streamifier.createReadStream(file.buffer).pipe(cld_upload_stream);
    

}