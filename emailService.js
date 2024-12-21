const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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'); // Obtiens cette clé depuis SendGrid

const sendEmail = async (to, subject, text, html) => {
    try {
        const msg = {
            to,
            from: 'menthecam@gmail.com', //sendgrid email
            subject,
            text,
            html
        };
        await sgMail.send(msg);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

module.exports = sendEmail;
