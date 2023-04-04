const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    chat_name: { type: String, trim: true },
    is_group_chat: { type: Boolean, default: false },
    users: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],
    latest_message: {
      type: mongoose.Types.ObjectId,
      ref: "message",
    },
    group_admin: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

const chat = mongoose.model("chat", chatModel);

module.exports = chat;
