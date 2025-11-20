const EmailExist = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    res.status(404).json("Email required");
  }

  const user = await UserModel.findOne({ email: email });
  if (!user) {
    next();
  } else {
    res.status(404).json("User not found");
  }
};

module.exports = EmailExist;
