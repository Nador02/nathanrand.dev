import styled from "styled-components";

//Styling for the contact me section
export const ContactContainer = styled.div`
height:65vh;
width:100%;
display:grid;
grid-template-columns:65% 35%;
@media screen (max-width: 1200px) and (min-width: 500px){
    grid-template-columns:100%;
    grid-template-rows:65% 35%;
    height:120vh;
}
@media (max-width: 500px){
    grid-template-columns:100%;
    grid-template-rows:65% 35%;
    height:100vh;
}
background-color:#67C167;
`;

export const FormContainer = styled.form`
width:100%;
height:100%;
padding:0 5% 5% 10%;
@media (max-width: 1200px){
    padding: 5% 0 0 5%;
}
box-sizing:border-box;
display:grid;
grid-template-columns:45% 45%;
grid-template-rows: 22.5% 15% 15% 20% 27.5%;
column-gap:5%;
`;

export const InfoContainer = styled.div`
width:100%;
height:100%;
padding:0 7.5%;
@media (max-width: 1200px){
    padding:0 5%;
}
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
`

export const InfoContent = styled.div`
width:100%;
height:fit-content;
padding: 2% 0;
font-size:2.25vmin;
font-weight:400;
color:white;
`;

export const SocialsContainer = styled.div`
width:100%;
height:22%;
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
font-weight:400,
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
`;