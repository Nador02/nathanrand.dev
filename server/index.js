/*
This is the primary back-end NodeJS code for controlling the contact form within
my personal website. The focus is for communication with the SendGrid API service.

Author: Nathan Rand
Date: 12/26/2022
Version: 1.0
*/

const express = require('express');
const cors = require('cors');
const app = express();
const sgMail = require('@sendgrid/mail');
const port = 5000;

// Use express JSON middleware
app.use(express.json());
app.use(cors());

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// Gets the API Key for Sendgrid from the environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/contact', (req, res) => {
  let package = req.body;

  //ensure that all pertinent information was included in the request
  if(!package){
    res.status(418).send({message: 'We need a contact email package to send the email!'});
  }
  else if(!package.firstName){
    res.status(418).send({message: 'A first name is required'});
  }
  else if(!package.lastName){
    res.status(418).send({message: 'A last name is required'});
  }
  else if(!package.email){
    res.status(418).send({message: 'An email is required'});
  }
  else if(!package.message){
    res.status(418).send({message: 'A message is required'});
  }

  // Check for the optional phone number field
  let phoneNum;
  if(!package.phoneNum){
    phoneNum = "N/A"
  }
  else{
    phoneNum = package.phoneNum;
  }

  // If everything is included, unpack the email package from the front-end
  let firstName = package.firstName;
  let lastName = package.lastName;
  let email = package.email;
  let message = package.message;

  // Define our email msg
  const msg = {
    to: 'nrand02@vt.edu', // Change to your recipient
    from: 'contactMe@em3856.nathanrand.dev', // Change to your verified sender
    subject: 'Portfolio Website Contact Message',
    text: `Name: ${firstName} ${lastName}\n\nEmail: ${email}\nPhone Number: ${phoneNum}\n\nMessage: ${message}`
  }
  
  // Send the email package to my personal email
  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode)
      console.log(response[0].headers)
    })
    .catch((error) => {
      console.error(error)
    })
  
  // Resolve the response
  res.end();
})