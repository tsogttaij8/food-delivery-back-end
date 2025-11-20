const express = require("express");
const getUser = require("../controllers/user/getUserById");
const deleteUser = require("../controllers/user/deleteUser");
const createUser = require("../controllers/user/CreateUser");

const userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.delete("/", deleteUser);
userRouter.post("/", createUser);

module.exports = userRouter;
