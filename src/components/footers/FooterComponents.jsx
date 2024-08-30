import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logoImage from "/src/assets/background/SemSopanha-8-30-2024.gif";
const FooterComponents = () => {
  return (
    <footer className="w-full bg-primary text-white p-4">
      <div className="flex items-center justify-between mx-auto max-w-screen-xl">
        <span className="text-4xl font-semibold">
          <img src={logoImage} alt="logo" className="w-32 object-contain" />
        </span>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/profile.php?id=100035612538137"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f text-4xl"></i>
          </a>
          <a
            href="https://www.instagram.com/alberrr_r23/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram text-4xl"></i>
          </a>
          <a
            href="https://github.com/SopanhaSem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github text-4xl "></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponents;
