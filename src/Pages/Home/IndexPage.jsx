import React from "react";
import HeroSection from "./HeroSection";
import ResourceCard from "../../Components/ResourceCard/ResourceCard";
import Clubcard from "../../Components/ClubCard/Clubcard";
import Resource from "../../resources/Resource";

const IndexPage = () => {
  return (
    <>
      <HeroSection />
      <ResourceCard />
      <Clubcard />
      <Resource />
    </>
  );
};

export default IndexPage;
