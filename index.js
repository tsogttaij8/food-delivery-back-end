const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 1000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json("hello world, hi 00 12 running");
  console.log("req", req);
});

app.listen(PORT, () => {
  console.log(`API listening on http://localhost:${PORT} `);
});
