

import express from "express";
import multer from "multer";

import { prisma } from "../../db/index.js";

import { fileUpload } from "../../utils/uploadFile.js";
const upload = multer();

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

router.put("/stores/:id", async (req, res) => {
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


export default router;

