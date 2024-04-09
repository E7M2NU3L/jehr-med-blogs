require('dotenv').config()
const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
});

module.exports = transport;