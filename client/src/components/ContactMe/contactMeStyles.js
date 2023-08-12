import styled from "styled-components";

//Styling for the contact me section
export const ContactContainer = styled.div`
height:375px;
width:100%;
background-color:#67C167;
`;

export const InfoContainer = styled.div`
width:100%;
height:100%;
padding:2.5% 5%;
box-sizing:border-box;
display:flex;
flex-direction:column;
justify-content:center;
align-content:center;
`;

export const Title = styled.div`
width:100%;
height:fit-content;
display:flex;
justify-content:flex-start;
align-items:center;
font-size:8vmin;
color:white;
font-weight:600;
@media(max-width:500px){
    font-size:10vmin;
}
`

export const InfoContent = styled.div`
width:100%;
height:fit-content;
padding: 2% 0;
font-size:2.25vmin;
font-weight:400;
color:white;
@media(max-width:500px){
    font-size:3vmin;
}
`;

export const SocialsContainer = styled.div`
width:100%;
height:40%;
display:grid;
grid-template-columns: 50% 50%;
grid-template-rows: 47.5% 47.5%;
@media (max-width: 1200px){
    grid-template-rows:50% 50%;
    grid-template-columns:65% 35%;
    padding:0;
}
row-gap:2%;
column-gap:5%;
font-size:2.25vmin;
font-weight:400;
color:white;
`

export const ContactMedium = styled.div`
width:fit-content;
height:100%;
padding:0 0 0 7.5%;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
font-size:2.25vmin;
font-weight:400;
color:white;
@media(max-width:500px){
    font-size:3vmin;
}
`;

export const SocialsRow = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:flex-start;
align-items:center;
flex-direction:row;
font-size:4.25vmin;
color:white;
@media(max-width:500px){
    font-size:5vmin;
}
`;