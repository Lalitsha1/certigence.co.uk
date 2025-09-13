// server/database/dbConnection.js
import mongoose from "mongoose";

export const connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "MERN_AUTHENTICATION", // keep your DB name
    });
    console.log("✅ Database connected successfully");
  } catch (error) {
    console.error("❌ Database connection failed");
    console.error(error.message);
    process.exit(1); // Exit process on DB failure
  }
};
