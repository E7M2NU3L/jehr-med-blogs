require('dotenv').config()
const nodemailer = require('nodemailer');
const transport = require('../config/NodemailerConfig');

const SendMail = (otp, matter, recipient) => {
    
    // html message
    const htmlMessage = `
            <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;">
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse; margin-top: 30px; background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
                <tr>
                <td align="center" bgcolor="#333" style="padding: 20px 0;">
                    <h1 style="color: #fff;">OTP Verification</h1>
                </td>
                </tr>
                <tr>
                <td bgcolor="#ffffff" style="padding: 40px 30px;">
                    <p style="margin-bottom: 20px; font-size: 16px;">Hello,</p>
                    <p style="margin-bottom: 20px; font-size: 16px;">Your OTP code is: <strong style="color: #333;">${otp}</strong></p>
                    <p style="margin-bottom: 20px; font-size: 16px;">Please use this code to verify your account.</p>
                </td>
                </tr>
                <tr>
                <td bgcolor="#333" style="padding: 20px 30px;">
                    <p style="margin: 0; color: #fff; font-size: 14px; text-align: center;">&copy; 2024 Your Company Name. All rights reserved.</p>
                </td>
                </tr>
            </table>
            </body>`
    
    // sender for email verification
    const mailOptionsVerifyEmail = {
        from: process.env.email, // Sender address
        to: recipient, // List of recipients
        subject: 'Verify your Account', // Subject line
        html: htmlMessage,
        attachments: [
            { filename: 'blog1.jpg', path: './images/blog1.jpg' }
        ]
    };

    // sender for reset password
    const mailOptionsResetPassword =  {
        from: process.env.email, // Sender address
        to: recipient, // List of recipients
        subject: 'Verify your Account', // Subject line
        html: htmlMessage,
        attachments: [
            { filename: 'blog2.jpg', path: './images/blog2.jpg' }
        ]
    };

    // send the email
    if(matter == process.env.verify){
        transport.sendMail(mailOptionsVerifyEmail, function(err, info) {
            if (err) {
              console.log(err);
              return "failed to verify email"
            } else {
              console.log(info);
              return "sucesss"
            }
         });
    }

    else if(matter == process.env.reset){
        transport.sendMail(mailOptionsResetPassword, function(err, info) {
            if (err) {
              console.log(err)
              return "failed to reset password"
            } else {
              console.log(info);
              return "sucesss"
            }
         });
    }
    
    else {
        return "Email does not get sent";
    }
}

module.exports = SendMail;