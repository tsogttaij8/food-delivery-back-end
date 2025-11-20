const express = require("express");
const createCategory = require("../controllers/foodCategory/createCategory");
const categoryRouter = express.Router();

categoryRouter.post("/add-category", createCategory);

module.exports = categoryRouter;
