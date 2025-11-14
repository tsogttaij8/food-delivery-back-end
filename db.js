const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://TOM-BOSS:TOM-BOSS123@food-delivery.udhdj2q.mongodb.net/"
    );
    console.log("DATABASE connection success");
  } catch (err) {
    console.log("DATABASE connection failed", err);
  }
};

module.exports = connectToDB;
