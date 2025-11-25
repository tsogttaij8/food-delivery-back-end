const express = require("express");
const getCategories = require("../controllers/Category/getCategories");
const createCategory = require("../controllers/Category/createCategory");

const categoryRouter = express.Router();

categoryRouter.post("/add-category", createCategory);
categoryRouter.get("/get-categories", getCategories);

module.exports = categoryRouter;
