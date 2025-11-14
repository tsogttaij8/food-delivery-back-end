const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  firstname: {
    type: String,
    required: [true],
    minLength: [6, "First name length must be at least 6 characters"],
    maxLength: [50, "First name length must be at least 6 to 50 characters"],
  },
  email: {
    type: String,
    required: [true],
  },
});

const UserModel = model("User", UserSchema);

module.exports = UserModel;
