const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

module.exports = async (req, res) => {
  const token = req.headers.authorization;

  jwt.verify(token, JWT_SECRET, function (err, decoded) {
    if (err) {
      return res.status(403).json({
        message: "Invalid token.",
      });
    }

    return res.json({
      message: "Logout successful.",
    });
  });
};
