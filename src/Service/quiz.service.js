class quizService {
  static async status200Success(res) {
    res.status(200).json({
      variant: "success",
      message: "Quiz questions added successfully",
    });
  }
}

module.exports = quizService;
