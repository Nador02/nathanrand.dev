import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import starryBackground from '../../img/Starry-Background-Simple.png'

export const AboutContainer = styled.div`
position:relative;
width:100%;
height:fit-content;
display:flex;
flex-direction: column;s
justify-content: flex-start;
align-items: center;
background-image: url(${starryBackground});
background-size: 100% auto;
background-repeat:repeat-y;
`;

export const TitleRow = styled.div`
width:100%;
height:15vh;
display:grid;
grid-template-columns: 10% 20% 40% 20% 10%;
@media (max-width:500px){
    height:7.5vh;
    grid-template-columns: 10% 80% 10%;
}
`;

export const HomeButton = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:start;
align-items:start;
padding:20%;
color:white;
font-size:4vmin;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color:white;
    font-size:4vmin;
    &:hover {
        font-size:4.25vmin;
        font-weight:300;
        cursor:pointer;
      }
`;

export const Title = styled.div`
font-size:3vmin;
font-weight:200;
text-decoration:none;
color:white;
display:flex;
justify-content:center;
align-items:top;
padding:2.5%;
font-weight:600;
font-size:8vmin;
background-color:black;
grid-column: 3/4;
@media (max-width:500px){
    grid-column: 2/3;
}
`;

export const DescriptionRow = styled.div`
width: 100%;
height:90vh;
@media (max-width:500px){
    height:60vh;
}
`;

export const Footer = styled.img`
width:100%;
height:auto;
z-index:10;
`;