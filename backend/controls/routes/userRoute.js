import express from "express";

const router = express.Router();
// login route

router.get("/", (req, res) => {

  res.status(200).json({
    success: true,
    message: "hi",
  });

});



//signup route



//getuser








export default router;
