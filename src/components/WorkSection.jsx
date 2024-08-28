import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with optional configuration
  }, []);

  return (
    <section className="w-full py-16 text-white px-5">
      <div className="mx-auto text-center">
        <h2 className="text-5xl font-bold text-white" data-aos="fade-up">
          Work
        </h2>
        <div
          className="mt-4 border-t-2 border-blue-300 w-20 mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        ></div>
      </div>

      <div
        className="flex flex-col md:flex-row justify-evenly items-center mt-16 space-y-8 md:space-y-0 md:space-x-8"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div
          className="portfolio-item bg-gray-900 p-6 rounded-lg shadow-lg"
          data-aos="fade-right"
        >
          <div className="portfolio-info text-left mb-4">
            <h3 className="text-2xl font-bold text-blue-400">
              Web<span className="text-gray-200">Internship</span>
            </h3>
            <p className="text-gray-400">Using React Framework</p>
          </div>
          <div className="portfolio-image mb-4">
            <img
              src="https://i.pinimg.com/736x/da/1d/4a/da1d4a5f37d9e18fae43a52c45cb7fda.jpg"
              alt="my office"
              className="max-w-lg rounded-lg border border-blue-500"
            />
          </div>
          <div className="portfolio-tech text-left">
            <h4 className="text-lg font-bold text-gray-200">
              DESIGN POS SYSTEM
            </h4>
            <p className="text-gray-400">
              HTML &nbsp;&nbsp;&nbsp; CSS &nbsp;&nbsp;&nbsp; JAVASCRIPT
            </p>
          </div>
        </div>
        <div data-aos="fade-left">
          <p className="text-gray-300 max-w-3xl mx-auto text-xl">
            During my internship, I gained hands-on experience in web
            development by collaborating on various projects that involved
            front-end and back-end tasks. My responsibilities included designing
            and developing responsive web pages using HTML, CSS, and JavaScript.
            I worked with frameworks such as React to create dynamic user
            interfaces and learned how to integrate APIs for seamless data flow
            between the front-end and back-end systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
