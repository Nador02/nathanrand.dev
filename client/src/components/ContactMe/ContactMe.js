import { ContactContainer, InfoContainer, Title, InfoContent, SocialsContainer, ContactMedium, SocialsRow} from "./contactMeStyles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone} from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export const ContactMe = () => {

  return (
    <ContactContainer>
        <InfoContainer>
          <Title style={{fontSize:'2vmin'}}>Feel Free to</Title>
          <Title style={{fontSize:'6.5vmin'}}>Reach Out</Title>
          <InfoContent>With anything ranging from work inquiries to just wanting to chat. I am always open to new and exciting things and I love meeting new people! Please, utilize the form to the left or connect with me through any of the following mediums!</InfoContent>
          <SocialsContainer>
            <SocialsRow>
              <FontAwesomeIcon icon={faEnvelope} style={{fontSize:'3.25vmin', color:'white'}}/>
              <ContactMedium>nrand02@vt.edu</ContactMedium>
            </SocialsRow>
            <SocialsRow>
              <FontAwesomeIcon icon={faPhone} style={{fontSize:'3.25vmin', color:'white'}}/>
              <ContactMedium>(703) 969-3878</ContactMedium>
            </SocialsRow>
            <SocialsRow>
              <a href="https://www.linkedin.com/in/nrand/" style={{color:'white'}}>
              <FontAwesomeIcon icon={faLinkedin}/>
              </a>
              <ContactMedium>Connect with me</ContactMedium>
            </SocialsRow>
            <SocialsRow>
              <a href="https://github.com/Nador02" style={{color:'white'}}>
              <FontAwesomeIcon icon={faSquareGithub}/>
              </a>
              <ContactMedium>Check out my repos</ContactMedium>
            </SocialsRow>
          </SocialsContainer>
        </InfoContainer>
    </ContactContainer>
  )
}
