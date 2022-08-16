import { ContactContainer, FormContainer, InfoContainer, Title,} from "./contactMeStyles"
import { TextField, Button, Box } from "@mui/material"

export const ContactMe = () => {
  return (
    <ContactContainer>
        <FormContainer>
            <Title>Contact Me</Title>
            <TextField id="firstName" label="First Name" variant="filled" name="firstName" color="primary" InputProps={{ style: { fontSize: 18, color:'white', fontWeight:500 } }} InputLabelProps={{ style: { fontSize: 18 } }}></TextField>
            <TextField id="lastName" label="Last Name" variant="filled" name="lastName" InputProps={{ style: { fontSize: 18, color:'white', fontWeight:500 } }} InputLabelProps={{ style: { fontSize: 18 } }}></TextField>
            <TextField id="email" label="Email" variant="filled" name="email" InputProps={{ style: { fontSize: 18, color:'white', fontWeight:500 } }} InputLabelProps={{ style: { fontSize: 18 } }}></TextField>
            <TextField id="phoneNumber" label="Phone Number" variant="filled" name="phoneNumber" InputProps={{ style: { fontSize: 18, color:'white', fontWeight:500 } }} InputLabelProps={{ style: { fontSize: 18 } }}></TextField>
            <TextField id="message" label="Message" variant="filled" name="message" multiline rows={4} style={{gridColumn:'1/3',}} InputProps={{ style: { fontSize: 18, color:'white', fontWeight:500 } }} InputLabelProps={{ style: { fontSize: 18 } }}></TextField>
            <Box sx={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              gridColumn:'1/3',
            }}>
              <Button style={{maxWidth:'100%', minWidth:'100%', maxHeight:'50%', minHeight:'50%', fontSize:'2.25vmin', fontWeight:600,}} variant="contained" size="large">Beam Up The Transpondence</Button>
            </Box>
        </FormContainer>
        <InfoContainer></InfoContainer>
    </ContactContainer>
  )
}
