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
  "/store/:id/items:",
  passport.authenticate("jwt", { session: false }),
  async (request, response) => {
    const todo = request.params.todo;

    try {
      if (req.user.role === "OWNER") {
        const deletedItem = await prisma.todo.delete({
          where: {
            id: parseInt(todo),
          },
        });

        if (deletedItem) {
          response.status(200).json({
            success: true,
            message: "item was updated",
          });
        } else {
          response.status(404).json({
            success: false,
            message: "NOT FOUND",
          });
        }
      } else {
        response.status(401).json({
          success: false,
          message: "UNAUTHORIZED",
        });
      }
    } catch (error) {
      response.status(500).json({
        success: false,
        message: "Something went wrong",
      });
    }
  }
);

router.put("/store/:storeId/items/:itemId", async (request, response) => {
  const item = request.params.todo;
  const updatedTodo = await prisma.todo.update({
    where: {
      id: parseInt(item),
    },
    data: {
      name: request.body.name,
    },
  });

  if (updatedTodo) {
    response.status(200).json({
      success: true,
      message: "item was updated!",
    });
  } else {
    response.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

export default router;
