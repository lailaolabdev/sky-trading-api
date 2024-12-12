const mongoose = require("mongoose");

const connectMongoDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGODB_URI);
    console.log("Successfully connected to MongoDB!");
    return connection;
  } catch (error) {
    console.log("Error connecting to MongoDB:", error);
    return "CONNECTION_ERROR";
  }
};

module.exports = { connectMongoDB };