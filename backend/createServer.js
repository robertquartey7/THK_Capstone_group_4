import express from "express";
import morgan from "morgan";
import cors from "cors";

import userRoute from "./controllers/routes/userRoute.js";

export const app = express();

// configurations
app.use(express.json());
app.use(cors());
app.use("/", morgan("tiny"));

// routes
app.use("/auth", userRoute);

app.get("/", (req, res) => {
  console.log("successfully");
  res.status(200).json({
    success: true,
    message: "successfully",
  });
});
