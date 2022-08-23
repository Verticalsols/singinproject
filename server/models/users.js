const mongoose = require("mongoose");

const userScheme = mongoose.Schema({
  fullName: { type: String, required: true },
  userName: { type: String, required: true, unique: true },
  userEmail: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("users", userScheme);
