/*
This is the primary back-end NodeJS code for controlling the contact form within
my personal website. The focus is for communication with the SendGrid API service.

Author: Nathan Rand
Date: 12/26/2022
Version: 1.0
*/

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'nrand02@vt.edu', // Change to your recipient
  from: 'contactMe@em3856.nathanrand.dev', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}

sgMail
  .send(msg)
  .then((response) => {
    console.log(response[0].statusCode)
    console.log(response[0].headers)
  })
  .catch((error) => {
    console.error(error)
  })