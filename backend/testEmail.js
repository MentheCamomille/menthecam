// Using Twilio SendGrid's v3 Node.js Library
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Assure-toi que SENDGRID_API_KEY est défini dans ton environnement

const msg = {
  to: 'menthecam@gmail.com', // Change to your recipient
  from: 'menthecam@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent');
  })
  .catch((error) => {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error('Response Body:', error.response.body.errors);
    }
  });
