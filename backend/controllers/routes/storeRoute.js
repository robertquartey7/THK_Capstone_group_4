import dotenv from "dotenv";
dotenv.config();
import express from "express";

const router = express.Router();


router.get("/",  (req, res) => {
  console.log("hi");
  console.log(req.headers["content-type"]);
  console.log(req.body);

  res.status(200).json({
    success: true,
  });
});






export default router;
