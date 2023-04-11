import express from "express";
import multer from "multer";
<<<<<<< Updated upstream
import { restart } from "nodemon";
import { prisma } from "../../db/index.js";
=======
import {prisma } from '../../db/index.js'
>>>>>>> Stashed changes
import { fileUpload } from "../../utils/uploadFile.js";
const upload = multer();

const router = express.Router();
<<<<<<< Updated upstream
// get all store

router.get("/", async (req, res) => {
  try {
    // return all the stores in our database.

    if (Object.keys(req.query).length === 0) {
      console.log("first");

      try {
        const getStore = await prisma.store.findMany();

        if (getStore) {
          res.status(200).json({
            success: true,
            data: getStore,
          });
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({
          success: false,
          message: "something went wrong",
        });
      }
    }

    // search base of checking for location

    // search base of store name
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
});


// get one store

router.get("/:storeId",async (req, res)=>{
  try{ 
    const store = await prisma.store.findFirst({
      where:{
        id: req.params.storeId
      }
    })

    if(store){
      res.status(200).json({
        success: true,
        data: store
      })
    }else{
      res.status(404).json({
        success:false,
        message: "Not Found!"
      })
    }
  }catch(err){
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
})
=======

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
>>>>>>> Stashed changes


    // } catch (error) {
    //     console.log(error)
    //     res.status(500).json({
    //                 success:false,
    //                 message: "something went wrong"
    //             })
    // }
  

});

export default router;
