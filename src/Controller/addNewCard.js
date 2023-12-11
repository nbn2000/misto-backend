const response = require("../Service/response.service");

class addCard {
  async addNewCard(req, res) {
    try {
      await console.log(req.body);
      response.created(res, "User created successfully");
    } catch (error) {
      response.internal(res);
    }
  }
}

module.exports = new addCard();
