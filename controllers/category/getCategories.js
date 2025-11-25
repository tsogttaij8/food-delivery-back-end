const CategoryModel = require("../../schemas/foodCategory");

const getCategories = async (req, res) => {
  try {
    // const data = await CategoryModel.find();
    const data = await CategoryModel.aggregate([
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "category",
          as: "Food",
        },
      },
    ]);
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(`something went wrong to getCategories: ${err}`);
  }
};

module.exports = getCategories;
