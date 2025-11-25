const foodModel = require("../../schemas/food");

const createFood = async (req, res) => {
  const { foodName, foodPrice, foodImage, foodIngredients } = req.body;
  try {
    const data = await foodModel.create({
      foodName: foodName,
      foodPrice: foodPrice,
      foodImage: foodImage,
      foodIngredients: foodIngredients,
    });
    console.log("data", data);
    res.status(201).json({
      message: "Food created",
      data,
    });
  } catch (err) {
    console.log("error", err);
    res.status(500).json({
      message: "Something went wrong to create Food, try again",
      error: err.message,
    });
  }
};

module.exports = createFood;
