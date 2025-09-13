import Contact from "../models/contactModel.js";
import { sendEmail } from "../utils/sendEmail.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, mobile, company_name, message } = req.body;

    if (!name || !email || !mobile || !company_name || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save to DB
    const newMessage = await Contact.create({ name, email, mobile, company_name, message });

    // Email admin with the contact details
    await sendEmail({
      email: process.env.SMTP_MAIL,
      subject: `New Contact Form: ${company_name}`,
      message: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Company Name:</strong> ${company_name}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
      isHtml: true,
    });

    res.status(200).json({
      success: true,
      message: "Message received and email sent successfully!",
      data: newMessage,
    });
  } catch (error) {
    console.error("Contact form error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

