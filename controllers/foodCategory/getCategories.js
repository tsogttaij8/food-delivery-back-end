const CategoryModel = require("../../schemas/foodCategory");

const getCategories = async (req, res) => {
  try {
    const data = await CategoryModel.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(`something went wrong to getCategories: ${err}`);
  }
};

module.exports = getCategories;
