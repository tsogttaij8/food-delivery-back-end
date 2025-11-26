const express = require("express");
const { upload } = require("../middleWare/upload");
const createFood = require("../controllers/food/CreateFood");
const getFoods = require("../controllers/food/getFood");

const foodRouter = express.Router();

foodRouter.post("/", upload.single("foodImage"), createFood);
foodRouter.get("/", getFoods);

module.exports = foodRouter;
