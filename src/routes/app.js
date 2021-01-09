const { Router } = require('express');
const router = Router();

require('dotenv').config();

const nodemailer = require('nodemailer');

router.post('/send-email', async (req, res) => {
    const { name, email, subject, message } = req.body;

    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Username: ${name}</li>
            <li>User Email: ${email}</li>
            <li>Subject: ${subject}</li>
        </ul>
        <p>${message}</p>
    `;


    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false,
        auth: {
            user: 'youremail@gmail.com',
            pass: 'yourpassword'
        },
        tls: {
            rejectUnauthorized: false
        }
    });


    // setup email data with unicode symbols
    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Whatever you wanna call" <youremail@gmail.com>', // sender address,
        to: 'youremail@gmail.com',
        subject: req.body.subject,
        // text: 'Hello World'
        html: contentHTML
    })

    console.log('Message sent: %s', info.messageId);

    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

    res.redirect('/success.html');
});

module.exports = router;
