const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, min: 6 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, min: 6 },
  avatar: { type: String },
  date: { type: Date, default: Date.now }
});
module.exports = mongoose.model("user", userSchema);
