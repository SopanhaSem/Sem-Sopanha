import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => {
      AOS.refresh();
    };
  }, []);

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="relative text-gray-300 flex items-center justify-between p-32 rounded-lg w-full mx-auto h-1/2 z-20">
      <div className="flex-1 text-start" data-aos="fade-right">
        <h2 className="text-4xl text-gray-100 mb-5">Hello, I'm Sopanha,</h2>
        <h2 className="text-8xl font-bold text-white">Full stack</h2>
        <h1 className="text-8xl font-bold  text-white mb-5">Developer</h1>
        <div className="text-2xl font-bold text-white cursor-pointer">
          Contact Me
        </div>
        <div className="border-t-8 border-black w-32  text-start"></div>
      </div>
      <div
        className="flex-1 flex justify-center items-center cursor-pointer"
        data-aos="fade-left"
        onClick={handleImageClick}
      >
        <img
          src="https://i.pinimg.com/736x/97/d9/f4/97d9f404a832ac53f753c7f985fa060d.jpg"
          alt="sopanha"
          className="w-full h-auto max-w-screen-xl rounded-lg"
        />
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-0 right-0 m-2 text-white text-3xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src="https://i.pinimg.com/736x/97/d9/f4/97d9f404a832ac53f753c7f985fa060d.jpg"
              alt="Emad"
              className="rounded-lg max-w-full max-h-screen"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
