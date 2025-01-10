import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div
      className="relative w-full h-screen md:h-[80vh] bg-cover bg-center pb-20"
      style={{
        backgroundImage: `url('https://i.ibb.co/5R4wt81/2151191483.jpg')`, // Replace with your image URL
        backgroundAttachment: "fixed", // Makes the background image fixed
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Section */}
      <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-3xl"
        >
          <h1 className="text-xl md:text-5xl font-extrabold lg:mt-0 mt-[300px] md:pt-1 mb-8">
            Let's Help The Unfortunate People
          </h1>

          {/* Buttons with animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center lg:pb-0 pb-56"
          >
            <a
              href="#volunteer"
              className="px-6 py-3 bg-[#4E896D] text-white font-semibold rounded-lg transition-all w-full sm:w-auto text-center"
            >
              Become a volunteer
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-[#E5B561] text-[#E5B561] font-semibold rounded-lg hover:bg-[#E5B561] hover:text-white transition-all w-full sm:w-auto text-center"
            >
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
