const jwt = require("jsonwebtoken");
const JWT_SECRET = "TOM_BOSS";

const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, JWT_SECRET);
};

module.exports = { generateToken };
