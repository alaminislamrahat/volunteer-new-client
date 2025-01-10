import React, { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); // For lightbox effect

  const images = [
    "https://i.ibb.co.com/t4P39ck/a-group-of-volunteers-are-cleaning-the-environment-2021-09-03-05-57-23-utc.jpg",
    "https://i.ibb.co.com/6grbg5C/group-of-volunteer-forming-huddles-2021-08-28-22-11-23-utc.jpg",
    "https://i.ibb.co.com/mNMNdvK/group-of-volunteer-planting-2021-08-28-17-20-48-utc.jpg",
    "https://i.ibb.co.com/mNMNdvK/group-of-volunteer-planting-2021-08-28-17-20-48-utc.jpg",
    "https://i.ibb.co.com/9tvNDtH/young-volunteers-picking-up-garbage-in-bag-at-park-2021-08-27-09-25-46-utc.jpg",
    "https://i.ibb.co.com/hgn06bB/volunteers-cleaning-garbage-2021-09-02-02-33-21-utc.jpg",
  ];

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Activity Gallery</h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => openLightbox(image)}
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={closeLightbox}
              className="absolute top-2 right-2 text-white text-2xl font-bold bg-gray-800 rounded-full w-8 h-8 flex items-center justify-center"
            >
              ×
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-screen rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;