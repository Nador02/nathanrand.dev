import styled from "styled-components";

//Styling for the Button Component
export const ButtonContainer = styled.div`
    height:11vmin;
    padding:3vmin 0 0 0;
    box-sizing: border-box;
    width:100%;
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;    
`;

export const ButtonItem = styled.button`
    width:100%;
    height:100%;
    font-size:2.75vmin;
    font-weight:600;
    border-radius:1vmin;
    padding:0 3%;
    box-sizing: border-box;
    background-color: white;
    color:black;

    &:hover{
        cursor:pointer;
    }
`;