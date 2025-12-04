const express = require("express");
const getUser = require("../controllers/user/getUserById");
const deleteUser = require("../controllers/user/deleteUser");
const createUser = require("../controllers/user/CreateUser");
const loginUser = require("../controllers/authentication/loginUser");
const verifyJwt = require("../middleWare/verifyJWT");
const { generateToken } = require("../middleWare/generateToken");

const userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.delete("/", deleteUser);
userRouter.post("/", createUser);
userRouter.post("/login", loginUser);

module.exports = userRouter;
