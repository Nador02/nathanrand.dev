import styled from "styled-components";

import { Header } from "../components/Header"

import starryBackground from '../img/Starry-Background-Simple.png'

export const Home = () => {
  //Styling for the Home page component
  const HomeContainer = styled.div`
    width:100%;
    height:100vh;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-image: url(${starryBackground});
    background-size: 100% auto;
    background-repeat:repeat-y;
  `;

  //Defines the header items used within the Home Page's Header
  const headerItems = [
    {
      key:0,
      value:'Home',
      scrollPosition:''
    },
    {
      key:1,
      value:'About Me',
      scrollPosition:''
    },
    {
      key:2,
      value:'Projects',
      scrollPosition:''
    },
    {
      key:3,
      value:'Contact',
      scrollPosition:''
    }
  ];

  return (
    <HomeContainer>
      <Header navItems={headerItems}></Header>
    </HomeContainer>
  )
}
