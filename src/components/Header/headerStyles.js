import styled from "styled-components";

//Styling for the Header Component
export const HeaderContainer = styled.div`
width:100%;
height:10vh;
max-height:10vh;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
`;

export const NavItem = styled.div`
width:15%;
height:100%;
padding: 0 3%;
box-sizing: border-box;
display:flex;
justify-content: center;
align-items: center;
font-size:3vmin;
font-weight:200;
text-decoration:none;
color:white;
background-color:black;
transition: font-size 150ms ease-in-out, font-weight 150ms ease-in-out;
&:hover {
  font-size:3.25vmin;
  font-weight:300;
  cursor:pointer;
}
`;