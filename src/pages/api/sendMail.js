// pages/api/sendMail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { contact, time } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "bluemoonconstruction4u@gmail.com",
      pass: "kqbedrjuoshjrhqu", // This should be an App Password
    },
  });

  try {
    await transporter.sendMail({
      from: '"Contact Form" <bluemoonconstruction4u@gmail.com>',
      to: "admin@bestechparts.ae, sales@bestechparts.ae",
      subject: "New Contact from Chatbot",
      text: `Contact info: ${contact}\nTime: ${time}`,
    });

    return res.status(200).json({ message: "Email sent" });
  } catch (error) {
    console.error("Mail Error:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
