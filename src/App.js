import { Home } from "./pages/Home/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { GlobalStyle } from "./globalStyles";

function App() {

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
