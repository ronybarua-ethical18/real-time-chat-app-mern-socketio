const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require('colors')
const cors = require('cors')
const userRoutes = require("./routes/userRoutes")
const chatRoutes = require("./routes/chatRoutes")
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json())
dotenv.config()

//connect db
connectDB()
// enable cors
app.use(
  cors({
    origin: "*",
  })
);

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


// Error Handling middlewares
// app.use(notFound);
// app.use(errorHandler);

app.use("/api/v1/users", userRoutes)
app.use("/api/v1/chats", chatRoutes)
const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Server running on port ${port}`.yellow.bold);
});
