import React from "react";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./components/Photo";
import Profile from "./components/Profile";
import NavBar from "./components/NavBar";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";

library.add(fab);

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Profile></Profile>
      <Education></Education>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </div>
  );
}

export default App;
