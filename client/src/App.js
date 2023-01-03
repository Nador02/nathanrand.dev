import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import { Forecat } from "./pages/NASA/Forecat";
import { Sequoia } from "./pages/Sequoia/Sequoia";
import { Banavity } from "./pages/Banavity/Banavity";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop"
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
      <ScrollToTop />
      <div className="App">
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/forecat" element={<Forecat />}/>
            <Route path="/sequoia" element={<Sequoia />}/>
            <Route path="/banavity" element={<Banavity />}/>
          </Routes>
          <GlobalStyle />
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
