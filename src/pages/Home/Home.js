import { Header } from "../../components/Header/Header"
import { PlanetRow } from "../../components/PlanetRow/PlanetRow";
import { HomeContainer } from "./homeStyles"

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
      <PlanetRow></PlanetRow>
      <PlanetRow></PlanetRow>
    </HomeContainer>
  )
}
