import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./App.css"

import Header from "./Components/Header/Header"

import HomePage from "./Pages/HomePage/HomePage";
import CharacterPage from "./Pages/CharacterPage/CharacterPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import NCharacterPage from "./Pages/CharacterPage/NCharacterPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div id="div-header">
          <div id="menu">
            <Header/>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          {<Route path="/character/:specie" element={<CharacterPage/>}/>}
          {<Route path="/Ncharacter/:specie" element={<NCharacterPage/>}/>}
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App