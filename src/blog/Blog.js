import * as React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import Footer from "./Footer";
// imoprt pages
import Home from "./pages/Home/Home";
import Basic from "./pages/Basic/Basic";
import Culture from "./pages/Culture/Culture";
import Education from "./pages/Education/Education";
import Habit from "./pages/Habit/Habit";
import Project from "./pages/Project/Project";
import Ramble from "./pages/Ramble/Ramble";
import Skill from "./pages/Skill/Skill";
// =============

const sections = [
  { title: "Basic", url: "#/Basic" },
  { title: "Culture", url: "#/Culture" },
  { title: "Education", url: "#/Education" },
  { title: "Skill", url: "#/Skills" },
  { title: "Project", url: "#Projects" },
  { title: "Ramble", url: "#Ramble" },
  { title: "Habit", url: "#/Habit" },
];

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Shawn's Blog" sections={sections} />
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Basic" element={<Basic />} />
            <Route exact path="/Culture" element={<Culture/>} />
            <Route exact path="/Education" element={<Education/>} />
            <Route exact path="/Habit" element={<Habit/>} />
            <Route exact path="/Project" element={<Project/>} />
            <Route exact path="/Ramble" element={<Ramble/>} />
            <Route exact path="/Skill" element={<Skill/>} />
          </Routes>
        </HashRouter>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
