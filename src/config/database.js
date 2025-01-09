const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://jha639711:S3eaXrogp9zqBB1P@cluster0.n12ii.mongodb.net/Matchify"
  );
};

module.exports = connectDB;