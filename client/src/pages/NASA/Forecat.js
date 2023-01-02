import { ProjectContainer, TitleRow, Title, DescriptionRow, HomeButton, StyledFontAwesomeIcon, Footer, Description, ImageContainer, Image, ContentContainer} from "./forecatStyles"
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import footerImg from "../../img/Forecat-Footer.png"
import volleyballPhoto from "../../img/Volleyball-Picture.jpg"
import halfPhoto from "../../img/Half-Marathon.jpg"

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
            <DescriptionRow>
                <Description>
                    My name is Nathan Rand and I grew up and currently reside in a small town called Round Hill, VA. I am currently studying Aerospace Engineering at Virginia Tech in Blacksburg, VA. <br/> <br/> 
                    I really enjoy working on projects at the intersection of Aerospace and Software engineering, especially those with space applications (like my current focus of Nozzle Design with a variety of techniques ranging from mathematical characteristics to neural networks). While this subject matter is something I am very passionate about, what I value more is working on a team of exciting and similarly driven people.<br/><br/>
                </Description>
                <ImageContainer>
                    <Image src={volleyballPhoto} alt="Nathan Rand with a Volleyball" />
                </ImageContainer>
            </DescriptionRow>
            <DescriptionRow>
                <ImageContainer>
                    <Image src={halfPhoto} alt="Nathan Rand with friend prior to a Half-Marathon" />
                </ImageContainer>
                <Description>
                Outside of my professional and academic career I like to spend time with friends and family along with doing some of my various hobbies. <br/> <br/> 
                Some of my main hobbies include board games (current favorite is Terraforming Mars or Catan), baking, coding, reading, soccer, volleyball, and lifting. I am always excited to try new things with friends and add new hobbies that I love to this list! <br/> <br/> 
                Another program I am apart of involves running Virginia Tech's Engineering Volleyball League, where each Engineering major plays it off in a college wide tournament. This has been a great opportunity for me to meet people from a ton of different backgrounds and have some good fun leading Aerospace to the finals in 2022 (and hopefully a championship title in Spring 2023)!
                </Description>
            </DescriptionRow>
        </ContentContainer>
        <Footer src={footerImg}></Footer>
      </ProjectContainer>
    )
  }