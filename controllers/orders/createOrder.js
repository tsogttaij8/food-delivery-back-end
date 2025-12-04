const Order = require("../models/orderModel");

const createOrder = async (req, res) => {
  try {
    const { user, totalPrice, FoodOrderItems, status } = req.body;

    if (
      !user ||
      !totalPrice ||
      !FoodOrderItems ||
      FoodOrderItems.length === 0
    ) {
      return res
        .status(400)
        .json({ message: "Бүх шаардлагатай талбарыг бөглөнө үү" });
    }

    const newOrder = await Order.create({
      user,
      totalPrice,
      FoodOrderItems,
      status,
    });

    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = createOrder;
