import { ContactContainer, FormContainer, InfoContainer, Title, InfoContent, SocialsContainer, ContactMedium, SocialsRow} from "./contactMeStyles"
import { TextField, Button, Box } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from "react"

export const ContactMe = () => {
  //Define our font size for MUI components based on screen width
  const smallResolution = useMediaQuery('(max-width:500px)');
  let fontSize = 18;
  if(smallResolution){
    fontSize = 14;
  }
  
  //Define the state for containing our form fields
  let [firstName, setFirstName] = useState('');
  let [lastName, setLastName] = useState('');
  let [email, setEmail] = useState('');
  let [phoneNum, setPhoneNum] = useState('');
  let [message, setMessage] = useState('');
  
  //Tracking variable for if the button has been clicked this session
  let [clicked, setClicked] = useState(false);

  //Define the functionality for when we click "Submit"
  let onSubmit = async function(){
    setClicked(true);

    //Define your JSON object to send to the back end
    let emailPack = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNum: phoneNum,
      message: message,
    }

    //Send the information to the Express backend
    fetch("http://localhost:5000/contact", {
      method: 'POST',
      headers: {
          'Content-Type':'application/json'
      },
      body: JSON.stringify(emailPack)
    });
  }

  return (
    <ContactContainer>
        <FormContainer>
            <Title style={{gridColumn:'1/3', height:'100%'}} >Contact Me</Title>
            <TextField error={firstName === '' && clicked} required id="firstName" label="First Name" variant="filled" name="firstName" color="primary" InputProps={{ style: { fontSize: fontSize, color:'white', fontWeight:500 } }} InputLabelProps={{ style: { fontSize: fontSize } }} onChange={(e) => {setFirstName(e.target.value);}}></TextField>
            <TextField required id="lastName" label="Last Name" variant="filled" name="lastName" InputProps={{ style: { fontSize: fontSize, color:'white', fontWeight:500 } }} InputLabelProps={{ style: { fontSize: fontSize } }} onChange={(e) => {setLastName(e.target.value);}}></TextField>
            <TextField required id="email" label="Email" variant="filled" name="email" InputProps={{ style: { fontSize: fontSize, color:'white', fontWeight:500 } }} InputLabelProps={{ style: { fontSize: fontSize } }} onChange={(e) => {setEmail(e.target.value);}}></TextField>
            <TextField id="phoneNumber" label="Phone Number" variant="filled" name="phoneNumber" InputProps={{ style: { fontSize: fontSize, color:'white', fontWeight:500 } }} InputLabelProps={{ style: { fontSize: fontSize } }} onChange={(e) => {setPhoneNum(e.target.value);}}></TextField>
            <TextField required id="message" label="Message" variant="filled" name="message" multiline rows={3} style={{gridColumn:'1/3',}} InputProps={{ style: { fontSize: fontSize, color:'white', fontWeight:500 } }} InputLabelProps={{ style: { fontSize: fontSize } }} onChange={(e) => {setMessage(e.target.value);}}></TextField>
            <Box sx={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              gridColumn:'1/3',
            }}>
              <Button style={{maxWidth:'100%', minWidth:'100%', maxHeight:'50%', minHeight:'50%', fontSize:'2.25vmin', fontWeight:600,}} variant="contained" size="large" onClick={()=>{onSubmit()}}>Beam Up The Transpondence</Button>
            </Box>
        </FormContainer>
        <InfoContainer>
          <Title style={{fontSize:'1.75vmin'}}>Feel Free to</Title>
          <Title style={{fontSize:'6.5vmin'}}>Reach Out</Title>
          <InfoContent>With anything ranging from work inquiries to just wanting to chat. I am always open to new and exciting things and I love meeting new people! Please, utilize the form to the left or connect with me through any of the following mediums!</InfoContent>
          <SocialsContainer>
            <SocialsRow>
              <FontAwesomeIcon icon={faEnvelope} style={{fontSize:'3.25vmin', color:'white'}}/>
              <ContactMedium>nrand02@vt.edu</ContactMedium>
            </SocialsRow>
            <SocialsRow>
              <FontAwesomeIcon icon={faPhone} style={{fontSize:'3.25vmin', color:'white'}}/>
              <ContactMedium>703-969-3878</ContactMedium>
            </SocialsRow>
            <SocialsRow>
              <FontAwesomeIcon icon={faLinkedin}/>
              <ContactMedium>Connect with me</ContactMedium>
            </SocialsRow>
            <SocialsRow>
              <FontAwesomeIcon icon={faSquareGithub}/>
              <ContactMedium>Check out my repos</ContactMedium>
            </SocialsRow>
          </SocialsContainer>
        </InfoContainer>
    </ContactContainer>
  )
}
