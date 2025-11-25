const express = require("express");
const getCategories = require("../controllers/Category/getCategories");
const createCategory = require("../controllers/Category/createCategory");

const categoryRouter = express.Router();

categoryRouter.post("/", createCategory);
categoryRouter.get("/", getCategories);

module.exports = categoryRouter;
