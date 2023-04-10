import express from "express";
import multer from "multer";
import { prisma } from "../../db/index.js";
import { fileUpload } from "../../utils/uploadFile.js";
const upload = multer();

const router = express.Router();

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

export default router;
