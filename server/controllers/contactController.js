import Contact from "../models/contactModel.js";
import nodemailer from "nodemailer";

export const sendMessage = async (req, res) => {
  try {
    const { name, email, mobile, subject, message } = req.body;

    if (!name || !email || !mobile || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ Save to DB
    const newMessage = await Contact.create({ name, email, mobile, subject, message });

    // ✅ Setup transporter
    const transporter = nodemailer.createTransport({
      service: process.env.SMTP_SERVICE, // gmail
      host: process.env.SMTP_HOST,       // smtp.gmail.com
      port: process.env.SMTP_PORT,       // 465
      secure: true,
      auth: {
        user: process.env.SMTP_MAIL,     // your gmail
        pass: process.env.SMTP_PASSWORD, // your app password
      },
    });

    // ✅ Mail options
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_MAIL}>`,
      to: process.env.SMTP_MAIL,
      subject: `📩 New Contact Form: ${subject}`,
      text: `
        You have a new contact form message:
        -------------------------------------
        Name: ${name}
        Email: ${email}
        Mobile: ${mobile}
        Subject: ${subject}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "✅ Message received and email sent successfully!",
      data: newMessage,
    });
  } catch (error) {
    console.error("❌ Contact form error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
