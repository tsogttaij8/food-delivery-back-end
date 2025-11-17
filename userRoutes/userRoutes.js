const express = require("express");
const createUser = require("../controllers/user/CreateUser");
const getUserById = require("../controllers/user/getUserById");
const UserModel = require("../schemas/userSchema");
const userRouter = express.Router();

userRouter.get("/:userId", getUserById);

userRouter.get("/", async (req, res) => {
  const dbUsers = await UserModel.find();
  res.status(200).json({
    message: "successfully got all users",
    user: dbUsers,
  });
});

// userRouter.get("/", (req, res) => {
//   res.send("Helloo Get");
// });

userRouter.put("/", (req, res) => {
  res.send("Hello Update");
});

userRouter.delete("/", async (req, res) => {
  const getDeleteId = req.body;
  const deletedUser = await UserModel.findByIdAndDelete(getDeleteId);
  res.status(200).json({
    message: "successfully deleted user",
    deletedUser: deletedUser,
  });
});

// userRouter.post("/", (req, res) => {
//   res.send("Hello post");
// });

userRouter.post("/", createUser);

module.exports = userRouter;
