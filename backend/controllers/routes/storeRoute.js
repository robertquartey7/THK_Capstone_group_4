import express from "express";
import multer from "multer";
import passport from "passport";
import { prisma } from "../../db/index.js";

import { fileUpload } from "../../utils/uploadFile.js";
const upload = multer();

const router = express.Router();

const options = {
  session: false,
};
// creating
router.post(
  "/stores",
  upload.single("image"),
  passport.authenticate("jwt", options),
  async (req, res) => {
    try {
      const userStore = await prisma.store.findFirst({
        where: {
          userId: req.user.id,
        },
      });

      if (userStore) {
        res.status(409).json({
          success: false,
          message: "User already has a store",
        });
      } else {
        console.log(req.user.id);
        const createStore = await prisma.store.create({
          data: {
            ...req.body,
            userId: req.user.id,
          },
        });

        const storePhoto = req.file;
        if (storePhoto) {
          try {
            const uploadFile = await fileUpload(req.file);

            if (uploadFile) {
              const storeImageUpdate = await prisma.store.update({
                where: {
                  id: createStore.id,
                },
                data: {
                  imageURL: uploadFile.url,
                },
              });

              if (storeImageUpdate) {
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
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "something went wrong",
      });
    }
  }
);

// router.post("/stores/:id", upload.single('image'),async (req, res) => {

//     try {

//           const store = await prisma.store.findFirst({
//             where: {
//               id: req.params.id,
//             },
//           });

//           if (store.userId === req.user.id) {
//             try {
//               const createStore = await prisma.store.create({
//                 where: {
//                   id: req.params.id,
//                 },
//                 data: {
//                   ...req.body,
//                 },
//               });

//               if (createStore) {
//                 res.status(200).json({
//                   success: true,
//                 });
//               }
//             } catch (error) {
//               res.status(500).json({
//                 success: false,
//                 message: "something went wrong",
//               });
//             }
//           } else {
//             res.status(401).json({
//               success: true,
//               message: "UNAUTHORIZE",
//             });
//           }
//         } catch (error) {
//           res.status(500).json({
//             success: false,
//             message: "something went wrong",
//           });
//         }
//       });

router.delete(
  "/stores/:id",
  passport.authenticate("jwt", options),
  async (req, res) => {
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
          });

          if (deleteStore) {
            res.status(200).json({
              success: true,
            });
          } else {
            res.status(404).json({
              success: false,
              message: "Not found",
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
  }
);

// get all store
router.get("/stores", async (req, res) => {
  try {
    // return all the stores in our database.

    if (Object.keys(req.query).length === 0) {
      try {
        const getStore = await prisma.store.findMany();

        if (getStore) {
          res.status(200).json({
            success: true,
            data: getStore,
          });
        }
      } catch (error) {
        console.log(error);
        res.status(500).json({
          success: false,
          message: "something went wrong",
        });
      }
    }

    // search base of checking for location

    // search base of store name
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
});

// get one store

router.get("/stores/:storeId", async (req, res) => {
  try {
    const store = await prisma.store.findFirst({
      where: {
        id: req.params.storeId,
      },
    });

    if (store) {
      res.status(200).json({
        success: true,
        data: store,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Not Found!",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
});


// update store route
router.put(
  "/stores/:id",
  passport.authenticate("jwt", options),
  upload.single("image"),
  async (req, res) => {
    try {
      const store = await prisma.store.findFirst({
        where: {
          id: req.params.id,
        },
      });

      if (store.userId === req.user.id) {
        try {
          const updateStore = await prisma.store.update({
            where: {
              id: req.params.id,
            },
            data: {
              ...req.body,
            },
          });

          if (updateStore) {
            res.status(200).json({
              success: true,
              data: updateStore,
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
          success: false,
          message: "UNAUTHORIZE",
        });
      }
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "something went wrong",
      });
    }
  }
);

export default router;
