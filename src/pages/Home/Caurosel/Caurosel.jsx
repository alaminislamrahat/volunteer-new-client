import React, { useState, useEffect } from "react";

const Carousel = () => {
    const slides = [
        {
            src: "https://i.ibb.co/9V8B65f/pexels-rdne-6646918.jpg",
            title: "Give Food",
            description: "Join us in making our beaches pristine and safe for everyone. Every small effort counts.",
        },
        {
            src: "https://i.ibb.co/W3Qbqwg/pexels-shvetsa-5029859.jpg",
            title: "Nature Conservation",
            description: "Help us protect the beauty of nature and support the local wildlife.",
        },
        {
            src: "https://i.ibb.co/DWJXtfK/ocg-saving-the-ocean-1j7-atc0z8-unsplash-1.jpg",
            title: "Save Our Oceans",
            description: "Be part of the movement to preserve our oceans for future generations.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Infinite carousel change
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full h-[80vh] overflow-hidden">
            {/* Carousel Images */}
            <div
                className="w-full h-full flex transition-transform duration-700 ease-in-out transform"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="w-full h-full flex-shrink-0 relative"
                        style={{
                            backgroundImage: `url(${slide.src})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Black Overlay */}
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                        {/* Title, Description, and Buttons */}
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                            <h2 className="text-4xl font-bold text-white mb-4">{slide.title}</h2>
                            <p className="text-lg text-white mb-6">{slide.description}</p>

                            {/* Buttons */}
                            <div className="flex space-x-4">
                                <button
                                    className="px-6 py-2 rounded-full text-white font-medium"
                                    style={{ backgroundColor: "#8dccb5" }}
                                >
                                    Be a Volunteer
                                </button>
                                <button
                                    className="px-6 py-2 rounded-full text-white font-medium"
                                    style={{ backgroundColor: "#e5b546" }}
                                >
                                    Add a Volunteer
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            >
                &#8592;
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            >
                &#8594;
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? "bg-white" : "bg-gray-500"
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
