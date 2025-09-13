import { Quote } from "../models/quoteModel.js";
import { sendEmail } from "../utils/sendEmail.js";

export const createQuote = async (req, res) => {
  try {
    const { name, email, certification } = req.body;

    if (!name || !email || !certification) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save to DB
    const newQuote = await Quote.create({ name, email, certification });

    // Send email to user
    await sendEmail({
      email,
      subject: "Your ISO Quote Request",
      message: `Hello ${name},<br><br>Thank you for requesting a quote for ${certification}. Our team will contact you soon.<br><br>Best Regards,<br>Certigence Team`,
      isHtml: true,
    });

    // Send email to Admin (you)
    await sendEmail({
      email: process.env.SMTP_MAIL,
      subject: "New Quote Request Received",
      message: `A new quote request has been submitted:<br><br><strong>Name:</strong> ${name}<br><strong>Email:</strong> ${email}<br><strong>Certification:</strong> ${certification}`,
      isHtml: true,
    });

    res.status(201).json({
      success: true,
      message: "Quote request submitted & email sent",
      data: newQuote,
    });
  } catch (error) {
    console.error("Quote error:", error);
    res.status(500).json({ message: "Failed to process quote", error });
  }
};

