const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        status: "error",
        message: "Unauthorized: Token not provided.",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, function (err, decode) {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return res.status(401).json({
            status: "error",
            message: "Unauthorized: Token expired.",
          });
        } else {
          return res.status(403).json({
            status: "error",
            message: "Forbidden: Invalid token.",
          });
        }
      }

      req.user = decode;
      next();
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Internal server error.",
    });
  }
};
