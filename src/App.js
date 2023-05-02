import React, { useEffect } from "react";
import IndexPage from "./Pages/Home/IndexPage.jsx";
import NavBar from "./Pages/Home/NavBar.jsx";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Sportclub from "./club/Sportsclub.jsx";
import AboutUs from "./Pages/Home/AboutUs.jsx";
// import Footer from "./Components/Footer/Footer.js";
import Resource from "./Components/resources/Resource.jsx";
// function ScrollToTop() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     const scrollHandler = () => window.scrollTo(0, 0);
//     navigate(scrollHandler);
//   }, [navigate]);

//   return null;
// }

function App() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const scrollHandler = () => window.scrollTo(0, 0);
  //   console.log("chutiya");
  //   navigate(scrollHandler);
  // }, [navigate]);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/sportsclub" element={<Sportclub />} />
        <Route path="/Home" element={<IndexPage />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Resources" element={<Resource />} />
        {/* <Route path="/*" element={<ScrollToTop />} /> */}
      </Routes>
    </>
  );
}

export default App;
