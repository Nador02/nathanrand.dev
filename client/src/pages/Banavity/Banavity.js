import { ProjectContainer, TitleRow, Title, DescriptionRow, HomeButton, StyledFontAwesomeIcon, Footer, Description, ImageContainer, Image, ContentContainer, Video} from "./banavityStyles"
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import footerImg from "../../img/Banavity-Footer.png"
import teamPhoto from "../../img/Banavity-Team.JPG"
import kickstartPhoto from "../../img/Banavity-Kickstart.jpg"

export const Banavity = () => {
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
            <Title>Banavity</Title>
        </TitleRow>
        <ContentContainer>
            <DescriptionRow mirrored={false}>
                <Description>
                    Learning physics for most people is incredibly difficult, be it your first physics class in high school or your dynamics course as a part of your engineering degree. There are not many resources available out there to effectively provide alternative routes to understanding. <br/> <br/> 
                    With this in mind, during the Spring of 2022 myself and 6 other students at Virginia Tech, from a variety of disciplines, embarked on a journey to create an interactive physics sandbox web-application to solve this very problem. We began to eagerly learn everything we needed to know in order to put together the pieces towards developing our vision.
                </Description>
                <ImageContainer>
                    <Video src='https://www.youtube.com/embed/WSowOTIe6iE'
                    frameBorder='0'
                    allow='autoplay; encrypted-media; fullscreen'
                    title='video'/>
                </ImageContainer>
            </DescriptionRow>
            <DescriptionRow mirrored={true}>
                <ImageContainer>
                    <Image src={teamPhoto} alt="The Banavity Team" />
                </ImageContainer>
                <Description>
                We selected the Vue framework with an Express back-end for the foundation of our application. Utilizing a JavaScript based physics engine called MatterJS and a graphics package called P5, we had all the tools we needed to get started putting all the pieces together.<br/> <br/> 
                The goal is to create a space where students could recreate their unique problems with the items provided. Then, by clicking play, the students can actually see what would happen in their problem and then be able to gain access to a set of steps and solutions to the underlying physics. Integrating in guided video examples would allow us to create a completely comprehensive learning environment that is directly tailored to all types of learners.<br/> <br/> 
                </Description>
            </DescriptionRow>
            <DescriptionRow mirrored={false}>
                <Description>
                    In the Fall of 2022, Banavity received a seed grant from Kickstart VT, which is a program that provides funding to startups made by current students at Virginia Tech. This was a great moment for our team as we received not just critical funding but invaluable advice on where to take Banavity next.<br/> <br/> 
                    While Banavity is still in development and isn't ready to be shared with everybody, we are still very excited about how far we have come and the road ahead. The experience that I have gained from leading this team of my peers and some of my closest friends has been incredible and has made the project a success regardless of the result of Banavity from a business perspective. I am incredibly excited for what we will do in 2023 and cannot wait to tackle the next problem we face with the team.<br/><br/>
                </Description>
                <ImageContainer>
                    <Image src={kickstartPhoto} alt="The Banavity team receiving their $500 grant money for their startup from Kickstart VT" />
                </ImageContainer>
            </DescriptionRow>
        </ContentContainer>
        <Footer src={footerImg}></Footer>
      </ProjectContainer>
    )
  }