// server/utils/sendEmail.js

import nodemailer from "nodemailer";

export const sendEmail = async ({ email, subject, message }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      service: process.env.SMTP_SERVICE || undefined, // Optional fallback
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Your App Name" <${process.env.SMTP_MAIL}>`,
      to: email,
      subject: subject,
      html: message,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ Email sent: ${info.messageId}`);
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    throw new Error("Email could not be sent");
  }
};
