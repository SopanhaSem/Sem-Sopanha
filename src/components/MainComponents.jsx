import React from "react";
import { Outlet } from "react-router-dom";
import NavbarComponents from "./Navbar/NavbarComponents";
import FooterComponents from "./footers/FooterComponents";
import { Footer } from "flowbite-react";
import ParticlesComponent from "../components/ParticleComponents";

const MainComponents = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <header className="w-full sticky top-0 left-0 z-30">
        <NavbarComponents />
      </header>
      <ParticlesComponent
        id="main-tsparticles"
        className="absolute inset-0 -z-10"
      />

      <div className="relative flex flex-col min-h-screen">
        <main className="flex-grow z-10">
          <Outlet />
        </main>
        <Footer className="mt-auto z-20">
          <FooterComponents />
        </Footer>
      </div>
    </div>
  );
};

export default MainComponents;
