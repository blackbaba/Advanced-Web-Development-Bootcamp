const mongoose = require("mongoose");
const User = require("./user");

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    maxlength: 160
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const Message = mongoose.model("Message", messageSchema);
module.exports = Message;