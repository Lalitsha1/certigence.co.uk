// server.js
import { app } from "./app.js";
import { config } from "dotenv";
import { connection } from "./database/dbConnection.js";
import mongoose from "mongoose";

// 🌍 Load environment variables
config({ path: "./config.env" });

// Connect DB
connection();

// 🚪 Set PORT
const PORT = process.env.PORT || 8822;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server is running at: http://localhost:${PORT}`);
});

// 🛑 Graceful shutdown
process.on("SIGINT", async () => {
  console.log("\n⚠️ Shutting down server...");
  await mongoose.connection.close();
  server.close(() => {
    console.log("✅ MongoDB disconnected, server closed.");
    process.exit(0);
  });
});
