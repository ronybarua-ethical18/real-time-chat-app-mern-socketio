const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv")

const app = express();
dotenv.config()

app.get("/api/v1", (req, res) => {
  res.send("Api is running");
});

app.get("/api/v1/chats", (req, res) => {
  //   console.log("Api is running");
  res.send(chats);
});

app.get("/api/v1/chats/:id", (req, res) => {
  const singleChat = chats.find((chat) => chat._id === req.params.id);
  res.send(singleChat);
});

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
