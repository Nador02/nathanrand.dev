import styled from "styled-components";

//Styling for the planet row component
export const PlanetRowContainer = styled.div`
    width:100%;
    display:grid;
    height:90vh;
    max-height:90vh;
    grid-template-columns:3.5% 42.5% 8% 42.5% 3.5%;
    grid-template-rows: 100%;
`;

export const Content = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    grid-column: ${props => props.mirrored ? '4/5' : '2/3'};
`;

export const Graphics = styled.div`
    position:relative;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: ${props => props.mirrored ? 'flex-start' : 'flex-end'};
    grid-column: ${props => props.mirrored ? '2/3' : '4/5'};
    grid-row:1/2;
`;

export const TopText = styled.div`
    width:100%;
    height:auto;
    color:white;
    background-color:black;
    font-size:2.25vmin;
    font-weight:300;
`;

export const MiddleText = styled.div`
    width:100%;
    height:auto;
    color:white;
    background-color:black;
    font-size: ${props => {return props.fontSize}};
    font-weight:600;
`;

export const BottomText = styled.div`
    width:100%;
    height:auto;
    color:white;
    background-color:black;
    font-size:2.5vmin;
    font-weight:300;
`;

export const Planet = styled.img`
    width:80%;
    height:auto;
    padding: 0 5%;
    box-sizing: border-box;
`;