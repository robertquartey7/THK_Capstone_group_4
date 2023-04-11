
import express from "express"
import { prisma } from "../../db/index.js";

export default function storeRouter(passport){
    const router = express.Router();

    router.post("/stores/:id", async (req, res) => {
        try {
          const store = await prisma.store.findFirst({
            where: {
              id: req.params.id,
            },
          });
      
          if (store.userId === req.user.id) {
            try {
              const createStore = await prisma.store.create({
                where: {
                  id: req.params.id,
                },
                data: {
                  ...req.body,
                },
              });
      
              if (createStore) {
                res.status(200).json({
                  success: true,
                });
              }
            } catch (error) {
              res.status(500).json({
                success: false,
                message: "something went wrong",
              });
            }
          } else {
            res.status(401).json({
              success: true,
              message: "UNAUTHORIZE",
            });
          }
        } catch (error) {
          res.status(500).json({
            success: false,
            message: "something went wrong",
          });
        }
      });
router.delete("/stores/:id", async (req, res) => {
    try {
      const store = await prisma.store.findFirst({
        where: {
          id: req.params.id,
        },
      });
  
      if (store.userId === req.user.id) {
        try {
          const deleteStore = await prisma.store.delete({
            where: {
              id: req.params.id,
            },
            data: {
              ...req.body,
            },
          });
  
          if (deleteStore) {
            res.status(200).json({
              success: true,
            });
          }
        } catch (error) {
          res.status(500).json({
            success: false,
            message: "something went wrong",
          });
        }
      } else {
        res.status(401).json({
          success: true,
          message: "UNAUTHORIZE",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "something went wrong",
      });
    }
  });
}