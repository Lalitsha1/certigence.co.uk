// server/utils/sendEmail.js

import nodemailer from "nodemailer";

function buildTransporter() {
  const port = Number(process.env.SMTP_PORT) || 587;
  const secure = typeof process.env.SMTP_SECURE !== "undefined"
    ? String(process.env.SMTP_SECURE).toLowerCase() === "true"
    : port === 465; // default secure for 465

  // Prefer `service` if provided (e.g., 'gmail'); otherwise use host/port
  const base = process.env.SMTP_SERVICE
    ? { service: process.env.SMTP_SERVICE, secure }
    : { host: process.env.SMTP_HOST, port, secure };

  return nodemailer.createTransport({
    ...base,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

export const sendEmail = async ({ email, subject, message, isHtml = true, from }) => {
  const transporter = buildTransporter();
  const fromAddress = from || process.env.SMTP_FROM || process.env.SMTP_MAIL;

  try {
    const info = await transporter.sendMail({
      from: `"${process.env.APP_NAME || "App"}" <${fromAddress}>`,
      to: email,
      subject,
      [isHtml ? "html" : "text"]: message,
    });
    console.log(`Email sent: ${info?.messageId || "(no id)"}`);
    return info;
  } catch (error) {
    console.error("Error sending email:", {
      message: error?.message,
      code: error?.code,
      command: error?.command,
    });
    throw new Error("Email could not be sent");
  }
};

