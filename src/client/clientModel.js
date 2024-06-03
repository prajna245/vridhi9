
var mongoose = require("mongoose");
var Schema=mongoose.Schema;

var clientSchema = new Schema({
  fullName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    
  },
  phoneNumber: {
    type: String,
    required: true,
    
  },
  password: {
    type: String,
    required: true
  },
  otp: {
    type: String,
    required: true
  },
});


module.exports = mongoose.model("client", clientSchema); 