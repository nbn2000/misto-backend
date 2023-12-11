class loginService {
  static async status201Success(res) {
    res.status(201).json({
      variant: "success",
      message: "Data added successfully",
    });
  }
}

module.exports = loginService;
