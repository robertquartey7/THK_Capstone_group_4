import express from "express";
import { prisma } from "../../db/index.js";
import passport from "passport";
import { fileUpload } from "../../utils/uploadFile.js";
import multer from "multer";

const upload = multer();
const router = express.Router();

// create an item
//store/:id/items:
router.post(
  "/store/:id/item",
  passport.authenticate("jwt", {
    session: false,
  }),
  upload.single("image"),
  async (req, res) => {
    try {
      // creating an items
      const store = await prisma.store.findFirst({
        where: {
          id: parseInt(req.params.id),
        },
      });
      if (storeUserId) {
        if (store.userId === req.user.id) {
          try {
            // upload the file
            const fileUploadData = await fileUpload(req.file, "items");

            if (fileUploadData) {
              const newItem = await prisma.item.create({
                data: {
                  ...req.body,
                  imageURL: fileUploadData.url,
                },
              });

              if (newItem) {
                res.status(201).json({
                  success: true,
                });
              }
            }
          } catch (error) {
            res.status(500).json({
              success: false,
              message: "Something went wrong",
            });
          }
        } else {
          res.status(401).json({
            success: false,
            message: "UNAUTHORIZED",
          });
        }
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  }
);

router.delete(
  "/store/:storeId/items/:itemId",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const item = req.params.item;

    const store = await prisma.store.findFirst({where: {
      id: parseInt(req.params.storeId),

      }
    },)
      if(store){
        const storeUserId = store.userId;
      }
    try {
      if (req.user.role === "OWNER" && req.user.id === storeUserId) {
        const deletedItem = await prisma.item.delete({
          where: {
            id: parseInt(item),
          },
        });

        if (deletedItem) {
          res.status(200).json({
            success: true,
            message: "item was updated",
          });
        } else {
          res.status(404).json({
            success: false,
            message: "NOT FOUND",
          });
        }
      } else {
        res.status(401).json({
          success: false,
          message: "UNAUTHORIZED",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  }
);

router.put("/store/:storeId/items/:itemId", async (req, res) => {
  const item = req.params.item;
  const updatedItem = await prisma.item.update({
    where: {
      id: parseInt(item),
    },
    data: {
      ...req.body
    },
  });

  if (updatedItem) {
    res.status(200).json({
      success: true,
      message: "item was updated!",
    });
  } else {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

export default router;
