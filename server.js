const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config(); // <<--- Add this at the top

const app = express();
const PORT = process.env.PORT || 5000; // <<-- Use from .env or default 5000

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));

// POST route to handle form
app.post("/send-email", async (req, res) => {
  const { user_name, user_email, message,company_name,contact } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // <-- from .env
        pass: process.env.GMAIL_PASS, // <-- from .env
      },
    });

    // Send mail to admin 
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      replyTo: user_email, // <- this is what you want
      subject: "New Contact Form Submission From AU Website",
      html: `
        <h3>New Message From AU Website</h3>
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> ${user_email}</p>
        <p><strong>Phone:</strong> ${contact}</p>
        <p><strong>Company:</strong> ${company_name}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Send confirmation mail to user
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: user_email,
      subject: "Thank you for contacting us!",
      html: `
          <p>Hi ${user_name},</p>
          <p>Thank you for reaching out to us! I’ll be with you shortly, but to kick us off for now, here are some things to consider:</p>
          <ol>
            <li><a href="https://vtest.com.au/"><strong>VTEST</strong></a> is an agile, boutique firm that focuses on a couple of projects each quarter since we pride ourselves on quality, not quantity. The first step in our process is to review your software testing requirements by jumping on a quick exploratory call. Our engagement motto is simple - <strong>YOU develop, WE test</strong>.</li>
            <br/>
            <li>Please feel free to check out our <a href="https://vtestcorp.com/wp-content/uploads/2025/04/VTEST-Global-Software-Testing-Partner-.pdf">VTEST - Global Software Testing Partner deck</a></li>
          </ol>
          <p>Please feel free to let me know when is a good time for you to chat, or grab a time on <a href="https://cal.com/shak.vtest">VTEST Sales Calendar</a>.</p>
          <p>I'm looking forward to meeting you and welcome you to <strong> #AwesomeTesting </strong> at VTEST.</p>
          <p>Shak,<br>Founder & Chief Testomaniac - VTEST</p>
        `,
    });

    res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("Error sending emails:", error);
    res.status(500).json({ message: "Failed to send emails" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
