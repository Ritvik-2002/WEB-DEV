const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
  username: String,
  password:String,
  name:String,
  email:String,
  pnumber:String,
  country:String,
  Address:String,
  verified: Boolean
});

const User = mongoose.model("User", userschema);
module.exports = User
