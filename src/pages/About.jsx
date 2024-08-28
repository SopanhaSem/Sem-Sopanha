import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with optional configuration
  }, []);

  return (
    <section
      className="bg-black text-white py-12 px-4"
      data-aos="fade-up" // Add AOS animation here
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-blue-300">About</h2>
        <div className="mt-4 border-t-2 border-blue-300 w-20 mx-auto"></div>
        <p className="mt-6 text-lg leading-7 max-w-2xl mx-auto">
          In this part of my website, I’m excited to share what I’ve been
          learning and working on. I specialize in Front-End Development with
          React, which means I create the parts of websites and apps that people
          see and interact with. I also work with Back-End Development using
          Spring, which helps build the systems behind the scenes that make
          websites and apps run smoothly. Additionally, I’m learning Flutter,
          which is a tool for creating mobile apps that look great on both iOS
          and Android. When you scroll down, you’ll see this section smoothly
          slide up and showcase my skills in a fun way!
        </p>
      </div>

      <div
        className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-16 max-w-4xl mx-auto"
        data-aos="fade-up" // Add AOS animation here
        data-aos-delay="200" // Optional delay for staggered effect
      >
        <div className="text-center">
          <img
            src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-3d-icon-download-in-png-blend-fbx-gltf-file-formats--facebook-logo-native-javascript-library-user-interfaces-coding-lang-pack-logos-icons-7578010.png"
            alt="react"
          ></img>
          <h3 className="text-2xl font-bold">Front-End</h3>
          <p className="mt-2 text-gray-400">60+ Hours Experience</p>
          <div className="mt-4 border-t-2 border-blue-300 w-60 mx-auto"></div>
        </div>
        <div className="text-center">
          <img
            src="https://cdn.worldvectorlogo.com/logos/spring-3.svg"
            alt="spring"
          />
          <h3 className="text-2xl font-bold">spring</h3>
          <p className="mt-2 text-gray-400">80+ Hours Experience</p>
          <div className="mt-4 border-t-2 border-blue-300 w-60 mx-auto"></div>
        </div>
        <div className="text-center">
          <img
            src="https://cdn3d.iconscout.com/3d/free/thumb/free-flutter-3d-icon-download-in-png-blend-fbx-gltf-file-formats--android-logo-google-dart-coding-lang-pack-logos-icons-7577998.png?f=webp"
            alt="flutter"
          ></img>
          <h3 className="text-2xl font-bold">Flutter</h3>
          <p className="mt-2 text-gray-400">120+ Hours Experience</p>
          <div className="mt-4 border-t-2 border-blue-300 w-60 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
