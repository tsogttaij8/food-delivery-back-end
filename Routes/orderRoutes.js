const express = require("express");
const createOrder = require("../controllers/orders/createOrder");
const getOrders = require("../controllers/orders/getOrders");
const verifyOrderJWT = require("../middleWare/authOrderJWT");
const updateOrderStatus = require("../controllers/orders/updateOrderStatus");

const orderRouter = express.Router();

orderRouter.post("/", verifyOrderJWT, createOrder);
orderRouter.get("/", getOrders);
orderRouter.put("/:id/status", updateOrderStatus);

module.exports = orderRouter;
