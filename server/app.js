// server/app.js

import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";
import userRouter from "./routes/userRouter.js";
import {removeUnverifiedAccounts} from "./automation/removeUnverifiedAccounts.js";

// 🌐 Load environment variables
config({ path: "./config.env" });

export const app = express();

// 🛡️ CORS setup
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// 🧱 Middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🚏 API Routes
app.use("/api/v1/user", userRouter);

removeUnverifiedAccounts();

// 🔗 Connect to DB
connection();

// ⚠️ Global Error Handler
app.use(errorMiddleware);
