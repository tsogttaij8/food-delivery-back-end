const { model, Schema } = require("mongoose");

const foodSchema = new Schema(
  {
    foodName: {
      type: String,
      required: [true],
    },
    foodPrice: {
      type: String,
      required: [true],
    },
    foodIngredients: {
      type: String,
      required: [true],
    },
    foodImage: {
      type: String,
      required: [true],
    },
  },
  { timestamps: true }
);

const foodModel = model("Food", foodSchema);

module.exports = foodModel;
