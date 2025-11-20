const UserModel = require("../../schemas/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (!user) {
      return req.status(403).json({ message: "invalid credendual" });
    }

    const hashedPassword = user.password;
    console.log("body password", password);
    console.log("database password", hashedPassword);
    const isPasswordMatch = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordMatch) {
      res.status(404).json(`password not matching ${err}`);
    } else {
      res.status(200).json({
        message: "successfully signed in",
        user: user,
      });
    }
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = loginUser;
