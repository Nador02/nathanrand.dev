import { ProjectContainer, TitleRow, Title, DescriptionRow, HomeButton, StyledFontAwesomeIcon, Footer, Description, ImageContainer, Image, ContentContainer, Video} from "./forecatStyles"
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import footerImg from "../../img/Forecat-Footer.png"
import huntsvillePhoto from "../../img/Huntsville-Photo.jpg"

export const Forecat = () => {
    //Defines routing for the return to homepage functionality
    let navigate = useNavigate();
    let buttonOnClick = () => {
        navigate("/");
        window.location.reload(true); //Reload the page when returning home to fix animations to default
    }
    //Defines the header items used within the Home Page's Header
    return (
      <ProjectContainer>
        <TitleRow>
            <HomeButton>
                <StyledFontAwesomeIcon icon={faHouse} onClick={buttonOnClick}/>
            </HomeButton>
            <Title>NASA FORECAT</Title>
        </TitleRow>
        <ContentContainer>
            <DescriptionRow mirrored={false}>
                <Description>
                    During my time with NASA Marshall Space Flight Center's (MSFC) Combustion Devices Branch I had the opportunity to independently develop my own piece of design software. This project was the First Order Rocket Engine Contour Analysis Tool, or FORECAT for short.<br/> <br/> 
                    This tool is intended to provide an easy to use method for designing rocket engine chamber and nozzle contours using the method of characteristics (MOC). The foundation for this project comes from an old software developed in FORTRAN IV by NASA in the 60s that I converted into Python and C, and then began to expand upon with new functionality such as the chamber contours and integrated truncation algorithms.<br/><br/>
                </Description>
                <ImageContainer>
                    <Video src='https://www.youtube.com/embed/GBGBwf8aFH8'
                    frameBorder='0'
                    allow='autoplay; encrypted-media; fullscreen'
                    title='video'/>
                </ImageContainer>
            </DescriptionRow>
            <DescriptionRow mirrored={true}>
                <ImageContainer>
                    <Image src={huntsvillePhoto} alt="Nathan Rand with friend prior to a Half-Marathon" />
                </ImageContainer>
                <Description>
                The shift from an outdated language such as FORTRAN IV to more modern and supported ones like Python and C for the back-end allows for an escape from the plethora of shortcomings that frequently surround legacy code.<br/> <br/> 
                The front-end of this software was developed with JavaScript, HTML, CSS, and Python. This allows for a more flexible and responsive user experience.<br/> <br/> 
                Overall this new software is still a running project, but it already has estimated cost savings for NASA of upwards of $250,000 annually. I plan to return to MSFC in the Summer of 2023 in order to continue my work towards bringing NASA FORECAT to completion.<br/> <br/> 
                </Description>
            </DescriptionRow>
        </ContentContainer>
        <Footer src={footerImg}></Footer>
      </ProjectContainer>
    )
  }