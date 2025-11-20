const UserModel = require("../../schemas/userSchema");
const bcrypt = require("bcrypt");

const SALT_ROUND = 10;

const createUser = async (req, res) => {
  const { firstName, email, password, address, phoneNumber } = req.body;
  const hashedPassword = await bcrypt.hash(password, SALT_ROUND);

  console.log("hashedPassword", hashedPassword);
  console.log("Password", password);
  try {
    const data = await UserModel.create({
      firstName: firstName,
      email: email,
      password: password,
      address: address,
      phoneNumber: phoneNumber,
    });
    console.log(data);

    res.status(201).json(`createdUser: ${data}`);
  } catch (err) {
    console.log(err);
    res.status(500).json("something went wrong , try again");
  }
};

module.exports = createUser;
