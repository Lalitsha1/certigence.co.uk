import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    certification: { type: String, required: true },
  },
  { timestamps: true }
);

export const Quote = mongoose.model("Quote", quoteSchema);
