const tokenService = require("../Service/token.service");
const response = require("../Service/response.service");

const auth = async (req, res, next) => {
  const path = req.path;
  if (path === "/signin" || path === "/signup") {
    return next();
  }
  try {
    const token = req?.headers?.authorization?.split(" ").pop() || null;
    await tokenService.verifyToken(token);
    if (!token) {
      return response.error(res, "Unauthorized");
    } else {
      next();
    }
  } catch (err) {
    response.internal(res, "Invalid token", err);
  }
};

module.exports = auth;
