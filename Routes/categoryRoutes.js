const express = require("express");
const getCategories = require("../controllers/Category/getCategories");
const createCategory = require("../controllers/Category/createCategory");
const verifyJwt = require("../middleWare/verifyJWT");

const categoryRouter = express.Router();

categoryRouter.post("/", verifyJwt, createCategory);
categoryRouter.get("/", getCategories);

module.exports = categoryRouter;
