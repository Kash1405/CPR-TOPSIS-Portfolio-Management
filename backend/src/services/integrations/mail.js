require('dotenv').config();
const nodemailer = require('nodemailer');

const error = require('../../util/error');
const { generateEmail: generateTokenEmail } = require('../../templates/token');

const { SMTP_USER, SMTP_PASS, SMTP_SENDER } = process.env;


const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
    },
});

const sendMessage = (to, subject, content, attachments) => {
    const message = {
        from: SMTP_SENDER,
        to,
        subject,
        html: content,
    };
    if (attachments) {
        message.attachments = attachments;
    }
    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (result) => {
            resolve(result);
        }, (e) => {
            reject(e);
        });
    });
};

const sendTokenEmail = async ({ name, to, token }) => {
    const subject = 'Your OTP for Sign Up Verfication from TLY';
    const content = generateTokenEmail({ name, token });
    let res;
    try {
        res = await sendMessage(to, subject, content);
    } catch (e) {
        throw error.CustomError(e);
    }
    return res;
};

module.exports = {
    sendTokenEmail,
};
