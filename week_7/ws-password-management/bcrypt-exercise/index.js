"use strict";

const bcrypt = require("bcryptjs");

const hashPassword = (password, callback) => {
  bcrypt.hash(password, 12, (error, hash) => {
    if (error) {
      callback(error);
    } else {
      callback(null, hash);
    }
  });
};

const comparePasswords = (password, hashedPassword, callback) => {
  bcrypt.compare(password, hashedPassword, callback);
};

module.exports = {
  comparePasswords,
  hashPassword
};
