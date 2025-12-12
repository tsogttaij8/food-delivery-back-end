const express = require("express");
const createOrder = require("../controllers/orders/createOrder");
const getOrders = require("../controllers/orders/getOrders");
const verifyOrderJWT = require("../middleWare/authOrderJWT");
const updateOrderStatus = require("../controllers/orders/updateOrderStatus");
const getUserOrders = require("../controllers/orders/getUserOrders");
const verifyJwt = require("../middleWare/verifyJWT");

const orderRouter = express.Router();

orderRouter.post("/", verifyOrderJWT, verifyJwt, createOrder);
orderRouter.get("/", getOrders);
orderRouter.get("/user", verifyOrderJWT, getUserOrders);
orderRouter.put("/:id/status", verifyJwt, updateOrderStatus);

module.exports = orderRouter;
