const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "TOM_BOSS"; // .env-д байхгүй бол default ашиглана

const verifyOrderJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "No token" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET); // <- энд JWT_SECRET ашиглана
    req.userId = decoded.id;
    next();
  } catch (err) {
    console.log("JWT verification error:", err);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = verifyOrderJWT;
