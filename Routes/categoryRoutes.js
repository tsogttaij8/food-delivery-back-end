const express = require("express");
const getCategories = require("../controllers/Category/getCategories");
const verifyJwt = require("../middleWare/verifyJWT");
const createCategory = require("../controllers/category/createCategory");
const deleteCategory = require("../controllers/category/deleteCategory");

const categoryRouter = express.Router();

categoryRouter.post("/", verifyJwt, createCategory);
categoryRouter.get("/", getCategories);
categoryRouter.delete("/:id", deleteCategory);

module.exports = categoryRouter;
