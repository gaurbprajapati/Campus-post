import React from "react";
import HeroSection from "./HeroSection";
import ResourceCard from "../../Components/ResourceCard/ResourceCard";
import Clubcard from "../../Components/ClubCard/Clubcard";

const IndexPage = () => {
  return (
    <div className="indexpage">
      <HeroSection />
      <ResourceCard />
      <Clubcard />
    </div>
  );
};

export default IndexPage;
