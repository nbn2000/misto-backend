const db = require("../config.mongodb");
const response = require("../Service/response.service");
const tokenService = require("../Service/token.service");
class login {
  async signup(req, res) {
    try {
      await console.log(req.body);
      response.created(res, "User created successfully");
    } catch (error) {
      response.internal(res);
    }
    // try {
    //   await db
    //     .collection("users")
    //     .createIndex({ username: 1 }, { unique: true });

    //   await db.collection("users").insertOne(req.body);
    //   response.created(res, "User created successfully");
    // } catch (error) {
    //   if (
    //     error.code === 11000 &&
    //     error.keyPattern &&
    //     error.keyPattern.userName
    //   ) {
    //     response.warning(
    //       res,
    //       `User with ${req.body.userName} already exists`,
    //       error
    //     );
    //   } else {
    //     response.internal(res, error);
    //   }
    // }
  }

  async signin(req, res) {
    try {
      await console.log(req.body);
      response.created(res, "User created successfully");
      // const { userName, password } = await req.body;
      // const data =
      //   (await db.collection("users").findOne({ userName, password })) || null;
      // const dataAdmin =
      //   (await db.collection("admin").findOne({ userName, password })) || null;

      // const token = await tokenService.generateToken(req.body);
      // if (dataAdmin) {
      //   const adminData = { id: dataAdmin._id, username: dataAdmin.userName };
      //   return response.success(res, "Welcome admin", { adminData, token });
      // } else if (data) {
      //   const usernameAndId = { id: data._id, username: data.userName } || null;
      //   return response.success(res, `Welcome ${data.firstName}`, {
      //     usernameAndId,
      //     token,
      //   });
      // } else {
      //   return response.warning(res, "Unautherized");
      // }
    } catch (err) {
      response.internal(res, "internal server error", err);
    }
  }
}

module.exports = new login();
