import { useState, useRef, useEffect } from "react"
import { Header } from "../../components/Header/Header"
import { PlanetRow } from "../../components/PlanetRow/PlanetRow";
import { Rocket } from "../../components/Rocket/Rocket";
import { HomeContainer, FooterContainer, LandingSurface, ContactExample} from "./homeStyles"
import Earth from "../../img/Earth.png"
import AboutMePlanet from "../../img/About-Me-Planet.png"
import SpaceStation from "../../img/Space-Station.png"
import ForecatPlanet from "../../img/Forecat-Planet.png"
import SequoiaPlanet from "../../img/Sequoia-Planet.png"
import BanavityPlanet from "../../img/Banavity-Planet.png"
import landingGround from "../../img/Landing-Surface.png"

export const Home = () => {
  let landingElement = useRef(null);
  let [landingSurfaceTop, setLandingSurfaceTop] = useState(0);
  let [landingSurfaceBottom, setLandingSurfaceBottom] = useState(0);
  useEffect(() => {
    setLandingSurfaceTop(2);
    setLandingSurfaceBottom(3);
  }, []);
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
      <Rocket landingSurfaceTop={landingSurfaceTop} landingSurfaceBottom={landingSurfaceBottom}></Rocket>
      <PlanetRow topTextContent="Hello there! My name is" middleTextContent="Nathan Rand" bottomTextContent="I am an aerospace engineer and full-stack developer who loves getting involved in groundbreaking and seemingly impossible projects. Feel free to look around at my work and reach out if you think that we could help each other!" planet={Earth}></PlanetRow>
      <PlanetRow topTextContent="So this part is all..." middleTextContent="About Me" bottomTextContent="Here's where you can find out about what I'm good at, where my experience lies, and what I love to do. This is me in full, a picture of what I will bring to any team I am apart of." mirrored={true} planet={AboutMePlanet} buttonContent="Initiate Landing Sequence" buttonPath="/about"></PlanetRow>
      <PlanetRow topTextContent="Now we can look at the good stuff..." middleTextContent="My Projects" bottomTextContent="These are the things that I have really put my all into, hopefully it will give you a taste of the unique skillset that I can bring to any team. To check some of them out, just keep on scrolling down!" planet={SpaceStation}></PlanetRow>
      <PlanetRow topTextContent="Over the Summer of 2022 I worked on..." middleTextContent="NASA FORECAT" bottomTextContent="Oh Boom Rocket go boom lol I make rocket." mirrored={true} planet={ForecatPlanet} buttonContent="Toggle Retro Boosters for Re-Entry" buttonPath="/about"></PlanetRow>
      <PlanetRow topTextContent="Another Project I worked on in the Summer of 2022 was..." middleTextContent="Sequoia Canopy" bottomTextContent="Teehee I made silly little website with Angular :P" planet={SequoiaPlanet} buttonContent="Prepare the Jump Drives" buttonPath="/about"></PlanetRow>
      <PlanetRow topTextContent="Something I am currently involved with is..." middleTextContent="Banavity" bottomTextContent="Banana company Banana company lololol" mirrored={true} planet={BanavityPlanet} buttonContent="Buckle Your Seatbelts!" buttonPath="/about"></PlanetRow>
      <FooterContainer>
        <LandingSurface src={landingGround} ref={landingElement}></LandingSurface>
        <ContactExample></ContactExample>
      </FooterContainer>
    </HomeContainer>
  )
}
