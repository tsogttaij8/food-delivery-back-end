const UserModel = require("../../schemas/userSchema");

const getUserById = async (req, res) => {
  const getId = req.params.userId;
  console.log(getId, "idididid");
  try {
    const data = await UserModel.findById(getId);
    // ({
    //   id,
    // });
    console.log(data);

    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

module.exports = getUserById;
