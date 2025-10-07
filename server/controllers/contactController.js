import Contact from "../models/contactModel.js";
import { sendEmail } from "../utils/sendEmail.js";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, mobile, company_name, message } = req.body || {};

    const payload = {
      name: name?.toString().trim(),
      email: email?.toString().trim().toLowerCase(),
      mobile: mobile?.toString().trim(),
      company_name: company_name?.toString().trim(),
      message: message?.toString().trim(),
    };

    if (Object.values(payload).some((value) => !value)) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Save to DB
    const newMessage = await Contact.create(payload);

    // Email admin with the contact details
    await sendEmail({
      email: process.env.SMTP_MAIL,
      subject: `New Contact Form: ${payload.company_name}`,
      message: `
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> ${payload.name}</p>
        <p><strong>Email:</strong> ${payload.email}</p>
        <p><strong>Mobile:</strong> ${payload.mobile}</p>
        <p><strong>Company Name:</strong> ${payload.company_name}</p>
        <p><strong>Message:</strong><br/>${payload.message}</p>
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
