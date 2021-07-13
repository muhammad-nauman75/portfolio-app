import "./App.css";
import styled from "styled-components";
import Topbar from "./Components/Navigation/Topbar";
import { useState } from "react";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import ScrollBack from "./Components/ScrollBack";
import Footer from "./Components/Footer/Footer";

function App() {
  const [manuOpen, setManuOpen] = useState(false);
  return (
    <DivStyled>
      <Topbar manuOpen={manuOpen} setManuOpen={setManuOpen} />
      <ScrollBack showBelow={250} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </DivStyled>
  );
}
const DivStyled = styled.div``;

export default App;
