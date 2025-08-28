import express from "express";
import { sendMessage } from "../controllers/contactController.js";

const router = express.Router();

// POST /api/v1/contact
router.post("/", sendMessage);

export default router;
