import React from "react";
import Nav from "./NAV/Nav.jsx";
import Intro from "./intro/Myintro.jsx";
import Skill from "./skils/Skill.jsx";
import Gallery from "./Gallery/Gallery.jsx";
import Edu from "./Education/Edu.jsx";
import Project from "./Project/Project.jsx";
import Contact from "./Contact/Contactheader.jsx";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { themeContext } from "../Context.js";
import { useContext } from "react";
const App = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <BrowserRouter>
        <div
          className="App"
          style={{
            background: darkMode ? "#1F1F1F" : "",
            color: darkMode ? "white" : "",
          }}
        >
          <Nav></Nav>
          <Routes>
            <Route exact path="/" element={<Intro />}></Route>
            <Route exact path="/education" element={<Edu />}></Route>
            <Route exact path="/skill" element={<Skill />}></Route>
            <Route exact path="/gallery" element={<Gallery />}></Route>
            <Route exact path="/project" element={<Project />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
          <Edu></Edu>
          <Skill></Skill>
          <Gallery></Gallery>
          <Project></Project>
          <Contact></Contact>
        </div>
      </BrowserRouter>
    </>
  );
};
export default App;
