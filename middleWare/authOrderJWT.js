const jwt = require("jsonwebtoken");

const JWT_SECRET = "TOM_BOSS";

const verifyOrderJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "No token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    console.log("JWT verification error:", err);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = verifyOrderJWT;
