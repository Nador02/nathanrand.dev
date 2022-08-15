import { ContactContainer, FormContainer, InfoContainer, Title } from "./contactMeStyles"
import { TextField } from "@mui/material"
import { Button } from "../Button/Button"

export const ContactMe = () => {
  return (
    <ContactContainer>
        <FormContainer>
            <Title>Contact Me</Title>
            <TextField id="firstName" label="First Name" variant="outlined" name="firstName"></TextField>
            <TextField id="lastName" label="Last Name" variant="outlined" name="lastName"></TextField>
            <TextField id="email" label="Email" variant="outlined" name="email"></TextField>
            <TextField id="phoneNumber" label="Phone Number" variant="outlined" name="phoneNumber"></TextField>
            <TextField id="message" label="Message" variant="outlined" name="message" multiline rows={4} style={{gridColumn:'1/3',}}></TextField>
            <Button textContent="Beam Up The Transpodence"></Button>
        </FormContainer>
        <InfoContainer></InfoContainer>
    </ContactContainer>
  )
}
