import express from "express";
import { prisma } from "../../db/index.js";


export default function setupJWTStrategy(passport) {

const router = express.Router();

router.delete("/store/:id/items:",  passport.authenticate("jwt", {session: false}), async (request, response) => {
  
  const todo = request.params.todo;
    try {

    if(req.user.role === "OWNER"){
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
    }else{
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
  });

  router.put("/store/:id/items:", async (request, response) => {
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

  return router;
}


