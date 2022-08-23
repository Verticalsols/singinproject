const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const databaseInfo = await mongoose.connect(process.env.DATABASE_URL);
    console.log(`Db connected at ${databaseInfo.connection.host}`);
  } catch (error) {}
};

module.exports = connectDatabase;
