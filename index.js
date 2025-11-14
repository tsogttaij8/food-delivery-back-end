const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const UserModel = require("./schemas/userSchema");
// mongodb+srv://b94889340_db_user:3EKM0A9YHOAwTgBQ@food-delivery.udhdj2q.mongodb.net/
const app = express();
const PORT = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());

connectToDB();

app.get("/", async (req, res) => {
  const data = await UserModel.create({
    firstname: "Tomboss",
    email: "tomboss@yahoo.com",
  });
  console.log(data);
  res.json("hello world, hi 00 12 running");
  console.log("req", req);
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT} `);
});
