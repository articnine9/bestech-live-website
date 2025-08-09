// pages/api/sendMail.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, phone, email, time } = req.body;

  if (!name || !phone || !email) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "articnineweb@gmail.com",
      pass: "rqiqmuwfolbiujch",
    },
  });

  try {
    await transporter.sendMail({
      from: `"Contact Form" `,
      to: "admin@bestechparts.ae, sales@bestechparts.ae",
      subject: "New Contact from Chatbot",
      text: `
        You have received a new contact request from the chatbot:

        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Submitted At: ${time}
      `,
      html: `
        <h3>New Contact from Chatbot</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Submitted At:</strong> ${time}</p>
      `,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Mail Error:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
