import express from "express";
import { prisma } from "../../db/index.js";
import passport from "passport";
import { fileUpload } from "../../utils/uploadFile.js";
import multer from "multer";
import _ from 'lodash'

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

// create an all items from a store
router.get("/store/:storeId/items", async (req, res) => {
  try {
    let itemGroup = null
    if(req.query.group ==='true'){

      itemGroup = await prisma.item.groupBy({
        by:['category'],
        
      })

      
      
    }
    const items = await prisma.item.findMany({
      where:{
        storeId:req.params.storeId
      },
      include:{
        store:true,
       
      }
    });


    let data = _.chain(items).groupBy("category").map((value, key) => ({ category: key, stores: value }))
    .value()

    if (items) {
     
      res.status(200).json({
        success: true,
        data,
     
      
      });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

//store/:id/items:
router.post(
  "/stores/:id/items",
  passport.authenticate("jwt", option),
  upload.single("image"),
  async (req, res) => {
    try {
      // creating an items
      const store = await prisma.store.findFirst({
        where: {
          id: req.params.id,
        },
      });
      if (store) {
        if (store.userId === req.user.id) {
          console.log(store.id);
          const storeItem = await prisma.item.create({
            data: {
              ...req.body,
              storeId: store.id,
              price: parseInt(req.body.price),
              isActive: req.body.isActive == "true" ? true : null,
            },
          });

          const itemPhoto = req.file;

          if (itemPhoto) {
            try {
              const uploadFile = await fileUpload(req.file);

              if (uploadFile) {
                const itemImageUpdate = await prisma.item.update({
                  where: {
                    id: storeItem.id,
                  },
                  data: {
                    imageUrl: uploadFile.url,
                  },
                });

                if (itemImageUpdate) {
                  res.status(201).json({
                    success: true,
                  });
                }
              }
            } catch (error) {
              console.log(error);
              res.status(500).json({
                success: false,
                message: "something went wrong",
              });
            }
          }
        } else {
          res.status(401).json({
            success: false,
            message: "UNAUTHORIZED",
          });
        }
      }
    } catch (error) {
      console.log(error);
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
