/*
This is the primary back-end NodeJS code for controlling the contact form within
my personal website. The focus is for communication with the SendGrid API service.

Author: Nathan Rand
Date: 12/26/2022
Version: 1.0
*/

const express = require('express');
const app = express();
const port = 5000;

// Use express JSON middleware
app.use(express.json());

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

app.post('/contact', (req, res) => {
  let { package } = req.body;
  
  if(!package){
    res.status(418).send({message: 'We need a contact email package!'});
  }

  res.status(200).send({
    package: `Our message package contains: ${package.firstName}`
  })
})