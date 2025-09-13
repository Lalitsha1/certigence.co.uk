import { Newsletter } from "../models/newsletterModel.js";
import { sendEmail } from "../utils/sendEmail.js";
import ErrorHandler from "../middlewares/error.js";

export const subscribe = async (req, res, next) => {
  try {
    const { email } = req.body || {};
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return next(new ErrorHandler("Please provide a valid email address", 400));
    }

    // Upsert-like behavior: if exists, just confirm subscription
    const existing = await Newsletter.findOne({ email: email.toLowerCase() });
    if (existing) {
      return res.status(200).json({ success: true, message: "You're already subscribed." });
    }

    await Newsletter.create({ email });

    // Optional welcome email (HTML)
    const appName = process.env.APP_NAME || "Certigence";
    const html = `
      <h2>Welcome to ${appName} Insights</h2>
      <p>Thanks for subscribing! You'll receive occasional articles, tips, and checklists on ISO and compliance—no spam.</p>
      <p style="font-size:12px;color:#6b7280">If this wasn't you, simply ignore this message.</p>
    `;

    try {
      await sendEmail({ email, subject: `Welcome to ${appName} Blog`, message: html, isHtml: true });
    } catch (_) {
      // Do not fail subscription if email sending fails
    }

    return res.status(201).json({ success: true, message: "Subscribed successfully." });
  } catch (err) {
    return next(err);
  }
};

