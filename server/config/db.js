const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected Successfully".cyan.bold);
  } catch (error) {
    console.log(error?.message);
    process.exit()
  }
};

module.exports = connectDB