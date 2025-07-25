// pages/api/sendQuote.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, company, phone, email, message } = req.body;

  if (!email || !phone) {
    return res.status(400).json({ message: "Required fields missing" });
  }

  // Create transporter (replace with your SMTP details)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // e.g., smtp.gmail.com
    port: 587,
    secure: false,
    auth: {
      user: "bluemoonconstruction4u@gmail.com",
      pass: "kqbedrjuoshjrhqu",
    },
  });

  try {
    await transporter.sendMail({
      from: `"Quote Form" <${process.env.EMAIL_USER}>`,
      to: "admin@bestechparts.ae, sales@bestechparts.ae",
      subject: "New Quote Request",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to send email." });
  }
}
