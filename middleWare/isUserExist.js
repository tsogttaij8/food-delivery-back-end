const UserModel = require("../schemas/userSchema");

const isUserExist = async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    res.status(404).json("Email required");
  }

  const user = await UserModel.findOne({ email: email });

  if (!user) {
    res.status(404).json("User not found");
  } else {
    console.log("calling next");
    next();
  }
};

module.exports = isUserExist;
