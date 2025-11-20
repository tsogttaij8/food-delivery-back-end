const express = require("express");
const createUser = require("../controllers/user/CreateUser");
const loginUser = require("../controllers/authentication/loginUser");
const isUserExist = require("../middleWare/isUserExist");
const EmailExist = require("../middleWare/emailExist");

const AuthenticationRouter = express.Router();

AuthenticationRouter.get("/login", isUserExist, loginUser);
AuthenticationRouter.post("/Sign-Up", EmailExist, createUser);

module.exports = AuthenticationRouter;
