const { model, Schema, Types } = require("mongoose");

const orderSchema = new Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0,
    },
    FoodOrderItems: [
      {
        food: {
          type: Types.ObjectId,
          ref: "Food",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: 1,
        },
        price: {
          type: Number,
          required: true,
          min: 0,
        },
      },
    ],
    status: {
      type: String,
      enum: ["pending", "cancelled", "delivered"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const orderModel = model("Order", orderSchema);

module.exports = orderModel;
