import React from "react";
import HeroSection from "../components/HeroSection";
import About from "./About";
import ParticlesComponent from "../components/ParticleComponents";
import WorkSection from "../components/WorkSection";
import ContactMe from "../components/ContactMe";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <WorkSection />
      <ContactMe />
    </>
  );
};

export default Home;
