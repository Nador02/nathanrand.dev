import { AboutContainer, TitleRow, DescriptionRow, HomeButton, StyledFontAwesomeIcon, Footer} from "./aboutStyles"
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import footerImg from "../../img/About-Me-Footer.png"

export const About = () => {
    ScrollTrigger.disable();
    //Defines routing for the return to homepage functionality
    let navigate = useNavigate();
    let buttonOnClick = () => {
        navigate("/");
        window.location.reload(true); //Reload the page when returning home to fix animations to default
    }
    //Defines the header items used within the Home Page's Header
    return (
      <AboutContainer>
        <TitleRow>
            <HomeButton>
                <StyledFontAwesomeIcon icon={faHouse} onClick={buttonOnClick}/>
            </HomeButton>
        </TitleRow>
        <DescriptionRow>
        </DescriptionRow>
        <DescriptionRow>
        </DescriptionRow>
            <Footer src={footerImg}></Footer>
      </AboutContainer>
    )
  }