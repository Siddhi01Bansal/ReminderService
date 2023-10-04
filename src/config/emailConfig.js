const nodemailer = require('nodemailer');

const { EMAIL_ID, EMAIL_PASS } = require('./serverConfig');
console.log(EMAIL_ID, EMAIL_PASS);
const sender = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: EMAIL_ID,
        pass: EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false, // You may need to set this to true for production use
        // ca: [fs.readFileSync('path/to/your/ca.crt')] // Specify the path to your self-signed CA certificate
    }
});

module.exports = sender;