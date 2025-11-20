const { model, Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    // firstName: {
    //   type: String,
    //   required: [true],
    //   minLength: [6, "First name length must be at least 6 characters"],
    //   maxLength: [50, "First name length must be at least 6 to 50 characters"],
    // },
    email: {
      type: String,
      required: [true],
    },
    password: {
      type: String,
      required: [true],
    },
    // address: {
    //   type: String,
    //   required: [true],
    // },
    // phoneNumber: {
    //   type: Number,
    //   required: [true],
    // },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const UserModel = model("User", UserSchema);

module.exports = UserModel;
