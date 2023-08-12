import { ProjectContainer, TitleRow, Title, DescriptionRow, HomeButton, StyledFontAwesomeIcon, Footer, Description, ImageContainer, Image, ContentContainer} from "./forecatStyles"
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import footerImg from "../../img/Forecat-Footer.png"
import huntsvillePhoto from "../../img/Huntsville-Photo.jpg"
import FIREScreenshot from "../../img/FIRE_Screenshot.png"

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
            <Title>NASA FIRE</Title>
        </TitleRow>
        <ContentContainer>
            <DescriptionRow mirrored={false}>
                <Description>
                    During my time with NASA Marshall Space Flight Center's (MSFC) Combustion Devices Branch I had the opportunity to independently develop my own piece of design software. This project was the Fast Iterative Rocket Engine Optimizer (FIRE-Optimizer).<br/> <br/> 
                    This tool is intended to provide an automated and optimized method for the first order design of rocket engine chambers and nozzles. Originally programmed in FORTRAN IV, I have converted it to Python/C along with adding functionality like chambers, truncation, and performance calculations!<br/><br/>
                </Description>
                <ImageContainer>
                    <Image src={FIREScreenshot} alt="Homepage screenshot of the FORECAT Software" />
                </ImageContainer>
            </DescriptionRow>
            <DescriptionRow mirrored={true}>
                <ImageContainer>
                    <Image src={huntsvillePhoto} alt="Nathan Rand with friend prior to a Half-Marathon" />
                </ImageContainer>
                <Description>
                The shift from outdated legacy algorithms and jumbled Excel sheets to a centralized and modern software package developed in Python was one of the primary goals of this project.<br/> <br/> 
                The front-end of this software was developed with Electron and React. This allows for a more flexible and responsive user experience as well as a modern ecosystem of front-end libaries.<br/> <br/> 
                Overall this new software is still a running project, but it already has estimated cost savings for NASA of upwards of $180,000 annually. I plan to return to MSFC in the Summer of 2024 in order to continue my work towards bringing NASA FIRE to completion.<br/> <br/> 
                </Description>
            </DescriptionRow>
        </ContentContainer>
        <Footer src={footerImg}></Footer>
      </ProjectContainer>
    )
  }