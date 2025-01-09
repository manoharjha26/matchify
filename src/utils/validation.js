const validatior = require("validator");

const validateSignUpData = (req) => {
  const { firstName, lastName, emailId, password } = req.body;

  if (!firstName || !lastName) {
    throw new Error("Name not valid");
  } else if (!validatior.isEmail(emailId)) {
    throw new Error("Email is not valid");
  } else if (!validatior.isStrongPassword(password)) {
    throw new Error("Password is not strong");
  }
};

module.exports = {
  validateSignUpData,
};
