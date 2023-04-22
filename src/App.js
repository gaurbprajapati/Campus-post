import React from "react";

import Sportclub from "./club/Sportsclub.jsx";
import Clubcard from "./Components/ClubCard/Clubcard";
import Footer from "./Components/Footer/Footer";
import ResourceCard from "./Components/ResourceCard/ResourceCard.jsx";
import HeroSection from "./Pages/Home/HeroSection";
import Navbar from "./Pages/Home/NavBar";

function App() {
  return (
    <>


      <Navbar />
      <HeroSection />
      <ResourceCard />
      <Clubcard />
      {/* <Footer /> */}

      <Sportclub />

    </>
  );
}

export default App;
