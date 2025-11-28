const express = require("express");
const getFoods = require("../controllers/food/getFood");
const deleteFood = require("../controllers/food/deleteFood");
const updateFood = require("../controllers/food/updateFood");
const createFood = require("../controllers/food/CreateFood");

const foodRouter = express.Router();

foodRouter.post("/", createFood);
foodRouter.put("/", updateFood);
foodRouter.get("/", getFoods);
foodRouter.delete("/:id", deleteFood);

module.exports = foodRouter;
