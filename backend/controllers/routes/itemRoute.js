import express from "express";
import { prisma } from "../../db/index.js";
import passport from "passport";
import { fileUpload } from "../../utils/uploadFile.js";
import multer from "multer";

const upload = multer();
const router = express.Router();

// get all item

const option = {
  session: false,
};

router.get("/items", async (_req, res) => {
  try {
    const items = await prisma.item.findMany();

    if (items) {
      res.status(200).json({
        success: true,
        data: items,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

// create an item
//store/:id/items:
router.post(
  "/stores/:id/item",
  passport.authenticate("jwt", option),
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

// deleting an item
router.delete(
  "/stores/:storeId/items/:itemId",
  passport.authenticate("jwt", option),
  async (req, res) => {
    try {
      const store = await prisma.store.findFirst({
        where: {
          id: req.params.storeId,
        },
      });

      if (store) {
        const storeUserId = store.userId;
      }

      try {
        if (req.user.id === storeUserId) {
          const deletedItem = await prisma.item.delete({
            where: {
              id: req.params.itemId,
            },
          });

          if (deletedItem) {
            res.status(200).json({
              success: true,
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
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  }
);

// update items route
router.put(
  "/stores/:storeId/items/:itemId",
  passport.authenticate("jwt", option),
  async (req, res) => {
    try {
      const store = await prisma.store.findFirst({
        where: {
          id: req.params.itemId,
        },
      });

      if (store) {
        try {
          if (store.userId === req.user.id) {
            const updateItem = await prisma.item.update({
              where: {
                id: req.params.itemId,
              },
              data: {
                ...req.body,
              },
            });

            if (updateItem) {
              res.status(200).json({
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
        res.status(404).json({
          success: false,
          message: "UNAUTHORIZE",
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

export default router;
