const UserModel = require("../../schemas/userSchema");

const createUser = async (req, res) => {
  const { firstName, email, password, address, phoneNumber } = req.body;
  console.log("create user controller working");
  try {
    const data = await UserModel.create({
      firstName: firstName,
      email: email,
      password: password,
      address: address,
      phoneNumber: phoneNumber,
    });
    console.log(data);

    res.status(201).json({ message: "User created successfully", user: data });
  } catch (err) {
    console.log(err);
    res.json(err);
  }
};

module.exports = createUser;
