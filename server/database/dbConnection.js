// server/database/dbConnection.js
import mongoose from "mongoose";

export const connection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_AUTHENTICATION",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("✅ Database connected successfully");
    })
    .catch((error) => {
      console.error("❌ Database connection failed");
      console.error(error);
      process.exit(1); // Exit the process if DB connection fails
    });
};
