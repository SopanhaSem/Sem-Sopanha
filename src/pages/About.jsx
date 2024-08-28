import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with optional configuration
  }, []);

  return (
    <section className="text-white py-12 px-4" data-aos="fade-up">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-300">About</h2>
        <div className="mt-4 border-t-2 border-blue-300 w-20 mx-auto"></div>
        <p className="mt-6 text-lg md:text-xl leading-7 max-w-2xl mx-auto">
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
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 max-w-4xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="text-center">
          <img
            src="https://cdn3d.iconscout.com/3d/free/thumb/free-react-3d-icon-download-in-png-blend-fbx-gltf-file-formats--facebook-logo-native-javascript-library-user-interfaces-coding-lang-pack-logos-icons-7578010.png"
            alt="react"
            className="mx-auto h-16 md:h-20"
          />
          <h3 className="text-xl md:text-2xl font-bold">Front-End</h3>
          <p className="mt-2 text-gray-400 text-sm md:text-base">
            60+ Hours Experience
          </p>
          <div className="mt-4 border-t-2 border-blue-300 w-40 md:w-60 mx-auto"></div>
        </div>

        <div className="text-center">
          <img
            src="https://cdn.worldvectorlogo.com/logos/spring-3.svg"
            alt="spring"
            className="mx-auto h-16 md:h-20"
          />
          <h3 className="text-xl md:text-2xl font-bold">Spring</h3>
          <p className="mt-2 text-gray-400 text-sm md:text-base">
            80+ Hours Experience
          </p>
          <div className="mt-4 border-t-2 border-blue-300 w-40 md:w-60 mx-auto"></div>
        </div>

        <div className="text-center">
          <img
            src="https://cdn3d.iconscout.com/3d/free/thumb/free-flutter-3d-icon-download-in-png-blend-fbx-gltf-file-formats--android-logo-google-dart-coding-lang-pack-logos-icons-7577998.png?f=webp"
            alt="flutter"
            className="mx-auto h-16 md:h-20"
          />
          <h3 className="text-xl md:text-2xl font-bold">Flutter</h3>
          <p className="mt-2 text-gray-400 text-sm md:text-base">
            120+ Hours Experience
          </p>
          <div className="mt-4 border-t-2 border-blue-300 w-40 md:w-60 mx-auto"></div>
        </div>

        <div className="text-center">
          <img
            src="https://cdn3d.iconscout.com/3d/free/thumb/free-figma-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-design-soft-tool-pack-logos-icons-7516877.png?f=webp"
            alt="figma"
            className="mx-auto h-16 md:h-20"
          />
          <h3 className="text-xl md:text-2xl font-bold">UX/UI</h3>
          <p className="mt-2 text-gray-400 text-sm md:text-base">
            120+ Hours Experience
          </p>
          <div className="mt-4 border-t-2 border-blue-300 w-40 md:w-60 mx-auto"></div>
        </div>

        <div className="text-center">
          <img
            src="https://cdn3d.iconscout.com/3d/free/thumb/free-github-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-social-media-brand-ball-pack-logos-icons-5639649.png?f=webp"
            alt="github"
            className="mx-auto h-16 md:h-20"
          />
          <h3 className="text-xl md:text-2xl font-bold">Git</h3>
          <p className="mt-2 text-gray-400 text-sm md:text-base">
            120+ Hours Experience
          </p>
          <div className="mt-4 border-t-2 border-blue-300 w-40 md:w-60 mx-auto"></div>
        </div>

        <div className="text-center">
          <img
            src="https://cdn3d.iconscout.com/3d/free/thumb/free-docker-5645891-4695749.png?f=webp"
            alt="docker"
            className="mx-auto h-16 md:h-20"
          />
          <h3 className="text-xl md:text-2xl font-bold">Docker</h3>
          <p className="mt-2 text-gray-400 text-sm md:text-base">
            80+ Hours Experience
          </p>
          <div className="mt-4 border-t-2 border-blue-300 w-40 md:w-60 mx-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
