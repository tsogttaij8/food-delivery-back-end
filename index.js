const express = require("express");
const cors = require("cors");
const connectToDB = require("./db");
const UserModel = require("./schemas/userSchema");
// mongodb+srv://b94889340_db_user:3EKM0A9YHOAwTgBQ@food-delivery.udhdj2q.mongodb.net/

const userRouter = require("./Routes/userRoutes");
const AuthenticationRouter = require("./Routes/authentication");
const categoryRouter = require("./Routes/categoryRoutes");

const app = express();
const PORT = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());

connectToDB();

app.use("/user", userRouter);
app.use("/authentication", AuthenticationRouter);

app.use("/category", categoryRouter)

app.get("/", (req, res) => {
  res.send("hello world running");
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT} `);
});
