import { app } from "./app.js";
import { config } from "dotenv";
import { connection } from "./database/dbConnection.js";
import mongoose from "mongoose";

// Load environment variables
config({ path: "./config.env" });

// Connect database
connection();

// Start server
const PORT = process.env.PORT || 8822;
const server = app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("\nShutting down server...");
  await mongoose.connection.close();
  server.close(() => {
    console.log("MongoDB disconnected, server closed.");
    process.exit(0);
  });
});
