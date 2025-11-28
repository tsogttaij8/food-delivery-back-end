const express = require("express");
const { upload } = require("../middleWare/upload");
const createFood = require("../controllers/food/CreateFood");
const getFoods = require("../controllers/food/getFood");
const updateFood = require("../controllers/food/updateFood");
const multer = require("multer");
const deleteFood = require("../controllers/food/deleteFood");

const foodRouter = express.Router();

foodRouter.post("/", upload.single("foodImage"), createFood);
foodRouter.put("/", upload.single("foodImage"), updateFood);
foodRouter.get("/", getFoods);
foodRouter.delete("/:id", deleteFood);

module.exports = foodRouter;
