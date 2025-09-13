import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/userRouter.js";
import contactRouter from "./routes/contactRouter.js";
import { removeUnverifiedAccounts } from "./automation/removeUnverifiedAccounts.js";
import quoteRouter from "./routes/quoteRoutes.js"; // Quote route
import newsletterRouter from "./routes/newsletterRouter.js"; // Newsletter route

// Load environment variables
config({ path: "./config.env" });

export const app = express();

// CORS setup
// Use comma-separated list in CORS_ORIGINS, or fallback to FRONTEND_URL
const allowedOrigins = (process.env.CORS_ORIGINS || process.env.FRONTEND_URL || "")
  .split(",")
  .map((o) => o.trim())
  .filter(Boolean);

app.use(
  cors({
    // In development allow any origin; in production restrict to configured list
    origin: process.env.NODE_ENV === "production" ? allowedOrigins : true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/contact", contactRouter);
app.use("/api/v1/quote", quoteRouter); // available at /api/v1/quote/new
app.use("/api/v1/newsletter", newsletterRouter);

// Automation job
removeUnverifiedAccounts();

// Global Error Handler
app.use(errorMiddleware);

// Default route (optional, health check)
app.get("/", (req, res) => {
  res.send("Server is running and APIs are live...");
});
