const nodemailer = require('nodemailer');

// Create a transporter object using your email service
let transporter = nodemailer.createTransport({
    service: 'gmail', // You can use other services like 'hotmail', 'yahoo', etc.
    auth: {
        user: 'your-email@gmail.com', // Your email address
        pass: 'your-email-password'    // Your email password (or an app-specific password)
    }
});

// Email options
let mailOptions = {
    from: 'your-email@gmail.com',    // Sender address
    to: 'your-email@gmail.com',      // List of recipients (could be multiple)
    subject: 'Test Email',            // Subject line
    text: 'This is a test email sent from Node.js using Nodemailer.' // Plain text body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error occurred:', error);
    }
    console.log('Email sent:', info.response);
});
