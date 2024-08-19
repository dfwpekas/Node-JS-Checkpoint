const nodemailer = require('nodemailer');

// Create a transporter object using the SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email provider
    auth: {
        user: 'chiemerienwafor88@gmail.com', // Your email
        pass: 'vj** lkif amyx ****' // Your email password
    }
});

// Set up email data
const mailOptions = {
    from: 'chiemerienwafor88@gmail.com', // Sender address
    to: 'eighteenzero555@gmail.com', // List of recipients
    subject: 'Test Email from Node.js', // Subject line
    text: 'Hello! This is a test email sent from Node.js.', // Plain text body
    html: '<b>Hello!</b> This is a test email sent from Node.js.' // HTML body
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log('Error:', error);
    }
    console.log('Email sent: ' + info.response);
});
