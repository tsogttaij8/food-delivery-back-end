const express = require("express");
const createOrder = require("../controllers/orders/createOrder");
const getOrders = require("../controllers/orders/getOrders");
const verifyOrderJWT = require("../middleWare/authOrderJWT");

const orderRouter = express.Router();

orderRouter.post("/", verifyOrderJWT, createOrder);
orderRouter.get("/", getOrders);

module.exports = orderRouter;
