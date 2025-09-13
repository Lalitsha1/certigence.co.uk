import express from "express";
import { createQuote } from "../controllers/quoteController.js";

const router = express.Router();

router.post("/new", createQuote);

export default router;
