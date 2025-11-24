const express = require("express");
const createCategory = require("../controllers/foodCategory/createCategory");
const getCategories = require("../controllers/foodCategory/getCategories");
const categoryRouter = express.Router();

categoryRouter.post("/add-category", createCategory);
categoryRouter.get("/get-categories", getCategories);

module.exports = categoryRouter;
