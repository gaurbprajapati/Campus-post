import React, { useEffect } from "react";
import IndexPage from "./Pages/Home/IndexPage.jsx";
import NavBar from "./Pages/Home/NavBar.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import Sportclub from "./club/Sportsclub.jsx";
import AboutUs from "./Components/About Us/AboutUs.jsx";

import Resource from "./Components/resources/Resource.jsx";
import ErrorPage from "./Components/ErrorPage/ErrorPage.jsx";
import ContactForm from "./Components/ContactForm/ContactForm.jsx";
import Footer from "./Components/Footer/Footer.js";
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <NavBar />
      <div style={{ minHeight: "90vh" }}>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/sportsclub" element={<Sportclub />} />
          <Route path="/Home" element={<IndexPage />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Resources" element={<Resource />} />
          <Route path="/Contact" element={<ContactForm />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
