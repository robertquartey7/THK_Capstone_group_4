import express from "express";
import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { prisma } from "../../db/index.js";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

// sign up routes

router.post("/signup", async (req, res) => {
  try {
    const foundUser = await prisma.user.findFirst({
      where: {
        username: req.body.username,
      },
    });
    if (foundUser) {
      res.status(401).json({
        success: false,
        message: "User already exist",
      });
    } else {
      // hashing password
      try {
        const hashPassword = await argon2.hash(req.body.password);
        const newUser = await prisma.user.create({
          data: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            number: req.body.number,
            password: hashPassword,
            email: req.body.email,
          },
        });

        if (newUser) {
          res.status(201).json({
            success: true,
            message: "User successfully created",
          });
        } else {
          res.status(500).json({
            success: false,
            message: "User was not created. Something happened",
          });
        }
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "User was not created. Something happened",
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
});

// login routes

router.post("/login", async (req, res) => {
  try {
    const foundUser = await prisma.user.findFirst({
      where: {
        username: req.body.username,
      },
    });

    if (foundUser) {
      try {
        const verifyPassword = await argon2.verify(
          foundUser.password,
          req.body.password
        );

        if (verifyPassword === true) {
          const token = jwt.sign(
            {
              id: foundUser.id,
              username: foundUser.username,
              email: foundUser.email,
            },
            process.env.SECRET_KEY
          );

          res.status(200).json({
            success: true,
            token,
          });
        } else {
          res.status(401).json({
            success: false,
            message: "wrong username or password",
          });
        }
      } catch (error) {
        res.status(500).json({
          success: false,
          message: "something went wrong",
        });
      }
    } else {
      res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
});

// get current user
router.get("/", async (req, res) => {
  try {
    const currentUser = await prisma.user.findFirst({
      where: {
        id: req.user.id,
      },
    });

    if (currentUser) {
      res.status(200).json({
        success: true,
        data: currentUser,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
});

// deleting a user

router.delete("/", async (req, res) => {
  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: req.user.id,
      },
    });

    if (deletedUser) {
      res.status(200).json({
        success: true,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "user not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wrong",
    });
  }
});

router.put('/', async(req,res)=>{
    try{
        const updateUser = await prisma.user.update({
            where:{
                id: req.user.id,

            },
            data:{
                ...req.body
            }
        })
    }catch(error){
         
    }


})

export default router;
