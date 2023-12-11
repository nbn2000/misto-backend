const AJV = require("ajv");
const ajv = new AJV();

class userValidator {
  static async check(schema, data) {
    const valid = ajv.validate(schema, data);
    const error = ajv.errorsText();
    if (!valid) {
      return error;
    } else {
      return null;
    }
  }

  static async passthrough(req, res, next) {
    const data = await req.body;
    const schema = {
      type: "object",
      properties: {
        firstName: {
          type: "string",
          maxLength: 30,
          minLength: 5,
        },
        lastName: {
          type: "string",
          maxLength: 30,
          minLength: 5,
        },
        tel: {
          type: "string",
          minLength: 16,
          maxLength: 16,
          pattern: "^[+][0-9]{3} [0-9]{2} [0-9]{3} [0-9]{4}$",
        },
        email: {
          type: "string",
          pattern: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$",
          minLength: 10,
          maxLength: 50,
        },
        userName: {
          type: "string",
          pattern: "^[a-z][a-z0-9]*$",
          minLength: 7,
          maxLength: 20,
        },
        password: {
          type: "string",
          minLength: 5,
          maxLength: 30,
          pattern: "^(?=.*\\d.*\\d)(?=.*[a-zA-Z].*[a-zA-Z]).*$",
        },
      },
      required: [
        "firstName",
        "lastName",
        "tel",
        "email",
        "userName",
        "password",
      ],
      additionalProperties: false,
    };
    const err = await userValidator.check(schema, data);
    if (!err) {
      next();
    } else {
      res.status(400).json({
        variant: "warning",
        message: `${
          err.split(" ")[0].split("/")[1]
        } is filled incorrect, please try one more time`,
        error: err,
      });
    }
  }
}

module.exports = userValidator;
