import { ContactContainer, FormContainer, InfoContainer, Title, InfoContent, SocialsContainer, ContactMedium, SocialsRow} from "./contactMeStyles"
import { TextField, Button, Box } from "@mui/material"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import useMediaQuery from '@mui/material/useMediaQuery';

export const ContactMe = () => {
  //Define our font size for MUI components based on screen width
  const smallResolution = useMediaQuery('(max-width:500px)');
  let fontSize = 18;
  if(smallResolution){
    fontSize = 14;
  }
  return (
    <ContactContainer>
        <FormContainer>
            <Title style={{gridColumn:'1/3', height:'100%'}} >Contact Me</Title>
            <TextField id="firstName" label="First Name" variant="filled" name="firstName" color="primary" InputProps={{ style: { fontSize: fontSize, color:'white', fontWeight:500 } }} InputLabelProps={{ style: { fontSize: fontSize } }}></TextField>
            <TextField id="lastName" label="Last Name" variant="filled" name="lastName" InputProps={{ style: { fontSize: fontSize, color:'white', fontWeight:500 } }} InputLabelProps={{ style: { fontSize: fontSize } }}></TextField>
            <TextField id="email" label="Email" variant="filled" name="email" InputProps={{ style: { fontSize: fontSize, color:'white', fontWeight:500 } }} InputLabelProps={{ style: { fontSize: fontSize } }}></TextField>
            <TextField id="phoneNumber" label="Phone Number" variant="filled" name="phoneNumber" InputProps={{ style: { fontSize: fontSize, color:'white', fontWeight:500 } }} InputLabelProps={{ style: { fontSize: fontSize } }}></TextField>
            <TextField id="message" label="Message" variant="filled" name="message" multiline rows={3} style={{gridColumn:'1/3',}} InputProps={{ style: { fontSize: fontSize, color:'white', fontWeight:500 } }} InputLabelProps={{ style: { fontSize: fontSize } }}></TextField>
            <Box sx={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              gridColumn:'1/3',
            }}>
              <Button style={{maxWidth:'100%', minWidth:'100%', maxHeight:'50%', minHeight:'50%', fontSize:'2.25vmin', fontWeight:600,}} variant="contained" size="large">Beam Up The Transpondence</Button>
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
