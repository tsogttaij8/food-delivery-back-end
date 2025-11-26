const { default: mongoose } = require("mongoose");
const { uploadToCloudinary } = require("../../middleWare/upload");
const foodModel = require("../../schemas/food");

const createFood = async (req, res) => {
  try {
    if (!req.file)
      return res.status(400).json({ message: "Food image is required" });

    const result = await uploadToCloudinary(
      req.file.buffer,
      Date.now().toString()
    );

    const data = await foodModel.create({
      category: req.body.category, // шууд string _id
      foodName: req.body.foodName,
      foodPrice: req.body.foodPrice,
      foodIngredients: req.body.foodIngredients,
      foodImage: result.secure_url,
    });

    res.status(201).json({ message: "Food created", data });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ message: "Error creating food", error: err.message });
  }
};

module.exports = createFood;
