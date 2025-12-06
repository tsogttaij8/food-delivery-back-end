const orderModel = require("../../schemas/orderSchema");

const createOrder = async (req, res) => {
  try {
    const { totalPrice, FoodOrderItems, status, deliveryLocation } = req.body;
    const user = req.userId;

    // console.log("Request body:", req.body);
    // console.log("User ID from token:", user);

    if (!user) {
      return res.status(401).json({ message: "newterj orno uu!" });
    }

    if (!totalPrice || !FoodOrderItems || FoodOrderItems.length === 0) {
      return res.status(400).json({ message: "buh talbariig boglono uu!!!" });
    }

    const newOrder = await orderModel.create({
      user,
      totalPrice,
      FoodOrderItems,
      deliveryLocation,
      status: status || "pending",
    });

    res.status(201).json(newOrder);
  } catch (error) {
    console.error("Create order error:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = createOrder;
