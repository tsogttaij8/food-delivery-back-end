const express = require("express");
const getFoods = require("../controllers/food/getFood");
const deleteFood = require("../controllers/food/deleteFood");
const updateFood = require("../controllers/food/updateFood");
const createFood = require("../controllers/food/CreateFood");
const getFoodsByIds = require("../controllers/food/getFoodsByIds");
const verifyJwt = require("../middleWare/verifyJWT");

const foodRouter = express.Router();

foodRouter.post("/", verifyJwt, createFood);
foodRouter.put("/", verifyJwt, updateFood);
foodRouter.get("/", getFoods);
foodRouter.delete("/:id", verifyJwt, deleteFood);

foodRouter.post("/get-by-ids", getFoodsByIds);

module.exports = foodRouter;
