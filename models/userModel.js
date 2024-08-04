const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  gender: {
    type: String,
    enum: ["male", "female", "other"],
    default: "other",
  },
  dob: {
    type: Date,
  },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
