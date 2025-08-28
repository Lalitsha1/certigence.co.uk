
// server.js

import { app } from "./app.js";
import { config } from "dotenv";


// 🌍 Load environment variables from config.env
config({ path: "./config.env" });

// 🚪 Set PORT from env or default to 5000
const PORT = process.env.PORT || 5000;

// 🚀 Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at: http://localhost:${PORT}`);
});
