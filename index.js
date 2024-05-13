const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Root Endpoint
app.get("/", (req, res) => {
  res.send("Welcome to JSaltyLens Server!");
});

// Endpoints
app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  // You can add any additional validation here

  // Create a transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rafaelfelic@gmail.com",
      pass: "zgrqjvdwxbkrgfce",
    },
  });

  // Message object
  let mailOptions = {
    from: "rafaelfelic@gmail.com",
    to: email, // Send to the email address received from the form
    subject: "Newsletter Subscription",
    text: "You have successfully subscribed to our newsletter!",
  };

  try {
    // Send mail with defined transport object
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "There was an error sending the email." });
  }
});

// Starting the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
