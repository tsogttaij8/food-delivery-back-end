const express = require("express");
const createOrder = require("../controllers/orders/createOrder");
const getOrders = require("../controllers/orders/getOrders");
const verifyOrderJWT = require("../middleWare/authOrderJWT");
const updateOrderStatus = require("../controllers/orders/updateOrderStatus");
const getUserOrders = require("../controllers/orders/getUserOrders");
const verifyJwt = require("../middleWare/verifyJWT");
const authMiddleware = require("../middleWare/authMiddleware");

const orderRouter = express.Router();

orderRouter.post("/", authMiddleware, createOrder);
orderRouter.get("/", getOrders);
orderRouter.get("/user", getUserOrders);
orderRouter.put("/:id/status", updateOrderStatus);

module.exports = orderRouter;
