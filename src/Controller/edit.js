const response = require("../Service/response.service");

class EditData {
  async EditUser(req, res) {
    try {
      await console.log(req.body);
      response.created(res, "User created successfully");
    } catch (error) {
      response.internal(res);
    }
  }

  async EditCard(req, res) {
    try {
      await console.log(req.body);
      response.created(res, "Card created successfully");
    } catch (error) {
      response.internal(res);
    }
  }
}

module.exports = new EditData();
