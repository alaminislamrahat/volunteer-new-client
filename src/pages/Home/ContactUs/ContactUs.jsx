import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div
      className="relative w-full h-auto py-24 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url('https://i.ibb.co.com/FKHFXDZ/volunteers-2021-08-27-09-40-37-utc.jpg')`, // Replace with your background image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-lg md:text-xl">
            We’d love to hear from you! Feel free to reach out via any of the
            methods below.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Phone */}
          <div className="flex items-center space-x-4 bg-white bg-opacity-20 p-8 rounded-lg shadow-lg">
            <FaPhoneAlt className="text-4xl text-[#E5B546]" />
            <div>
              <h2 className="text-xl font-semibold">Phone</h2>
              <p className="text-lg">+123 456 7890</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-4 bg-white bg-opacity-20 p-8 rounded-lg shadow-lg">
            <FaEnvelope className="text-4xl text-[#E5B546]" />
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <p className="text-lg">contact@example.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-4 bg-white bg-opacity-20 p-8 rounded-lg shadow-lg">
            <FaMapMarkerAlt className="text-4xl text-[#E5B546]" />
            <div>
              <h2 className="text-xl font-semibold">Location</h2>
              <p className="text-lg">123 Main Street, City, Country</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
