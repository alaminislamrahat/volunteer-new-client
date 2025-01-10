import React from "react";
import useAuth from "../../../Hooks/useAuth";

const preservenature = () => {
    const {isDarkMode} = useAuth();
    const cards = [
        {
            title: "01. Reforestation",
            description: "Plant trees to restore forests.",
            image: "https://i.ibb.co/556hzjV/plant-handfix.png", // Replace with your image
        },
        {
            title: "02. Recycling Waste",
            description: "Convert waste into reusable materials.",
            image: "https://i.ibb.co/ynZThXm/recycle.png", // Replace with your image
        },
        {
            title: "03. Voluntary Effort",
            description: "Join hands to protect our planet.",
            image: "https://i.ibb.co/cwSg8Qt/world-in-handsfix.png", // Replace with your image
        },
    ];

    return (
        <div className="max-w-6xl mx-auto container py-16">
            <h2 className="text-3xl font-bold text-center mt-10 mb-12">
                3 Steps to Preserve Nature
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`${isDarkMode ? 'bg-[#101714] text-white' : 'bg-white'}  bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6`}
                    >
                        <div
                            className="w-32 h-32 mx-auto rounded-full flex items-center justify-center mb-4"
                            style={{
                                backgroundColor: "#D3EFFF",
                                transition: "background-color 0.3s",
                            }}
                        >
                            <img
                                src={card.image}
                                alt={card.title}
                                className="w-20 h-20 object-contain rounded-full"
                            />
                        </div>
                        <h3 className={`${isDarkMode && 'text-white'} text-xl font-semibold text-gray-800 text-center mb-2`}>
                            {card.title}
                        </h3>
                        <p className={`${isDarkMode && 'text-white'} text-gray-600 text-center`}>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default preservenature;
