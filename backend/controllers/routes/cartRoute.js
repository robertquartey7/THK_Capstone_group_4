import express from "express";
import { prisma } from "../../db/index.js";
const router = express.Router();

router.get("/cart", async (req, res) => {
  try {
    const cart = await prisma.cart.findMany({});
  } catch (error) {
    console.log(error)
  }
});
router.post("/cart", async (req, res) => {
  try {
   
  } catch (error) {}
});

export default router;
