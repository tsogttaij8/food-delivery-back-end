const express = require("express");
const createFood = require("../controllers/food/CreateFood");
const getFoods = require("../controllers/food/getFood");
const foodRouter = express.Router();

foodRouter.post("/", createFood);
foodRouter.get("/", getFoods);

module.exports = foodRouter;
