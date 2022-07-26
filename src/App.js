import { Home } from "./pages/Home/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@fortawesome/fontawesome-svg-core/styles.css'

function App() {
  //Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);

  //Create Generic MUI Theme for Site
  const theme = createTheme({
    palette: {
      type: 'light',
      primary: {
        main: '#ffffff',
        contrastText: '#000000',
        dark: 'rgb(255, 255, 255)',
      },
      secondary: {
        main: '#f50057',
      },
    },
    typography: {
      fontFamily: "'Montserrat', sans-serif",
    }
  });

  return (
    <Router>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
          <GlobalStyle />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
