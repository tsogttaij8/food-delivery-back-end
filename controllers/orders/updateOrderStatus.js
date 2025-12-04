const orderModel = require("../../schemas/orderSchema");

const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const order = await orderModel.findById(id);
    if (!order) return res.status(404).json({ message: "zahialga baihgui!" });

    order.status = status || order.status;
    await order.save();

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = updateOrderStatus;
