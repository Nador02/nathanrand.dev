import { ProjectContainer, TitleRow, Title, DescriptionRow, HomeButton, StyledFontAwesomeIcon, Footer, Description, ImageContainer, Image, ContentContainer, Video} from "./sequoiaStyles"
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import footerImg from "../../img/Sequoia-Footer.png"
import teamPhoto from "../../img/Sequoia-Team.png"

export const Sequoia = () => {
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
            <Title>Sequoia Canopy</Title>
        </TitleRow>
        <ContentContainer>
            <DescriptionRow mirrored={false}>
                <Description>
                    During the Summer of 2022, I worked with 5 other interns at Sequoia Holdings to autonomously develop a full-stack web application from scratch.<br/> <br/> 
                    The application's purpose is to create an environment in which people can store, modify, and easily access data surrounding their contracts, services, and conferences. It was developed primarily with MySQL, Express, Angular, and NodeJS (a modified MEAN stack).<br/><br/>
                    My primary focus and contribution lied in the front-end development, working extensively with TypeScript in the Angular framework to create a user-friendly and efficient environment for users.
                </Description>
                <ImageContainer>
                    <Video src='https://www.youtube.com/embed/bMe73kxsjk4'
                    frameBorder='0'
                    allow='autoplay; encrypted-media; fullscreen'
                    title='video'/>
                </ImageContainer>
            </DescriptionRow>
            <DescriptionRow mirrored={true}>
                <ImageContainer>
                    <Image src={teamPhoto} alt="Nathan Rand with friend prior to a Half-Marathon" />
                </ImageContainer>
                <Description>
                This project really marked my first dive into web-development, with no prior Angular knowledge the experience was that much more valuable.<br/> <br/> 
                As the 6 of us worked almost completely alone we had to learn all the intricacies that come with dividing up a large project, along with ensuring that the end product (in this case the front-end, back-end, and database) all work together seamlessly. While I developed more programming knowledge then I ever had before at Sequoia, I think that the advancement of my communication and teamwork skills was by far the most rewarding result of the work.<br/> <br/>
                I am beyond excited to return with a good portion of the intern team in the Summer of 2023 to continue work on Sequoia Canopy!
                </Description>
            </DescriptionRow>
        </ContentContainer>
        <Footer src={footerImg}></Footer>
      </ProjectContainer>
    )
  }