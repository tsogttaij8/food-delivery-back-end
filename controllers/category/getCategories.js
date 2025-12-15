const CategoryModel = require("../../schemas/foodCategory");
const FoodModel = require("../../schemas/food");

const getCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find();
    const foods = await FoodModel.find();

    const data = categories.map((cat) => ({
      ...cat.toObject(),
      foods: foods.filter(
        (food) => food.category?.toString() === cat._id.toString()
      ),
    }));

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
