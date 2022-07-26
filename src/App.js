import { Home } from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { createGlobalStyle } from 'styled-components'

function App() {
  const GlobalStyle = createGlobalStyle`
    body, html {
      top:0;
      left:0;
      padding:0;
      margin:0;
      width:100vw;
      max-width:100vw;
      height:fit-content;
      padding:0;
      margin:0;
      font-family: 'Montserrat', sans-serif;
      overflow-x:hidden;
      overflow-y:auto;
    }

    #root{
      width:100%;
      height:100%;
    }

    .App{
      width:100%;
      height:100%;
    }
  `;

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
