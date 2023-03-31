import express from "express";
import userRoute from "./controls/routes/userRoute.js";

export const app = express();

app.use("/auth", userRoute);
