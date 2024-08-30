import React from "react";
import { motion } from "framer-motion";

const LearningSpringSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center m-16 justify-center p-10 md:p-20 bg-gray-100 rounded-lg">
      {/* Animated Image */}
      <motion.div
        className="md:w-1/2 mb-8 md:mb-0"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="https://i.pinimg.com/736x/57/57/d2/5757d2241f7acd0d2410c4c1146a6ee3.jpg"
          alt="Learning Spring"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </motion.div>

      {/* Text Section with Animation */}
      <motion.div
        className="md:w-1/2 md:pl-10 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          I'm Learning Spring Framework!
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Dive into the world of Spring Framework to build robust and scalable
          web applications. Enhance your skills in Java-based web development
          with in-depth tutorials, hands-on projects, and expert guidance. Join
          me on this exciting journey to master Spring!
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out">
          Learn More
        </button>
      </motion.div>
    </section>
  );
};

export default LearningSpringSection;
