import { Header } from "../../components/Header/Header"
import { PlanetRow } from "../../components/PlanetRow/PlanetRow";
import { HomeContainer } from "./homeStyles"
import Earth from "../../img/Earth.png"
import AboutMePlanet from "../../img/About-Me-Planet.png"

export const Home = () => {
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
      <PlanetRow topTextContent="Hello there! My name is" middleTextContent="Nathan Rand" bottomTextContent="I am an aerospace engineer and full-stack developer who loves getting involved in groundbreaking and seemingly impossible projects. Feel free to look around at my work and reach out if you think that we could help each other!" planet={Earth}></PlanetRow>
      <PlanetRow topTextContent="So this part is all..." middleTextContent="About Me" bottomTextContent="Here's where you can find out about what I'm good at, where my experience lies, and what I love to do. This is me in full, a picture of what I will bring to any team I am apart of." mirrored={true} planet={AboutMePlanet} buttonContent="Initiate Landing Sequence" buttonPath="/about"></PlanetRow>
    </HomeContainer>
  )
}
