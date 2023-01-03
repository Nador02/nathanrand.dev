import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import starryBackground from '../../img/Starry-Background-Simple.png'

export const ProjectContainer = styled.div`
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
@media only screen and (max-width: 1200px) and (min-width: 500px){
    grid-template-columns: 10% 80% 10%;
}
@media (max-width: 500px){
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
box-sizing:border-box;
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
@media (max-width:1200px){
    grid-column: 2/3;
}
`;

export const ContentContainer = styled.div`
width:100%;
height:fit-content;
padding:0 5%;
box-sizing:border-box;
`;

export const DescriptionRow = styled.div`
width: 100%;
height: fit-content;
max-height: fit-content;
display:flex;
padding:0 0 2.5vh 0;
justify-content: space-between;
align-items:center;
box-sizing: border-box;
@media (max-width:1000px){
    flex-direction: ${props => props.mirrored ? 'column-reverse' : 'column'};
    justify-content:center;
    align-items:space-between;
}
`;

export const Description = styled.div`
flex:1;
height:fit-content;
font-size: 2.5vmin;
font-weight:200;
color:white;
display:flex;
justify-content:start;
align-items:center;
background-color:black;
@media (max-width:500px){
    font-size: 3vmin;
}
`;

export const ImageContainer = styled.div`
height:100%;
width:fit-content;
display:flex;
justify-content: center;
align-items:center;
padding: 2.5%;
box-sizing:border-box;
`;

export const Image = styled.img`
max-height:50vh;
max-width:100%;
@media (max-width: 500px){
    max-height:25vh;
}
`;

export const Footer = styled.img`
padding:5% 0 0 0;
width:100%;
height:auto;
z-index:10;
`;