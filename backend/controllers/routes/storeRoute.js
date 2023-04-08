import express from "express";
import multer from "multer";
import {prisma } from '../../db/index.js'
import { fileUpload } from "../../utils/uploadFile.js";
const upload = multer();

const router = express.Router();

router.get("/", upload.single('image'), async (req, res) => {

    try {
        
        const file = await fileUpload(req.file)
        console.log(file)
    } catch (error) {
        console.log(error)
    }

    // try {
    //     if(Object.keys(req.query)===0){

    //         try {
    //             const getStore = await prisma.store.findMany()

    //             if(getStore){
    //                 res.status(200).json({
    //                     success: true,
    //                     data: getStore
    //                 })
    //             }
    //         } catch (error) {
    //             console.log(error)
    //             res.status(500).json({
    //                 success:false,
    //                 message: "something went wrong"
    //             })
    //         }
    //     }


    // } catch (error) {
    //     console.log(error)
    //     res.status(500).json({
    //                 success:false,
    //                 message: "something went wrong"
    //             })
    // }
  

});

export default router;
