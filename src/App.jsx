import { useState } from "react";
import Home from "./pages/Home";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Demoday from "./pages/Demoday";
import MainProjects from "./pages/MainProjects";
function App() {
  return(
  <>
  <Home/>
  <AboutMe/>
  <Skills/>
  <Demoday/>
  <MainProjects/>
  </>
  );
}

export default App;
