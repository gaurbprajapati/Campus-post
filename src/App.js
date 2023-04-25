import React from "react";
import IndexPage from "./Pages/Home/IndexPage.js";
import NavBar from "./Pages/Home/NavBar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sportclub from "./club/Sportsclub.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/sportsclub" element={<Sportclub />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
