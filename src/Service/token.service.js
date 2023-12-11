const jwt = require("jsonwebtoken");
const key = process.env.KEY;

class tokenService {
  static async generateToken(user) {
    return new Promise(async (resolve, reject) => {
      try {
        const token = await jwt.sign(user, key);
        resolve(token);
      } catch (err) {
        reject(err);
      }
    });
  }
  static async verifyToken(token) {
    return new Promise(async (resolve, reject) => {
      try {
        const data = await jwt.verify(token, key);
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = tokenService;
