import styled from "styled-components";
import starryBackground from '../../img/Starry-Background-Simple.png'

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