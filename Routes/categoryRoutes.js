const express = require("express");
const createCategory = require("../controllers/foodCategory/createCategory");
const categoryRouter = express.Router();

categoryRouter.post("/", createCategory);

module.exports = categoryRouter;
