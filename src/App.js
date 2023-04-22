import React from 'react';

import Navbar from './Pages/Home/NavBar'
import HeroSection from './Pages/Home/HeroSection';
import ResourceCard from './Components/ResourceCard/ResourceCard.jsx'
import Clubcard from './Components/ClubCard/Clubcard'
import Footer from './Components/Footer/Footer'
import Sportclub from './club/Sportsclub.jsx'
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

export default App