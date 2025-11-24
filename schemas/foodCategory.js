const { model, Schema } = require("mongoose");

const foodCategorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: [true],
    },
  },
  { timestamps: true }
);

const CategoryModel = model("Category", foodCategorySchema);

module.exports = CategoryModel;
