import styled from "styled-components";
import starryBackground from '../../img/Starry-Background-Simple.png'
import atmosphereBackground from '../../img/Stars-To-Atmosphere-Background.png'

//Styling for the Home page component
export const HomeContainer = styled.div`
position:relative;
width:100%;
height:fit-content;
display:flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
background-image: url(${starryBackground});
background-size: 100% auto;
background-repeat:repeat-y;
`;

export const FooterContainer = styled.div`
width:100%;
height:180vh;
@media screen (max-width: 1200px) and (min-width:500px){
    grid-template-columns:100%;
    grid-template-rows:65% 35%;
    height:235vh;
}
@media (max-width:500 px){
    grid-template-columns:100%;
    grid-template-rows:65% 35%;
    height:240vh;
}
display:flex;
flex-direction:column;
justify-content:flex-end;
align-items:center;
background-image: url(${atmosphereBackground});
background-size:100% 100%;
background-repeat: no-repeat;
`;

export const LandingSurface = styled.img`
width:100%;
height:auto;
z-index:10;
`;