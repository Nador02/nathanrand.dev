import { Home } from "./pages/Home/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

function App() {

  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(MotionPathPlugin);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
        <GlobalStyle />
      </div>
    </Router>
  );
}

export default App;
