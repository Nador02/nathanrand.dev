import styled from "styled-components";

//Styling for the contact me section
export const ContactContainer = styled.div`
height:65vh;
width:100%;
display:grid;
grid-template-columns:60% 40%;
background-color:#67C167;
`;

export const FormContainer = styled.form`
width:100%;
height:100%;
padding:0 5% 5% 10%;
box-sizing:border-box;
display:grid;
grid-template-columns:50% 50%;
grid-template-rows: 22.5% 15% 15% 20% 20%;
column-gap:5%;
`;

export const InfoContainer = styled.div`
width:100%;
height:100%;
`;

export const Title = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:flex-start;
align-items:center;
grid-column:1/3;
font-size:8vmin;
color:white;
font-weight:600;
`