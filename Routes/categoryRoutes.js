const express = require("express");
const verifyJwt = require("../middleWare/verifyJWT");
const createCategory = require("../controllers/category/createCategory");
const deleteCategory = require("../controllers/category/deleteCategory");
const getCategories = require("../controllers/category/getCategories");

const categoryRouter = express.Router();

categoryRouter.post("/", createCategory);
categoryRouter.get("/", getCategories);
categoryRouter.delete("/:id", deleteCategory);

module.exports = categoryRouter;
