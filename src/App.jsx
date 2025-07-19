import { useState } from "react";
import Home from "./pages/Home";
import "./App.css";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import Demoday from "./pages/Demoday";
import MainProjects from "./pages/MainProjects";
import Contact from "./pages/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Home />
      <AboutMe />
      <Skills />
      <Demoday />
      <MainProjects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
