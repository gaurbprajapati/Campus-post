import React from "react";
import IndexPage from "./Pages/Home/IndexPage.jsx";
import NavBar from "./Pages/Home/NavBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sportclub from "./club/Sportsclub.jsx";
import AboutUs from "./Pages/Home/AboutUs.jsx";
import Resource from "./resources/Resource.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/sportsclub" element={<Sportclub />} />
          <Route path="/Home" element={<IndexPage />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Resources" element={<Resource />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
