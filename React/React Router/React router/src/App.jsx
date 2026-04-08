import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex justify-center items-center">
        <h1 className="text-3xl font-bold underline bold">
          Hello, React Router!
        </h1>
      </div>
      <nav>
        <ul className="flex justify-center items-center gap-4 mt-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
