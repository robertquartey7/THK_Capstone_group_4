import express from "express";
import morgan from "morgan";
import cors from "cors";
import setupJWTStrategy from "./auth/index.js";

import userRoute from "./controllers/routes/userRoute.js";
import storeRoute from "./controllers/routes/storeRoute.js";
import itemRoute from "./controllers/routes/itemRoute.js";
import passport from "passport";

export const app = express();

// configurations
app.use(express.json());
app.use(cors());

setupJWTStrategy(passport);

app.use("/", morgan("tiny"));

// routes
app.use("/auth", userRoute);
app.use("/store", storeRoute);
app.use("/items", itemRoute);

app.get("/", (req, res) => {
  console.log("successfully");
  res.status(200).json({
    success: true,
    message: "successfully",
  });
});
