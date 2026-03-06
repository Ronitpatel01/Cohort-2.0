import React from "react";
import Nav from "./components/nav";
import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
    </div>
  );
};

export default App;
